import { useState } from "react";
import Body from "./components/Body";
import Head from "./components/Head";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Routes } from "./components/routes";

const appRouter = createBrowserRouter(Routes);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Head />
      <RouterProvider router={appRouter} ></RouterProvider>
    </div>
  );
}

export default App;
