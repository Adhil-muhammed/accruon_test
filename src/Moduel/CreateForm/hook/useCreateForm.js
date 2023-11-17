import React, { useEffect } from "react";
import { useImmer } from "use-immer";

const initState = [
  {
    type: "",
    label: "",
  },
];

export const useCreateForm = () => {
  const localFormData = localStorage?.getItem("selectedForm");

  const [selectedForm, setSelectedForm] = useImmer(
    localFormData ? JSON?.parse(localFormData) : initState
  );
  console.log("selectedForm: ", selectedForm);

  useEffect(() => {
    localStorage?.setItem("selectedForm", JSON?.stringify(selectedForm));
  }, [selectedForm]);

  const handleFormField = (e, index, form) => {
    const { value, name } = e.target;
    if (form === "select") {
      setSelectedForm((draft) => {
        draft[index][name] = value;
        return draft;
      });
    }
    if (form === "input") {
      setSelectedForm((draft) => {
        draft[index][name] = value;
        return draft;
      });
    }
  };

  const addFormField = (index) => {
    const hasIncrement = selectedForm?.every(
      (form) => form?.type !== "" && form?.label
    );

    if (hasIncrement) {
      setSelectedForm((draft) => {
        draft?.push({
          type: "",
          label: "",
        });
        return draft;
      });
    }
  };

  return { handleFormField, addFormField, selectedForm };
};
