// Modules
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

import Logo from "../assets/logo/logo.png";

const NavbarComponent = () => {
  return (
    <div>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-white mb-3 py-3 fixed-top w-100 z-3 shadow-sm"
        >
          <Container>
            <Navbar.Brand href="/" className="d-flex align-items-center">
              <img
                alt=""
                src={Logo}
                fetchpriority="low"
                width="60"
                height="60"
                className="logo-img d-inline-block align-top me-2"
              />
              <div className="d-flex flex-column">
                <p className="logo-text m-0 fw-bold lh-sm">MTs NEGERI 1</p>
                <p className="logo-text m-0 fw-bold lh-sm">KOTA BLITAR</p>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className="d-flex align-items-center"
                >
                  <img
                    alt="Logo"
                    src={Logo}
                    fetchpriority="low"
                    width="60"
                    height="60"
                    className="d-inline-block align-top me-2"
                  />
                  <p className="m-0 fw-bold lh-sm">
                    MTs NEGERI 1 <br /> KOTA BLITAR
                  </p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="ms-auto">
                  <Nav.Link href="/">Beranda</Nav.Link>

                  <NavDropdown
                    title="Profil"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/profil/sekolah">
                      Profil Sekolah
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/profil/sejarah">
                      Sejarah
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/profil/visi-misi">
                      Visi dan Misi
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Galeri Kegiatan"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/gallery/gallery-kbm">
                      {" "}
                      KBM
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/gallery/gallery-ekskul">
                      {" "}
                      Ekskul
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/gallery/gallery-event">
                      {" "}
                      Event
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="PPDB"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item
                      href="https://mtsnegeriblitar.sch.id/ppdb"
                      target="_blank"
                    >
                      Link Pendaftaran
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/kontak">Kontak & Alamat</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavbarComponent;
