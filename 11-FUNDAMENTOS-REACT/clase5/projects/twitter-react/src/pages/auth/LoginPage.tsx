import { useState } from "react";
import Button from "../../components/shared/Button";
import { login } from "./service";
import { useAuth } from "./context";
import FormField from "../../components/shared/FormField";
import "./LoginPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiClientError } from "../../api/error";
import { isApiClientError } from "../../api/client";

// function getFormDataValue(formData: FormData, name: string) {
//   const value = formData.get(name);
//   if (typeof value === "string") {
//     return value;
//   }
//   return "";
// }

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<ApiClientError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { onLogin } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      // const formData = new FormData(event.currentTarget);
      const response = await login({
        // username: getFormDataValue(formData, "username"),
        // password: getFormDataValue(formData, "password"),
        username,
        password,
      });
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

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

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
          onChange={handleUsernameChange}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          value={password}
          onChange={handlePasswordChange}
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
