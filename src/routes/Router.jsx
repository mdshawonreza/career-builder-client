import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/Errorpage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddAJob from "../pages/AddAJob/AddAJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import PrivateRoute from "./PrivateRoute";
import UpdateMyJob from "../components/UpdateMyJob";
import Blogs from "../pages/Blogs/Blogs";
import AllJobs from "../pages/AllJobs/AllJobs";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import DetailsJob from "../components/DetailsJob";
import ContactUs from "../components/Feedback";
import Feedback from "../components/Feedback";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('https://career-builder-server.vercel.app/jobs')
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
          element:<PrivateRoute><AddAJob></AddAJob></PrivateRoute>
        },
        {
          path:"/myJobs",
          element:<PrivateRoute><MyJobs></MyJobs></PrivateRoute>
        },
        {
          path:"/update/:id",
          element:<PrivateRoute><UpdateMyJob></UpdateMyJob></PrivateRoute>,
          loader:({params})=>fetch(`https://career-builder-server.vercel.app/jobs/${params.id}`)
        },
        {
          path:"/blogs",
          element:<Blogs></Blogs>
        },
        
        {
          path:"/allJobs",
          element:<AllJobs></AllJobs>
        },
        {
          path:"/appliedJobs",
          element:<PrivateRoute> <AppliedJobs></AppliedJobs> </PrivateRoute>
        },
        {
          path:"/details/:id",
          element:<PrivateRoute><DetailsJob></DetailsJob></PrivateRoute>,
          loader:({params})=>fetch(`https://career-builder-server.vercel.app/jobs/${params.id}`)
        },
        {
          path:"/feedback",
          element:<Feedback></Feedback>
        }
      ]
    },
  ]);

export default router;