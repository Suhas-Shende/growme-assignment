import React from "react";
import { useEffect } from "react";
import Datatable from "./Datatable";
import { useState } from "react";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import "../App.css";

const Secondpage = () => {
  const [fetchdata, setFetchdata] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  let API = "https://jsonplaceholder.typicode.com/posts";

  const fetchApi = async (API) => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setFetchdata(data);
      setLoading(true);
    } catch {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApi(API);
    setOpen(true);
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userId",
      headerName: "UserID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Title",
      width: 300,
      editable: true,
    },
    {
      field: "body",
      headerName: "Body",

      width: 300,
      editable: true,
    },
  ];
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {loading ? (
        <div>
          {" "}
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
          <Datatable rows={fetchdata} columns={columns} />
        </div>
      ) : (
        <div className="loading">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      )}
    </>
  );
};

export default Secondpage;
