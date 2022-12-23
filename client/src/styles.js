export const transactions = (theme) => ({
  "& .MuiDataGrid-root": {
    border: "none",
    borderRadius: "5rem",
  },
  "& .MuiDataGrid-cell": {
    borderBottom: "none",
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.background.alt,
    color: theme.palette.secondary[100],
    borderBottom: "none",
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: theme.palette.primary.alt,
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: theme.palette.background.alt,
    color: theme.palette.secondary[100],
    borderTop: "none",
  },
  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
    color: `${theme.palette.secondary[200]} !important`,
  },
});
