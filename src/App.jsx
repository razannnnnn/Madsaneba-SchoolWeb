import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import TentangPage from "./pages/profil/TentangPage";
import SejarahPage from "./pages/profil/SejarahPage";
import VisiMisiPage from "./pages/profil/VisiMisiPage";
import SekolahPage from "./pages/profil/SekolahPage";

import EkskulPage from "./pages/gallery/EkskulPage";
import EventPage from "./pages/gallery/EventPage";
import KBMPage from "./pages/gallery/KBMPage";

import KontakPage from "./pages/KontakPage";

import NavbarComponent from "./components/NavbarComponent";
import ScrollToTop from "./components/ScrollToTop";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <>
        <NavbarComponent />

        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" Component={HomePage} />

            {/* Profil Route */}
            <Route path="/profil/tentang" Component={TentangPage} />
            <Route path="/profil/sejarah" Component={SejarahPage} />
            <Route path="/profil/visi-misi" Component={VisiMisiPage} />
            <Route path="/profil/sekolah" Component={SekolahPage} />

            {/* Gallery Route */}
            <Route path="/gallery/gallery-kbm" Component={KBMPage} />
            <Route path="/gallery/gallery-ekskul" Component={EkskulPage} />
            <Route path="/gallery/gallery-event" Component={EventPage} />

            <Route path="/kontak" Component={KontakPage} />
          </Routes>
        </Router>

        <FooterComponent />
      </>
    </div>
  );
}

export default App;
