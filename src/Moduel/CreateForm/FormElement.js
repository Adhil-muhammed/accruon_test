import React from "react";
import { CreateForm, FormPreview } from ".";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const FormElement = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateForm />} />
        <Route path="/preview" element={<FormPreview />} />
      </Routes>
    </BrowserRouter>
  );
};
