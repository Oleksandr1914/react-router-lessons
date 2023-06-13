import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const hadleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const user = form.username.value;
    // { replace: true } в navigate -  означає що при кліку на кнопку назад ви на цю сторінку не потрапите
    signin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={hadleSubmit}>
        <label>
          Name: <input name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
