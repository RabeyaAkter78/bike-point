import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const AllProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    // load all product:
    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            });

        setLoading(false);
    }, []);

    // modal
    const handleDetailsClick = (product) => {
        setSelectedProduct(product);
        document.getElementById('product_modal').showModal();
    };


    return (

        <div className="  mb-10">
            <SectionTitle
                heading={"All Products"}
                SubHeading={"Explore Our Best Products"}
            ></SectionTitle>
            <div className="grid grid-col-1 md:grid-cols-3 gap-4 ">
                {
                    products.map((product) => <div className="mx-auto" key={product._id}>
                        <div className="card  card-compact h-full w-96 bg-base-300 shadow-xl p-4 ">
                            <figure><img className="h-72" src={product.bikePhoto} alt={product.bikeName} /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-xl"> Bike Name: {product.bikeName}</h2>
                                <p className="text-lg font-semibold"> Specification: {product.bikeSpecification}</p>
                                <p className="font-bold text-neutral-600"> Price: ${product.bikePrice}</p>
                                <p className="font-bold text-neutral-600"> Condition: {product.condition}</p>
                                <div className="card-actions justify-end">
                                    <button  onClick={() => handleDetailsClick(product)} className="btn bg-orange-500 hover:bg-orange-700 text-white">See More</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {selectedProduct && (
                <dialog id="product_modal" className="modal ">
                    <div className="modal-box bg-orange-100 font-semibold text-neutral-700">
                        <figure><img className="p-4 border-2 mx-auto rounded-xl mb-2" src={selectedProduct.bikePhoto} alt={selectedProduct.bikeName} /></figure>
                        <h2 className="card-title">Product Name: {selectedProduct.bikeName}</h2>
                        <p>Price: ${selectedProduct.bikePrice}</p>
                        <div className="grid grid-cols-2 border-r-2 "></div>
                        <p>Condition: {selectedProduct.condition}</p>
                        <p>Specification: {selectedProduct.bikeSpecification}</p>
                        <p>Seller Name: {selectedProduct.sellerName}</p>
                        <p>sellerEmail: {selectedProduct.sellerEmail}</p>
                    
                        <div className="modal-action flex gap-2">
                            <form method="dialog">
                                <button className="btn  bg-orange-500 hover:bg-orange-700 text-white">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}

        </div>

    );
};

export default AllProduct;