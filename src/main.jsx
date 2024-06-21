import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";

import "./index.css";
import Login from "./pages/Login.jsx";
import { Error } from "./pages/Error.jsx";
import Signin from "./pages/Signin.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
    errorElement: <Error />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signin",
		element: <Signin />,
	},
	
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
