import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import ModalProvider from "./providers/ModalProvider";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";
import ChatListProvider from "./providers/ChatListProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <ChatListProvider>
          <ModalProvider>
            <RouterProvider router={router} />
          </ModalProvider>
        </ChatListProvider>
      </AuthProvider>
      <Toaster />
    </>
  );
}

export default App;
