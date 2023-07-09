import React, { useState } from "react";
import Inputs from "./Inputs";
import "./../App.css";
export default function ContactForm({ submitForm }) {
  const inputs = [
    {
      id: "name",
      label: "Name : ",
      type: "text",
      placeholder: "Enter conatact name",
    },
    {
      id: "Email",
      label: "Email : ",
      type: "mail",
      placeholder: "Email@test.com",
    },
  ];
  return (
    <div className="conatactForm">
      <form onSubmit={submitForm} className="form-contact">
        {inputs.map(({ id, label, type, placeholder }, index) => {
          return (
            <Inputs
              key={`${index} ${id}`}
              id={id}
              label={label}
              type={type}
              placeholder={placeholder}
            ></Inputs>
          );
        })}
        <textarea
          rows="10"
          className="form-message"
          placeholder="Comment or Message ...."
        ></textarea>
        <button type="submit" className="btn-form">
          Send Comment
        </button>
      </form>
    </div>
  );
}
