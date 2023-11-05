import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/Errorpage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddAJob from "../pages/AddAJob/AddAJob";
import Category from "../components/Category";
import JobCards from "../components/jobcards";
import MyJobs from "../pages/MyJobs/MyJobs";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/addAJob",
          element:<AddAJob></AddAJob>
        },
        {
          path:"/categoryJobs/:jobCategory",
          element:<JobCards></JobCards>
        },
        {
          path:"/myJobs",
          element:<PrivateRoute><MyJobs></MyJobs></PrivateRoute>
        }
      ]
    },
  ]);

export default router;