import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

const router = createBrowserRouter([
  { path: "/", element: <LobbyScreen /> },
  { path: "/room/:id", element: <RoomPage /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
