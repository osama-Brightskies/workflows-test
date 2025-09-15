import React from "react";
import { ThemeProvider } from "./providers/theme/theme-provider";
import { AuthProvider } from "./providers/auth/AuthContext";
import { router } from "./routes/browserRouter";
import { RouterProvider } from "react-router-dom";
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
