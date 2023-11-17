import React, { useEffect } from "react";
import { useImmer } from "use-immer";

const initState = [
  {
    type: "",
    label: "",
    name: "",
  },
];

export const useCreateForm = () => {
  const localFormData = localStorage?.getItem("selectedForm");

  const [selectedForm, setSelectedForm] = useImmer(
    localFormData ? JSON?.parse(localFormData) : initState
  );

  const [formPreview, setFormPreview] = useImmer({});
  console.log("formPreview: ", formPreview);

  useEffect(() => {
    localStorage?.setItem("selectedForm", JSON?.stringify(selectedForm));
  }, [selectedForm]);

  const handleFormField = (e, index) => {
    const { value, name } = e.target;
    setSelectedForm((draft) => {
      draft[index][name] = value;
      return draft;
    });
  };

  const handleDropdown = (value, index, from) => {
    setSelectedForm((draft) => {
      draft[index].type = value?.label;
      return draft;
    });
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

  const handleFormPreview = (e) => {
    const { name, value } = e.target;
    setFormPreview((draft) => {
      draft[name] = value;
    });
  };

  const removeRow = (index) => {
    setSelectedForm((draft) => {
      draft.splice(index, 1);
      return draft;
    });
  };

  return {
    selectedForm,
    removeRow,
    addFormField,
    handleDropdown,
    handleFormField,
    handleFormPreview,
  };
};
