import React from "react";
import { useParams } from "react-router-dom";

export const Email = () => {
  const { emailID } = useParams();
  return <div>Email {emailID}</div>;
};
