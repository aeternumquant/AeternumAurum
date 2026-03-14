import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Home from "@/pages/Home";
import FrameworkPage from "@/pages/Framework";
import AlocacoesPage from "@/pages/Alocacoes";
import ResearchPage from "@/pages/Research";
import CommoditiesPage from "@/pages/Commodities";
import AcessoPage from "@/pages/Acesso";
import ReportsPage from "@/pages/Reports";
import LoginPage from "@/pages/Login";
import NotFound from "@/pages/not-found";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function App() {
  return (
    <BrowserRouter basename={base}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/framework" element={<FrameworkPage />} />
        <Route path="/alocacoes" element={<AlocacoesPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/commodities" element={<CommoditiesPage />} />
        <Route path="/acesso" element={<AcessoPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
