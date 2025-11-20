import React from "react";
import isometricUrl from "@/assets/isometric.svg";

interface Props {
  className?: string;
  alt?: string;
}

const Isometric: React.FC<Props> = ({ className = "", alt = "Isometric illustration" }) => {
  return <img src={isometricUrl} alt={alt} className={className} />;
};

export default Isometric;
