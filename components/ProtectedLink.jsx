"use client";
import { useAuth } from "../lib/AuthContext";
import Link from "next/link";
import Router from "next/router";

const ProtectedLink = ({ href, children, ...props }) => {
  const { user } = useAuth();

  const handleClick = (e) => {
    if (!user) {
      e.preventDefault();
      Router.push("/login");
    }
  };

  return (
    <Link href={href} {...props}>
      <a onClick={handleClick}>{children}</a>
    </Link>
  );
};

export default ProtectedLink;
