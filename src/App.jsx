import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";

import { loader as HomeLoader } from "./pages/Home";
import { loader as ProductLoader } from "./pages/Product";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {path:"/product/:id",
          element:<Product/>,
          loader:ProductLoader,
        }
      ],
    },
  ]);

  return <>{<RouterProvider router={routes} />}</>;
}

export default App;
