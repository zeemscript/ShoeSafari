"use client";
import React, { useState } from "react";
import { db, storage } from "../../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddProductForm = ({ onProductAdded }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageRef = ref(storage, `products/${productImage.name}`);
      const snapshot = await uploadBytes(imageRef, productImage);
      const imageUrl = await getDownloadURL(snapshot.ref);

      await addDoc(collection(db, "ShoeSafariProducts"), {
        name: productName,
        price: parseFloat(productPrice),
        img: imageUrl,
      });

      setSuccessMessage("Product added successfully!");
      setProductName("");
      setProductPrice("");
      setProductImage(null);
      onProductAdded();
    } catch (error) {
      setErrorMessage("Error adding product: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border border-red-500">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-500">
        Add New Product
      </h1>
      <form onSubmit={handleSubmit}>
        {successMessage && (
          <div className="mb-4 p-4 text-white bg-green-500 rounded-md">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 p-4 text-white bg-red-500 rounded-md">
            {errorMessage}
          </div>
        )}
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold">
            Product Name
          </label>
          <input
            type="text"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold">
            Product Price
          </label>
          <input
            type="number"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold">
            Product Image
          </label>
          <input
            type="file"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            onChange={(e) => setProductImage(e.target.files[0])}
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-3 mt-4 text-white font-bold bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={loading}
        >
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
