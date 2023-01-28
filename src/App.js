import "./App.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [rows, setRows] = useState([]);
  const [pageSize, setPageSize] = useState(5);

  const fetchProducts = async () => {
    await axios
      .get("https://dummyjson.com/products")
      .then((res) => setRows(res.data.products));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const columns = [
    { field: "title", headerName: "Title", width: 150 },
    { field: "brand", headerName: "Brand", width: 150 },
    { field: "category", headerName: "Categorey", width: 150 },
    { field: "description", headerName: "Description", width: 380 },
    { field: "price", headerName: "price", width: 150, editable: true },
    { field: "rating", headerName: "Rating", width: 150 },
    { field: "stock", headerName: "Stock", width: 150 },
  ];

  return (
    <div className="Container">
      <div className="Grid">
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }} 
          checkboxSelection={true}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20, 30]}
          pagination
        />
      </div>
    </div>
  );
}

export default App;