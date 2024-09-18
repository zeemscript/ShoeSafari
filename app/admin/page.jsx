"use client";
import React, { useState, useEffect } from "react";
import { db, storage } from "../../lib/firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";

const ProductsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "ShoeSafariProducts"));
      const dataArray = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const data = doc.data();
          const imgRef = ref(storage, data.img); // Assuming data.img contains the full path
          const imgUrl = await getDownloadURL(imgRef);
          return {
            id: doc.id,
            ...data,
            img: imgUrl,
          };
        })
      );
      setProducts(dataArray);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

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
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-red-600">
        Products Admin
      </h1>
      <AddProductForm onProductAdded={handleProductAdded} />
      {selectedProductId && (
        <EditProductForm
          productId={selectedProductId}
          onProductUpdated={handleProductUpdated}
        />
      )}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Product List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="py-3 px-6 border-b text-left">Name</th>
                <th className="py-3 px-6 border-b text-left">Price</th>
                <th className="py-3 px-6 border-b text-left">Image</th>
                <th className="py-3 px-6 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 text-gray-800">{product.name}</td>
                  <td className="py-4 px-6 text-gray-800">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="py-4 px-6">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-20 w-20 object-cover rounded-lg border border-gray-300"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <button
                      className="text-blue-600 hover:text-blue-800 font-semibold mr-4"
                      onClick={() => setSelectedProductId(product.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 font-semibold"
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
