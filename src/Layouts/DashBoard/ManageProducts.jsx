import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash, } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);

    const { data, refetch, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            return res.json();
        }
    });

    useEffect(() => {
        if (data) {
            setProducts(data);
        }
    }, [data]);

    const handleDelete = (productId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${productId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            );
                        } else {
                            Swal.fire(
                                'Error!',
                                'Failed to delete the product.',
                                'error'
                            );
                        }
                    })
            }
        });
    };
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div className="text-red-500">Error: {error.message}</div>;
    }



    return (
        <div>
            <div className=" overflow-y-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-orange-300">
                            <th>#</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => <tr key={product._id} className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.bikePhoto} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{product.bikeName}</td>
                                <td>{product.sellerName}</td>
                                <td>{product.sellerEmail}</td>
                                <td>${product.product_price}</td>
                                <th>
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-success border-0 border-b-2 btn-outline btn-md"><FaEdit></FaEdit></button>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-error border-0 border-b-2 btn-outline btn-md"><FaTrash></FaTrash></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;