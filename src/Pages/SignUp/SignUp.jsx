import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";


const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserData, logOut } = useContext(AuthContext);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserData(data.name, data.photoUrl)
          .then(() => {
            reset();
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Successfully SignUp!',
              showConfirmButton: false,
              timer: 1500
            });
            logOut();
            navigate('/login');
          })
          .catch(error => {
            setError(error.message);
          });
      })
      .catch(error => {
        setError(error.message);
      });
  };


  return (
    <div>
      <div className="hero min-h-screen bg-base-200  ">
        <div className="hero-content flex-col  lg:flex-row mt-12">
          <div className="card flex-shrink-0 w-full  max-w-md shadow-2xl mt-8 bg-orange-500">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-semibold ">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-white">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-semibold ">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-white">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-semibold ">Photo Url</span>
                </label>
                <input type="text" {...register("photoUrl", { required: true })} placeholder="Photo Url" className="input input-bordered" />
                {errors.photoUrl && <span className="text-white">Photo URl is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-semibold ">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/

                })} placeholder="password" className="input input-bordered text-black" />
                {errors.password?.type === 'required' && <p className="text-white">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-white">Password must be 6 characters</p>}

                {errors.password?.type === 'pattern' && <p className="text-white">Password must have one Uppercase and one special character.</p>}


              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-semibold ">Confirm Password</span>
                </label>
                <input type="password"  {...register("confirmPassword", { required: true })} placeholder="Confirm password" className="input input-bordered text-black" />
                {errors.photoUrl && <span className="text-white">password is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn border-black  mt-3">SignUp</button>
              </div>
              <div className="text-white">
                <h3>Already Have An Account? Please <Link to="/login"><span className="font-bold">Login</span></Link> </h3>
              </div>
              <p className="text-white font-semibold">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </div>


  );
};

export default SignUp;