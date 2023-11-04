import { Container, Row, Col } from "react-bootstrap";

const VisiMisiPage = () => {
  return (
    <div className="profil">
      <div className="visi-misi">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>Visi & Misi</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Visi</h1>
              <p>
                Mewujudkan derajat lulusan yang unggul dalam IMTAQ dan IPTEK dan
                berakhlaqul karimah serta peduli dan berbudaya lingkungan.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Misi</h1>
              <p>
                <ol>
                  <li>
                    Menerapkan syari’at agama dalam kehidupan sehari-hari.
                  </li>
                  <li>
                    Menerapkan budaya belajar yang religius, disiplin, tekun dan
                    berkepribadian luhur.
                  </li>
                  <li>
                    Meningkatkan mutu pembelajaran dengan semangat inovatif,
                    kompetitif dan berprestasi.
                  </li>
                  <li>
                    Mengembangkan teknologi dan informasi komunikasi dalam
                    pembelajaran dan administrasi.
                  </li>
                  <li>
                    Meningkatkan profesionalisme tenaga pendidik dan
                    kependidikan sebagai upaya peningkatan mutu layanan dan
                    lulusan.
                  </li>
                  <li>
                    Mengembangkan budaya pelestarian lingkungan, mencegah dan
                    menanggulangi kerusakan serta pencemaran lingkungan hidup.
                  </li>
                </ol>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default VisiMisiPage;
