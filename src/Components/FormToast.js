import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormToast({ called, success }) {
  const notify = () => {
    if (success) {
      toast.success("Your message was sent correctly! 🚀", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      toast.error("Oops, something went wrong ⚠. Please try again", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  (function call() {
    if (called) notify();
  })();

  return (
    <div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}
