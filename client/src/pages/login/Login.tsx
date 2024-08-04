import { Controller, useForm, SubmitHandler } from "react-hook-form"
import { Button, Input } from "antd";
import { Link, } from "react-router-dom";
import { usePostLoginMutation } from "src/entites/user/api";
import { LoginFormData } from "src/entites/user/model/types";
import { useEffect } from "react";

export const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError
  } = useForm<LoginFormData>();

  const [login, { isLoading, error }] = usePostLoginMutation();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    login(data);
  };

  useEffect(() => {
    if (error) {
      setError("root", {
        message: error.data.message,
      });
    }
  }, [error, setError])

  return (
    <div className="pt-36">
      <h1 className="text-center">
        Авторизация
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-8">
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Введите почту",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Некорректный email"
            }
          }}
          render={({ field }) => <Input {...field} placeholder="Введите почту" size="large" />}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}

        <Controller
          name="password"
          control={control}
          rules={{
            required: "Введите пароль",
          }}
          render={({ field }) => <Input.Password {...field} placeholder="Введите пароль" size="large" />}
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        {errors.root && <span className="text-red-500">{errors.root.message}</span>}

        <Button type="primary" size="large" htmlType="submit" disabled={isLoading}> 
          Войти
        </Button>

      </form>
      <p className="text-right mt-4">
        Еще нет аккаунта? <Link to='/register' className="text-cyan-700">Создать аккаунт</Link> 
      </p>
    </div>
  )
}
