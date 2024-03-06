// RegistrationForm.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { TfiApple } from "react-icons/tfi";
import { IoLogoGithub } from "react-icons/io";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    getValues,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setTimeout(() => {
      navigate("/", { state: { userName: data.name } });
    }, 2000);
  };

  const handleOnclick = () => {
    navigate("/");
  };

  return (
    <div className="text-[red] p-2.5">
      <div className="mr-10 mt-2">
        <img
          onClick={handleOnclick}
          src="https://kalvium.community/images/sidebar-3d-logo.svg"
          className="h-20 w-20 rounded-2xl p-2"
          alt="Logo"
        />
        {isSubmitSuccessful ? (
          <h2 className="text-green-500 text-4xl font-bold text-center mt-[-20px]">
            Registration successful!
          </h2>
        ) : (
          <p className="text-green-500 text-4xl font-bold text-center mt-[-20px]">
            Create Account
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col justify-center items-center text-xl">
          <input
            placeholder="Enter your Name"
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              maxLength: {
                value: 30,
                message: "Name must be less than 30 characters",
              },
            })}
            className="h-14 w-2/5 text-[chocolate] text-xl text-center shadow-[-5px_-1px_20px_-6px_rgba(0,0,0,0.75)] cursor-auto m-5 p-2.5 rounded-[30px] border-0 hover:shadow-[inset_-5px_-4px_55px_0px_rgba(175,230,131,1)]"
          />
          {errors.name && <p>{errors.name.message}</p>}
          <input
            placeholder="Enter your Email Address"
            type="text"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="h-14 w-2/5 text-[chocolate] text-xl text-center shadow-[-5px_-1px_20px_-6px_rgba(0,0,0,0.75)] cursor-auto m-5 p-2.5 rounded-[30px] border-0 hover:shadow-[inset_-5px_-4px_55px_0px_rgba(175,230,131,1)]"
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            placeholder="Enter your Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 10,
                message: "Password must be at least 10 characters",
              },
            })}
            className="h-14 w-2/5 text-[chocolate] text-xl text-center shadow-[-5px_-1px_20px_-6px_rgba(0,0,0,0.75)] cursor-auto m-5 p-2.5 rounded-[30px] border-0 hover:shadow-[inset_-5px_-4px_55px_0px_rgba(175,230,131,1)]"
          />
          {errors.password && <p>{errors.password.message}</p>}

          <input
            placeholder="Repeat your password"
            type="password"
            {...register("repeatPassword", {
              required: "Repeat Password is required",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
            className="h-14 w-2/5 text-[chocolate] text-xl text-center shadow-[-5px_-1px_20px_-6px_rgba(0,0,0,0.75)] cursor-auto m-5 p-2.5 rounded-[30px] border-0 hover:shadow-[inset_-5px_-4px_55px_0px_rgba(175,230,131,1)]"
          />
          {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
        </div>
        <button
          className="h-[60px] w-[30%] text-[25px] bg-[#f4d35e] relative cursor-pointer p-2.5 rounded-[30px] border-0 left-[35%] top-[55%] mt-4"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? (
            <p>Loading...</p>
          ) : (
            <p style={{ color: "black" }}>Sign Up</p>
          )}
        </button>
      </form>
      <div
        style={{
          height: "10px",
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginLeft: "40px",
          borderBottom: "1px solid rgba(0, 0, 0, 0.359)",
        }}
      ></div>
      <p style={{ color: "black", textAlign: "center" }}>
        Or <strong>Sign Up</strong> with
      </p>
      <div className="h-[60px] w-full flex justify-center items-center p-20">
        <FcGoogle className="h-[100px] w-[100px] p-5" />
        <TfiApple className="h-[100px] w-[100px] p-5" />
        <IoLogoGithub className="h-[100px] w-[100px] p-5" />
      </div>
    </div>
  );
};

export default RegistrationForm;
