import { Outlet, Routes, Route, BrowserRouter } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

export default function App() {
  console.log("aaaaaaaa");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="messages" element={<h1>mess</h1>} />
          <Route path="tasks" element={<h1>task</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
