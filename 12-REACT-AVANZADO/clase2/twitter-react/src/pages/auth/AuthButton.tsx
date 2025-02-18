import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";
import { logout } from "../../pages/auth/service";
import { useAppDispatch, useAppSelector } from "../../store";
import { authLogout } from "../../store/actions";
import { getIsLogged } from "../../store/selectors";

export default function AuthButton() {
  const isLogged = useAppSelector(getIsLogged);
  const dispatch = useAppDispatch();

  const handleLogoutClick = async () => {
    await logout();
    dispatch(authLogout());
  };

  return isLogged ? (
    <Button onClick={handleLogoutClick} $variant="secondary">
      Logout
    </Button>
  ) : (
    <Button $variant="primary" as={Link} to="/login">
      Login
    </Button>
  );
}
