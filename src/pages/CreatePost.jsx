import React from "react";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>CreatePost</h1>
      <button onClick={() => signout(() => navigate("/", { replace: true }))}>
        Log Out
      </button>
    </div>
  );
};

export default CreatePost;
