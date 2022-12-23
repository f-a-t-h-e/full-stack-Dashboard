import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "state/api";
import Header from "components/Header";
import { Box, useTheme } from "@mui/material";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";
import * as Styles from "styles";

const columns = [
  { field: "_id", headerName: "ID", flex: 1 },
  { field: "userId", headerName: "User ID", flex: 1 },
  { field: "createdAt", headerName: "CreatedAt", flex: 1 },
  {
    field: "products",
    headerName: "# of Products",
    flex: 0.5,
    sortable: false,
    renderCell: (paramas) => paramas.value.length,
  },
  {
    field: "cost",
    headerName: "Cost",
    flex: 1,
    renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
  },
];

const Transactions = () => {
  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />
      <Box height="80vh" sx={Styles.transactions(theme)}>
        <DataGrid
          rows={(data && data.transactions) || []}
          getRowId={(row) => row._id}
          columns={columns}
          loading={isLoading || !data}
          rowCount={(data && data.total) || 0}
          pagination
          page={page}
          rowsPerPageOptions={[20, 50, 100]}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Transactions;
