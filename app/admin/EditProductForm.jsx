"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../lib/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const EditProductForm = ({ productId, onProductUpdated }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "ShoeSafariProducts", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productData = docSnap.data();
          setProductName(productData.name);
          setProductPrice(productData.price);
          setProductImage(productData.img);
        } else {
          setErrorMessage("Product not found");
        }
      } catch (error) {
        setErrorMessage("Error fetching product: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const docRef = doc(db, "ShoeSafariProducts", productId);
      await updateDoc(docRef, {
        name: productName,
        price: parseFloat(productPrice),
        img: productImage,
      });

      setSuccessMessage("Product updated successfully!");
      onProductUpdated();
    } catch (error) {
      setErrorMessage("Error updating product: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Product</h1>
      <form onSubmit={handleSubmit}>
        {successMessage && (
          <div className="mb-4 p-2 text-green-800 bg-green-100 rounded">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 p-2 text-red-800 bg-red-100 rounded">
            {errorMessage}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Product Price</label>
          <input
            type="number"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Product Image URL</label>
          <input
            type="text"
            className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={loading}
        >
          {loading ? "Updating Product..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default EditProductForm;
