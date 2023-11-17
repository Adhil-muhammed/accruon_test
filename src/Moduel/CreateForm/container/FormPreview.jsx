import * as React from "react";
import { useCreateForm } from "..";
import { InputControl } from "shared";
import { Stack, Button } from "@mui/material";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";

export const FormPreview = () => {
  const { selectedForm, handleFormPreview } = useCreateForm();
  const navigate = useNavigate();

  const filteredForm = selectedForm?.filter(
    (form) => form?.label !== "" && form.tyep !== ""
  );

  const isFilteredField = filteredForm?.length;

  return (
    <>
      <Stack height={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Stack sx={{ width: "500px" }} p={1}>
          <Button
            variant="contained"
            sx={{ width: "100px" }}
            onClick={() => navigate("/")}
          >
            Back
          </Button>
          {isFilteredField ? (
            filteredForm?.map((form) => {
              console.log("form?.tyep: ", form?.tyep);

              return (
                <Stack p={1}>
                  <label className="form-label">{form?.label}</label>
                  {form?.type === "area" ? (
                    <>
                      <textarea onChange={handleFormPreview}></textarea>
                    </>
                  ) : (
                    <>
                      <input
                        type={form?.type}
                        name={form?.name}
                        onChange={handleFormPreview}
                        className={
                          form?.type === "checkbox"
                            ? "formType-checkbox"
                            : "preview-input"
                        }
                      />
                    </>
                  )}
                </Stack>
              );
            })
          ) : (
            <>
              <h1>please create the form</h1>
            </>
          )}
        </Stack>
      </Stack>
    </>
  );
};

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// export const FormPreview = () => {
//   const navigate = useNavigate();
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Button variant="contained" onClick={() => navigate("/")}>
//         Back
//       </Button>
//     </TableContainer>
//   );
// };
