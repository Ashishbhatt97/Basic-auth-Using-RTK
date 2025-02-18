import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerInput, registerSchema } from "@/types/auth.types";
import { useRegisterMutation } from "@/services/api";
import { useEffect } from "react";

export default function Signup() {
  const [registerUser, { data }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<registerInput>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<registerInput> = (formData) => {
    registerUser(formData);
    reset();
  };

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full">
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1739382122846-74e722a6eea4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div>
          <div className="text-8xl text-center font-bold">
            <h1>Sign Up</h1>
          </div>
          <form
            className="flex flex-col gap-5 items-center mt-20"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              className="w-96 h-12 placeholder:text-neutral-400 pl-4 placeholder:text-sm bg-neutral-700 rounded-md placeholder:border-e-neutral-500"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="w-96 text-xs text-red-400 text-left pl-4">
                {errors.name?.message}
              </span>
            )}{" "}
            <input
              type="text"
              className="w-96 h-12 placeholder:text-neutral-400 pl-4 placeholder:text-sm bg-neutral-700 rounded-md placeholder:border-e-neutral-500"
              placeholder="Enter your username"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="w-96 text-xs text-red-400 text-left pl-4">
                {errors.username?.message}
              </span>
            )}
            <input
              type="email"
              className="w-96 h-12 placeholder:text-neutral-400 pl-4 placeholder:text-sm bg-neutral-700 rounded-md placeholder:border-e-neutral-500"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="w-96 text-xs text-red-400 text-left pl-4">
                {errors.email?.message}
              </span>
            )}
            <input
              className="w-96 h-12 pl-4 placeholder:text-neutral-400 placeholder:text-sm bg-neutral-700 rounded-md placeholder:border-e-neutral-500"
              placeholder="Enter your password"
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="w-96 text-red-400 text-xs text-left pl-4">
                {errors.password?.message}
              </span>
            )}
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-96 h-12 pl-4 placeholder:text-neutral-400 placeholder:text-sm bg-neutral-700 rounded-md placeholder:border-e-neutral-500"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <span className="w-96 text-red-400 text-xs text-left pl-4">
                {errors.confirmPassword?.message}
              </span>
            )}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              style={textFieldStyle}
            >
              Submit
            </Button>
          </form>

          <div className="text-center mt-5">
            <span className="text-sm text-neutral-400">
              Already have an account?{" "}
              <a href="/login" className="text-white">
                Login
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const textFieldStyle = {
  fontFamily: "Plus Jakarta Sans",
  backgroundColor: "#a1a1a1",
  color: "black",
  borderRadius: "5px",
  onfocus: {
    outline: "none",
  },
};
