import React from "react";
import { useCreateForm } from "..";
import { InputControl } from "shared";
import { Stack, TextField, Autocomplete, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const CreateForm = () => {
  const navigate = useNavigate();
  const {
    selectedForm,
    removeRow,
    addFormField,
    handleDropdown,
    handleFormField,
  } = useCreateForm();

  const TypesOfField = [
    { label: "text" },
    { label: "mail" },
    { label: "date" },
    { label: "area" },
    { label: "checkbox" },
  ];

  return (
    <Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
      <Stack width={"700px"} display={"flex"}>
        <Stack
          direction={"row"}
          sx={{ flexFlow: "" }}
          justifyContent={"space-between"}
        >
          <Button
            variant="contained"
            className="btn"
            sx={{ width: 200 }}
            onClick={() => addFormField()}
          >
            add
          </Button>
          <Button variant="contained" onClick={() => navigate("/preview")}>
            preView
          </Button>
        </Stack>

        {selectedForm?.map((form, index) => {
          return (
            <Stack
              pt={"12px"}
              direction={"row"}
              justifyContent={"space-between"}
              key={`${index}_${form?.type}`}
            >
              <InputControl
                name="label"
                label="form label"
                variant="outlined"
                id="outlined-basic"
                value={form?.label}
                onChange={(e) => handleFormField(e, index, "input")}
              />
              <InputControl
                name="label"
                type="dropdown"
                id="combo-box-demo"
                value={form?.type}
                sx={{ width: 300, pl: 2 }}
                options={TypesOfField}
                onChange={(e, value) => handleDropdown(value, index, "label")}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Form type"
                    sx={{ width: 150 }}
                  />
                )}
              />
              <InputControl
                name="name"
                label="form label"
                variant="outlined"
                id="outlined-basic"
                value={form?.name}
                sx={{ width: "200px", pl: 1 }}
                onChange={(e) => handleFormField(e, index)}
              />
              <Button
                variant="outlined"
                color="error"
                sx={{ p: 2 }}
                onClick={() => removeRow(index)}
              >
                delete
              </Button>
            </Stack>
          );
        })}
      </Stack>
      <Stack paddingTop={"12px"}></Stack>
    </Stack>
  );
};
