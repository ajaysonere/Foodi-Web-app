import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link ,useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Model from "./Model";
import { authContext } from "../contexts/AuthProvider";
import { useContext } from "react";
import { useNavigate} from 'react-router-dom';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, login } = useContext(authContext);

  // redirection to home pr specific page
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathName || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        alert("Account created Successfully");
        document.getElementById("my_modal_5").close();
        navigate(from , {replace : true});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="max-w-md bg-white shadow-w-full  mx-auto flex items-center justify-center my-48">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form
          className="card-body"
          method="dialog"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="font-bold text-lg"> Create An Account </h3>
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
              <a href="#" className="label-text-alt link link-hover"></a>
            </label>
          </div>

          {/* submit btn */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Register"
              className="btn bg-green text-white"
            />
          </div>
          <p className="text-center my-2">
            have an account ?
            <button
              className="underline text-red ml-1"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              {" "}
              Login{" "}
            </button>
          </p>
          <Link
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            to="/"
          >
            ✕
          </Link>
        </form>

        {/* social btns */}
        <div className="text-center space-x-3 mb-5">
          <button className="btn btn-circle hover:bg-green hover:text-white">
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
      <Model />
    </div>
  );
};

export default Signup;
