import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";

// const setActive = ({ isActive }) => (isActive ? "active-link" : "");

const Layout = () => {
  return (
    <>
      <header className="header">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
