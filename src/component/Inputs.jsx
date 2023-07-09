import React from "react";
import "./../App.css"

export default function Inputs({
  id,
  label,
  type,
  placeholder,
}) {
  return (
    <div className="input__Group">
      <label htmlFor={id} className="label-form">{label}</label>
      <input
      className="input-form"
        type="text"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
