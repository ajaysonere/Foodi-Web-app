import { useContext } from "react";
import { useForm } from "react-hook-form";
import { authContext } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Updateprofile = () => {
  const { updateUserProfile } = useContext(authContext);

  // redirection to home pr specific page
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathName || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    console.log(data);

    updateUserProfile(name, photoURL)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((errors) => {
        console.log("Error while updating profile");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold ">Update Profile </h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Photo</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              {...register("photoURL")}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green text-white">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updateprofile;
