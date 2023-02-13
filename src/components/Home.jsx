import "../styles/style.css";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import Datatable from "./Datatable";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const getDatafromLS = () => {
  const data = localStorage.getItem("userdata");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
function Home() {
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    id: new Date().getTime().toString(),
  });
  const [record, setRecord] = useState(getDatafromLS());
  const [istrue, setrue] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("userdata", JSON.stringify(record));
  }, [record]);

  const handlesubmit = (event) => {
    event.preventDefault();
    setRecord([...record, state]);
    setrue(true);
    setState({
      name: "",
      phone: "",
      email: "",
      id: new Date().getTime().toString(),
    });
    setOpen(true);
  };
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleNavigate = () => {
    navigate("/secondpage");
  };
  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 300 },
    {
      field: "phone",
      headerName: "Phone",
      width: 300,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 500,
      editable: true,
    },
    {
      field: "name",
      headerName: "Name",
      width: 500,
      editable: true,
    },
  ];

  return (
    <div className="outer_container">
      <form onSubmit={handlesubmit}>
        <div className="container">
          <center>
            {" "}
            <h1> Form </h1>{" "}
          </center>

          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            color="secondary"
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={handleChange}
            value={state.name}
            required
          />

          <TextField
            id="outlined-basic"
            label="Phone no"
            variant="outlined"
            fullWidth
            color="secondary"
            type="text"
            placeholder="Enter phone number"
            name="phone"
            onChange={handleChange}
            value={state.phone}
            required
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            color="secondary"
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
            value={state.email}
            required
          />

          <Button type="submit" variant="contained">
            Save
          </Button>
        </div>
      </form>

      {/* <p>{JSON.stringify(state)}</p> */}

      {istrue ? (
        <div>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            key={"top" + "right"}
          >
            <Alert onClose={handleClose} severity="success">
              {" "}
              Success
            </Alert>
          </Snackbar>
          <div className="heading_container">
            <h1>Showdata</h1>
            <Button
              onClick={handleNavigate}
              variant="contained"
              color="secondary"
              size="small"
              sx={{ width: 200, padding: 1, margin: 2 }}
            >
              Go to Secondpage
            </Button>
          </div>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid rows={record} columns={columns} />
          </Box>
        </div>
      ) : (
        <h1>no data </h1>
      )}
    </div>
  );
}

export default Home;

// (
//     <div className="showItems">
//       {record.map((elem) => {
//         return (
//           <div className="eachItem" key={elem.id}>
//             <h3> {elem.name} </h3>
//             <h3> {elem.phone} </h3>
//             <h3> {elem.email} </h3>

//           </div>
//         );
//       })}
//     </div>
//   )
