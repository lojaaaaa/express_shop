import { Controller, useForm, SubmitHandler } from "react-hook-form"
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import { usePostRegisterMutation } from "src/entites/user/api";
import { useEffect } from "react";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const Registration = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
    watch
  } = useForm<FormValues>()

  const [register, { error }] = usePostRegisterMutation();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    register({
      email: data.email,
      password: data.password
    });
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
      Регистрация
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

      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: "Подтвердите пароль",
          validate: value =>
            value === watch('password') || "Пароли не совпадают",
        }}
        render={({ field }) => <Input.Password {...field} placeholder="Подтвердите пароль" size="large" />}
      />
      {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
      {errors.root && <span className="text-red-500">{errors.root.message}</span>}

      <Button type="primary" size="large" htmlType="submit"> 
        Создать
      </Button>
    </form>
    <p className="text-right mt-4">
      Уже есть аккаунт? <Link to='/login' className="text-cyan-700">Войти в аккаунт</Link> 
    </p>
  </div>
  )
}