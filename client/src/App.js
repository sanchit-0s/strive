

import { BrowserRouter, Navigate, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.js";

// Import voice functionality
import { startListening } from "./voice/speech";
import { sendVoiceCommand } from "./voice/voiceHandler";

// ✅ New inner component
function AppContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isAuth = Boolean(useSelector((state) => state.token));
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  useEffect(() => {
    startListening(async (transcript) => {
      const res = await fetch("http://localhost:3001/api/voice-command", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: transcript }),
      });

      const data = await res.json();
      const intent = data.intent;
      const userId = user?._id;

      // Call sendVoiceCommand with the received intent, userId, and navigate function
      sendVoiceCommand(intent,user?._id, navigate,dispatch); //

    });
  }, [dispatch, navigate, user]);

 
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
        <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
