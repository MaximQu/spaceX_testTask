import { HashRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import About from "./pages/About/About";
import ContactForm from "./pages/ContactForm/ContactForm";
import Rocket from "./pages/Dragon/Dragon";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import QA from "./pages/QA/QA";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="qa" element={<QA />} />
          <Route path="contact_form" element={<ContactForm />} />
          <Route path=":id" element={<Rocket />} />
          <Route path="/not_found" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
