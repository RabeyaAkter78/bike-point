import  { useState, useEffect } from 'react';
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch users from the server
    const fetchUsers = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // Handle making a user an admin
    const handleMakeAdmin = async (user) => {
        try {
            const response = await fetch(`http://localhost:5000/users/admin/${user._id}`, {
                method: 'PATCH'
            });
            const data = await response.json();
            if (data.modifiedCount) {
                fetchUsers(); // Refetch users after making an admin
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error('Error making admin:', error);
        }
    };

    // Handle deleting a user
    const handleDelete = (user) => {
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
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        fetchUsers(); // Refetch users after deletion
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                    }
                })
                .catch(error => {
                    console.error('Error deleting user:', error);
                });
            }
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="w-full h-full">
            <h3 className="text-3xl font-semibold">All Users: {users.length}</h3>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="flex gap-4">
                                    {user.role === 'admin' ? (
                                        <button className="btn btn-outline border-0 border-y-2 bg-gray-800 mt-3" disabled>Admin</button>
                                    ) : (
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-outline border-0 border-y-2 btn-error mt-3">Admin</button>
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost font-bold btn-md text-white bg-red-600">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
