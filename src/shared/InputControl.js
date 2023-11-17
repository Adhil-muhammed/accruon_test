import React, { forwardRef } from "react";
import {
  Radio,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  Autocomplete,
  OutlinedInput,
  FormHelperText,
  FormControlLabel,
} from "@mui/material";

export const InputControl = forwardRef((props, ref) => {
  const {
    onMouseDown,
    onClick,
    showPassword,
    label,
    type,
    value,
    width,
    onClear,
    inputLabel,
    inputType,
    ...rest
  } = props;
  let inputElement = null;
  switch (type) {
    case "textarea":
      inputElement = (
        <TextField
          fullWidth
          label={label}
          type={type}
          multiline
          rows={4}
          rowsMax={4}
          value={value}
          {...rest}
          ref={ref}
        />
      );
      break;
    case "dropdown":
      inputElement = <Autocomplete value={value} {...rest} ref={ref} />;
      break;
    case "radio-button":
      inputElement = (
        <FormControlLabel
          control={<Radio checked={value} {...rest} />}
          label={label}
        />
      );
      break;
    case "text":
      inputElement = (
        <FormControl variant="outlined" sx={{ width: width || "100%" }}>
          <TextField
            size="medium"
            fullWidth
            type={type}
            label={label}
            value={value}
            onWheel={(e) => e.target.blur()}
            {...rest}
            ref={ref}
          />
        </FormControl>
      );
      break;
    default:
      inputElement = (
        <FormControl variant="outlined" sx={{ width: width || "100%" }}>
          <TextField
            size="medium"
            fullWidth
            type={type}
            label={label}
            value={value}
            onWheel={(e) => e.target.blur()}
            {...rest}
            ref={ref}
          />
        </FormControl>
      );
      break;
  }

  return (
    <>
      {/* {props.label && (
        <label htmlFor={props.name} className="form-label">
          {props.label}
        </label>
      )} */}

      {inputElement}
    </>
  );
});
