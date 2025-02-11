import { useEffect, useRef, useState } from "react";
import Button from "../../components/shared/Button";
import { login } from "./service";
import { useAuth } from "./context";
import FormField from "../../components/shared/FormField";
import "./LoginPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiClientError } from "../../api/error";
import { isApiClientError } from "../../api/client";
import { createPortal } from "react-dom";
import copyStyles from "../../utils/copyStyles";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState<ApiClientError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { onLogin } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await login(formData);
      console.log(response);
      onLogin();
      const to = location.state?.from ?? "/";
      navigate(to, { replace: true });
    } catch (error) {
      if (isApiClientError(error)) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const isDisabled = !formData.username || !formData.password || isLoading;
  const portalContainer = useRef(document.createElement("div"));
  useEffect(() => {
    portalContainer.current.className = "container";
    const externalWindow = window.open("", "", "width=600, height=400");
    externalWindow?.document.body.appendChild(portalContainer.current);
    copyStyles(window.document, externalWindow!.document);

    return () => {
      externalWindow?.close();
    };
  }, []);
  return (
    <div className="loginPage">
      {/* PORTAL TO DOM NODE */}
      {createPortal(
        <h1>PORTAL</h1>,
        document.getElementById("portal") as Element,
      )}
      {/* PORTAL NEW WINDOW */}
      {createPortal(<h1>PORTAL NEW WINDOW</h1>, portalContainer.current)}
      <h1 className="loginPage-title">Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="username"
          label="phone, email or username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          $variant="primary"
          disabled={isDisabled}
          className="loginForm-submit"
        >
          Log in
        </Button>
        {error && (
          <div className="loginPage-error" onClick={() => setError(null)}>
            {error.message}
          </div>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
