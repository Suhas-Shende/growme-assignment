import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
const Datatable = ({ rows, columns }) => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns}  />
      </Box>
   
  );
};

export default Datatable;

