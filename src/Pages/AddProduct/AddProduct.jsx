import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useContext} from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const handleAddProduct = (data) => {
    
        fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(responseData => {
                if (responseData.insertedId) {
                    toast.success('Added Successfully!');
                    reset(); 
                }
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('An Error occurred while adding The Product');
            });
    };




    return (
        <div>

            <div className="hero-content flex-col lg:flex-row ">
                <div className="mt-24 bg-orange-500 card flex-shrink-0 w-full max-w-md shadow-2xl">
                    <form onSubmit={handleSubmit(handleAddProduct)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Your Name</span>
                            </label>
                            <input type="text" {...register("name")} placeholder="Your Name" className="input input-bordered" defaultValue={user?.displayName} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="text" {...register("email")} placeholder="Email" className="input input-bordered" defaultValue={user?.email} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo")} placeholder="Photo URL" className="input input-bordered" defaultValue={user?.photoURL || ''} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Bike Name</span>
                            </label>
                            <input type="text" {...register("bikeName")} placeholder="Bike Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Write description</span>
                            </label>
                            <input type="text" {...register("description")} placeholder="Write description" className="Textarea textarea-accent w-80 h-52" required />
                        </div>
                       
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#C1DCDC]">Submit</button>
                            <Toaster />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
