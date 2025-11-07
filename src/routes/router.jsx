import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllJobs from "../pages/jobs/AllJobs";
import MyJobs from "../pages/jobs/MyJobs";
import MyApplications from "../pages/applications/MyApplications";
import MyProfile from "../pages/profile/MyProfile";
import JobDetails from "../pages/jobs/JobDetails";
import PrivateRoute from "./privateRoute/PrivateRoute";
import AboutSection from "../pages/AboutSection";
import ContactSection from "../pages/ContactSection";
import ApplicationForm from "../components/ApplicationForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allJobs",
        element: (
          <PrivateRoute>
            <AllJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/jobDetails/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/applicationForm/:id",
        element: (
          <PrivateRoute>
            <ApplicationForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutSection />,
      },
      {
        path: "/contact",
        element: <ContactSection />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
