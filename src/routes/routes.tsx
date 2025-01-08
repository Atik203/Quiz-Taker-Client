import CustomButton from "@/components/ui/custom/CustomButton";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Exams from "@/pages/Exams";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import SingleExam from "@/pages/SingleExam";
import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App";
import Login from "./../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div className="p-8 text-center mt-20">
        <h1 className="font-bold mb-2">404 Not Found</h1>
        <p className="mb-2">The page you are looking for does not exist.</p>
        <Link to="/">
          <CustomButton>Go to home</CustomButton>
        </Link>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "exams",
        element: <Exams />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "exam/1",
        element: <SingleExam />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  // {
  //   path: "/admin",
  //   element: <AdminLayout />,
  //   children: routeGenerator(adminPaths),
  // },
]);

export default router;
