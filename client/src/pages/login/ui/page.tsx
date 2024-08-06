import { Link } from "react-router-dom";
import { LoginForm } from "src/features/auth/login";

export const Login = () => (
  <div className="pt-36">
    <h1 className="text-center">
      Авторизация
    </h1>
    <LoginForm />
    <p className="text-right mt-4">
      Еще нет аккаунта? <Link to='/register' className="text-cyan-700">Создать аккаунт</Link> 
    </p>
  </div>
);
