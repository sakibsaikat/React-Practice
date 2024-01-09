import BgChanger from "./pages/BgChanger/BgChanger";
import PassGenerator from "./pages/PasswordGenerator/PassGenerator";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BgChanger />
    ),
  },
  {
    path: "pass",
    element: <PassGenerator />,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
