import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const formRef = useRef(null);

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
        <div className="">
            <div className="shadow-2xl bg-orange-100">
                <form ref={formRef} onSubmit={handleSubmit(handleAddProduct)} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full pt-32">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" {...register("sellerName")} placeholder="Your Name" className="input input-bordered" defaultValue={user?.displayName} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" {...register("sellerEmail")} placeholder="Email" className="input input-bordered" defaultValue={user?.email} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Photo</span>
                        </label>
                        <input type="text" {...register("photo")} placeholder="Photo URL" className="input input-bordered" defaultValue={user?.photoURL || ''} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Bike Name</span>
                        </label>
                        <input type="text" {...register("bikeName")} placeholder="Bike Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Bike Image</span>
                        </label>
                        <input type="text" {...register("bikeImage")} placeholder="Bike Image" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Bike Price</span>
                        </label>
                        <input type="text" {...register("bikePrice")} placeholder="$ 00.00" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Bike Specification</span>
                        </label>
                        <input type="text" {...register("bikeSpecification")} placeholder="Bike Specification" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Write condition</span>
                        </label>
                        <input type="text" {...register("condition")} placeholder="Write condition" className="Textarea textarea-accent p-2 rounded" required />
                    </div>
                </form>
               
            </div>
            <div className="form-control mt-8">
                    <button onClick={() => formRef.current.requestSubmit()} className="btn bg-orange-500">Submit</button>
                    <Toaster />
                </div>
        </div>
    );
};

export default AddProduct;
