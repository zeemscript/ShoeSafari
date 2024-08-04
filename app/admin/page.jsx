"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../lib/firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "ShoeSafariProducts")
        );
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(dataArray);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductAdded = () => {
    setSelectedProductId(null);
    fetchProducts();
  };

  const handleProductUpdated = () => {
    setSelectedProductId(null);
    fetchProducts();
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "ShoeSafariProducts", id));
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

 

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-6 text-center">Products Admin</h1>
      <AddProductForm onProductAdded={handleProductAdded} />
      {selectedProductId && (
        <EditProductForm
          productId={selectedProductId}
          onProductUpdated={handleProductUpdated}
        />
      )}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4 border-b">{product.name}</td>
                  <td className="py-2 px-4 border-b">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-16 w-16 object-cover"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-2"
                      onClick={() => setSelectedProductId(product.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsAdmin;
