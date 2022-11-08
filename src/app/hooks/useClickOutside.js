import { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
  const handleClickOutside = (e) => {
    if (!ref.current?.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
};
