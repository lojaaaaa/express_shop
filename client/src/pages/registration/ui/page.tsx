import { Link } from "react-router-dom";
import { RegistrationForm } from "src/features/auth/registration";

export const Registration = () => (
  <div className="pt-36">
    <h1 className="text-center">
      Регистрация
    </h1>
    <RegistrationForm />
    <p className="text-right mt-4">
      Уже есть аккаунт? <Link to='/login' className="text-cyan-700">Войти в аккаунт</Link> 
    </p>
  </div>
);