import { Container, Col, Row } from "react-bootstrap";

const KontakPage = () => {
  return (
    <div className="kontak">
      <div className="kontak-alamat">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>Kontak & Alamat</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="lh-lg mt-5" style={{ textAlign: "center" }}>
                Coming Soon.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default KontakPage;
