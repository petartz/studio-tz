import "./App.css"
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import { ThemeProvider } from './context/ThemeContext.tsx';

function App() {

  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
