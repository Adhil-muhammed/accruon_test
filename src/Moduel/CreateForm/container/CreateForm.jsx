import React from "react";
import { useCreateForm } from "..";
import { Link } from "react-router-dom";

export const CreateForm = () => {
  const { selectedForm, handleFormField, addFormField } = useCreateForm();

  return (
    <div>
      {selectedForm?.map((form, index) => {
        return (
          <div key={`${index}_${form?.type}`}>
            <input
              type="text"
              name="label"
              value={form?.label}
              onChange={(e) => handleFormField(e, index, "input")}
            />
            <select
              name="type"
              value={form?.type}
              onChange={(e) => handleFormField(e, index, "select")}
            >
              <option selected>~select~</option>
              <option value="text">text</option>
              <option value="date">date</option>
              <option value="number">number</option>
              <option value="password">password</option>
            </select>
          </div>
        );
      })}
      <button onClick={() => addFormField()}>add</button>

      <button>
        <Link to={"/preview"}>preView</Link>
      </button>
    </div>
  );
};
