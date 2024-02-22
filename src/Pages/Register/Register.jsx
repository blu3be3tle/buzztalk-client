import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
const Register = () => {
  const { createUser, googleLogin, facebookLogin, githubLogin } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);

    // User Creation
    createUser(data?.email, data?.password)
      .then((res) => {
        console.log(res.user);
        Swal.fire("Great!", "Your Account is Registered", "success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
        });
      });
  };

  // Facebook Login
  const handleFacebookLogin = () => {
    facebookLogin()
      .then((res) => {
        console.log(res.user);
        Swal.fire("Great!", "Your Account is Registered", "success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
        });
      });
  };

  // Google Login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        Swal.fire("Great!", "Your Account is Registered", "success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
        });
      });
  };

  // Github Login
  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => {
        console.log(res.user);
        Swal.fire("Great!", "Your Account is Registered", "success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
        });
      });
  };

  // console.log(watch("")); // watch input value by passing the name of it
  // console.log(errors);
  return (
    <div className="bg-gradient-to-r from-[#7269EF] to-purple-500">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-4 z-10 -ms-20">
          <img
            className=" w-full ms-36"
            src="https://i.ibb.co/nP1f6GP/loginImg.png"
            alt=""
          />
        </div>

        <div className=" col-span-8 flex items-center bg-white rounded-lg  my-8 mx-4 -ms-8 py-10 ">
          <div className="text-center w-6/12 mx-auto my-4">
            <h1 className="text-3xl font-medium">Register Account</h1>
            <p className="text-base text-gray-500">
              Get your free Doot account now.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="pt-8">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                <div className="form-control col-span-1">
                  <label className="label">
                    <span className="label-text font-medium">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="input input-bordered"
                    // required
                  />
                  {errors.name && (
                    <span className="text-red-400 text-sm text-left">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control col-span-1">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-sm text-left">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="form-control col-span-1">
                <label className="label">
                  <span className="label-text font-medium">PhotoUrl</span>
                </label>
                <input
                  {...register("photoURL", {
                    required: {
                      value: true,
                      message: "Url is required",
                    },
                    pattern:
                      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
                  })}
                  placeholder="PhotoUrl"
                  // type="url"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-400 text-sm text-left">
                    {`${errors.photoURL.message}` || "Enter a valid Url"}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="flex items-center">
                  <input
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    })}
                    // Minimum eight characters, at least one letter, one number and one special character:
                    // name="password"

                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered w-full"
                  />

                  <span
                    className="-ms-8 cursor-pointer"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? (
                      <span>
                        <FaEye />
                      </span>
                    ) : (
                      <span>
                        <FaEyeSlash />
                      </span>
                    )}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-red-400 text-sm text-left pt-2">
                    Minimum eight characters, at least one letter, one number
                    and one special character
                  </span>
                )}
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-Cpurple/[80%] text-white hover:bg-Cpurple/[100%]">
                  Register
                </button>
              </div>
            </form>

            <div className="divider py-5 text-base font-medium">
              Sign up using
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={handleFacebookLogin}
                className="bg-gray-200 hover:bg-gray-400 transition-colors duration-500 flex justify-center py-3 rounded"
              >
                <FaFacebook className="text-blue-700" />
              </button>
              <button
                onClick={handleGoogleLogin}
                className="bg-gray-200 hover:bg-gray-400 transition-colors duration-500 flex justify-center py-3 rounded"
              >
                <FcGoogle />
              </button>
              <button
                onClick={handleGithubLogin}
                className="bg-gray-200 hover:bg-gray-400 transition-colors duration-500 flex justify-center py-3 rounded"
              >
                <FaGithub />
              </button>
            </div>
            <div>
              <p className="text-base pt-5">
                Already have an account?
                <Link to="/login">
                  <span className="text-Cpurple font-medium"> Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
