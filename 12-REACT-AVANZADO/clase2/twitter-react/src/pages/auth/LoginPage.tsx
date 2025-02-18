import { useEffect, useRef, useState } from "react";
import Button from "../../components/shared/Button";
import { login } from "./service";
import FormField from "../../components/shared/FormField";
import "./LoginPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiClientError } from "../../api/error";
import { isApiClientError } from "../../api/client";
import { createPortal } from "react-dom";
import copyStyles from "../../utils/copyStyles";
import { useAppDispatch } from "../../store";
import { authLogin } from "../../store/actions";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<ApiClientError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const response = await login(credentials);
      console.log(response);
      dispatch(authLogin());
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((credentials) => {
      return { ...credentials, [event.target.name]: event.target.value };
    });
  };
  const { username, password } = credentials;
  const isDisabled = !username || !password || isLoading;

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="username"
          label="phone, email or username"
          value={username}
          onChange={handleChange}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          value={password}
          onChange={handleChange}
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

export default function LoginPagePortal() {
  const portalContainer = useRef<HTMLDivElement>(document.createElement("div"));

  useEffect(() => {
    portalContainer.current.className = "container";

    const externalWindow = window.open("", "", "width=600, height=400");

    externalWindow?.document.body.appendChild(portalContainer.current);
    copyStyles(window.document, externalWindow!.document);

    return () => {
      externalWindow?.close();
    };
  }, []);

  return createPortal(<LoginPage />, portalContainer.current);
}
