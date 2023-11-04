import { Container, Col, Row } from "react-bootstrap";

const SekolahPage = () => {
  return (
    <div className="profil">
      <div className="profil-sekolah">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>Profil Sekolah</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                1. Nama Madrasah : MTsN 1 Kota Blitar
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                2. Alamat Madrasah : Jl. Cemara Gg X No 83 Kota Blitar
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                3. NPSN : 20535128
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                4. Peringkat Akreditasi : A
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                5. SK Akreditasi : 175/BAP-S/M/SK/X/2015
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                6. Tahun Akreditasi : 2021
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                7. Kepala Madrasah : Aniqotuz Zuhroh, S.Ag, M.Pd I
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                8. NIP : 197207071996032002
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                9. E-Mail Madrasah : blitar@yahoo.com
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                10. Website : www.mtsnegeriblitar.sch.id
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                11. NSM : 1211135720001
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SekolahPage;
