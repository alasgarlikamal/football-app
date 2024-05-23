import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import League from "./pages/League";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/league/:id" element={<League />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
