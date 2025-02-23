import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { RegistrationPage } from "./pages/registrationPage";
import { ErrorPage } from "./pages/ErrorPage";
import { AppLayout } from "./component/AppLAyout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />, //if enetered wrong url.
    children: [
      {
        path: "registration",
        element: <RegistrationPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
