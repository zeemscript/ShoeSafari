"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../lib/AuthContext";
import Toast from "../../components/Toast";
import Link from "next/link";
import { analytics, logEvent } from "../../lib/firebaseConfig";


export default function Hero() {
    useEffect(() => {
      if (analytics) {
        logEvent(analytics, "page_view", { page_title: "Home Page" });
      }
    }, []);
  const { user } = useAuth();
  const router = useRouter();
  const [toast, setToast] = useState({ show: false, message: "" });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 5000);
  };

  const handleProtectedLinkClick = (e, path) => {
    if (!user) {
      e.preventDefault();
      showToast("Kindly login first");
      router.push("/profile/login");
    } else {
      e.preventDefault();
      router.push(path);
    }
  };

  return (
    <>
      <section className="bg-custom-image bg-cover bg-center h-screen text-center">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-extrabold text-white">
            Welcome to ShoeSafari!
          </h1>
          <p className="text-4xl text-white mt-20 sm:mt-7">
            Discover Your Perfect Pair
          </p>
          <div className="flex gap-6 pt-32 sm:pt-4">
            <Link
              className="bg-red-700 hover:bg-red-600 text-white rounded-md px-4 py-2"
              href={user ? "/shop" : "#"}
              onClick={(e) => handleProtectedLinkClick(e, "/shop")}
            >
              Shop Now
            </Link>
            <Link
              href={user ? "/collections" : "#"}
              className="border border-red-700 hover:bg-red-600 text-white rounded-md px-4 py-2"
              onClick={(e) => handleProtectedLinkClick(e, "/collections")}
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </section>
      <Toast
        message={toast.message}
        show={toast.show}
        onClose={() => setToast({ show: false, message: "" })}
      />
    </>
  );
}
