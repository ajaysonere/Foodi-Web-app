import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {authContext} from '../contexts/AuthProvider';
import { useContext, useState } from "react";

const Model = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const {signUpWithGoogle , login } = useContext(authContext);
  const [errorMessage , setErrorMessage] = useState("");
  
  // redirection to home pr specific page
  const location = useLocation();
  const navigate = useNavigate();
  
  const from = location.state?.from?.pathName || "/";
  
  
  const onSubmit = (data) => {
      const email = data.email;
      const password = data.password;
      // console.log(email , password);
      login(email , password).then((result) => {
          const user = result.user;
          alert("User login")
          document.getElementById("my_modal_5").close();
      }).catch((error) => {
          const errorMessage = error.message;
          setErrorMessage("user name or password is incorrect");
      });
  };
  
  // handle sign up with google
  
  const handleSignUpWithGoogle = async () => {
      try {
        const result = await signUpWithGoogle();
        const user = result.user;
        alert("User Logged in Successfully");
        navigate(from , {replace : true})
      } catch (error) {
        console.log(error);
      }
  } ;

  return (
    <>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action flex flex-col justify-center mt-0">
            <form
              className="card-body"
              method="dialog"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="font-bold text-lg">Please Login ! </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email")}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password")}
                  required
                />
                <label className="label mt-2">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              
              {
                 errorMessage ? <p className="text-red text-xs italic">{errorMessage}</p> : ""
              }

              {/* submit btn */}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-green text-white"
                />
              </div>
              <p className="text-center my-2">
                Don't have an account ?
                <Link to="/signup" className="underline text-red ml-1">
                  {" "}
                  Register{" "}
                </Link>
              </p>
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                htmlFor="my_modal_5"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                ✕
              </button>
            </form>

            {/* social btns */}
            <div className="text-center space-x-3 mb-5">
              <button
                className="btn btn-circle hover:bg-green hover:text-white"
                onClick={handleSignUpWithGoogle}
              >
                <FaGoogle />
              </button>
              <button className="btn btn-circle hover:bg-green hover:text-white">
                <FaFacebookF />
              </button>
              <button className="btn btn-circle hover:bg-green hover:text-white">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Model;