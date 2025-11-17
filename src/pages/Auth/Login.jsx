import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = useAuth();

  const handleLogin = (data) => {
    console.log("form log in", data);
    loginUser(data.email, data.password)
    .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h3 className="text-3xl text-center">Welcome Back</h3>
        <p className="text-center">Please Login</p>
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          {/* {email} */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {/* {password} */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true , minLength: 6})}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer...
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>New to Zap Shift <Link className="text-blue-400 underline" to='/register'>Register</Link></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
