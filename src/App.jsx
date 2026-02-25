import { Routes, Route } from "react-router-dom";
import LMS from "./LMS/LMS.jsx";
import CRM from "./CRM/CRM.jsx";
import ERP from "./ERP/ERP.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LMS />} />
      <Route path="/crm" element={<CRM />} />
      <Route path="/erp" element={<ERP />} />
    </Routes>
  );
}