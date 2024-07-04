import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import ModalProvider from "./providers/ModalProvider";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </AuthProvider>
      <Toaster />
    </>
  );
}

export default App;
