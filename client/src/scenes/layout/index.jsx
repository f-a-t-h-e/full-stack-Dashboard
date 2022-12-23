import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import { Box, useMediaQuery } from "@mui/material";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from "state/api";
import { useSelector } from "react-redux";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {/* NOTE : This minWidth={0 } is to make the charts have to resize */}
      <Box flexGrow={1} minWidth={0}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
