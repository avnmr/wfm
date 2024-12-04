import { Component } from "solid-js";
import { Router, Route, Navigate } from "@solidjs/router";
import { useAuth } from "./store/auth.store";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
// import ChartPage from "./pages/ChartPage";
// import GridPage from "./pages/GridPage";
// import MapPage from "./pages/MapPage";
import Layout from "./components/layout/Layout";
import EmployeePage from "./pages/EmployeePage";
import SchedulePage from "./pages/SchedulePage";
import TaskPage from "./pages/TaskPage";
import ReportPage from "./pages/ReportPage";

const ProtectedRoute: Component<{ children: any }> = (props) => {
  const { authState } = useAuth();
  
  if (!authState.isAuthenticated) {
    return <Navigate href="/login" />;
  }
  
  return <Layout>{props.children}</Layout>;
};

const App: Component = () => {
  return (
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Router>
        <Route path="/login" component={Login} />
        <Route
          path="/dashboard"
          component={() => (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/employees"
          component={() => (
            <ProtectedRoute>
              <EmployeePage />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/schedule"
          component={() => (
            <ProtectedRoute>
              <SchedulePage />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/tasks"
          component={() => (
            <ProtectedRoute>
              <TaskPage />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/reports"
          component={() => (
            <ProtectedRoute>
              <ReportPage />
            </ProtectedRoute>
          )}
        />
        <Route path="*" component={() => <Navigate href="/dashboard" />} />
      </Router>
    </div>
  );
};

export default App; 