import React from "react";
import { useCreateForm } from "..";
import { Link } from "react-router-dom";

export const FormPreview = () => {
  const { selectedForm } = useCreateForm();

  const filteredForm = selectedForm?.filter(
    (form) => form?.label !== "" && form.tyep !== ""
  );

  return (
    <div>
      <h1>FormPreview</h1>

      {filteredForm?.map((form) => {
        return (
          <div>
            <label htmlFor="">{form?.label}</label>
            <input type={form?.type} />
          </div>
        );
      })}

      <button>
        <Link to={"/"}>back</Link>
      </button>
    </div>
  );
};
