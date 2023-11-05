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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.960250925294!2d112.1577860122102!3d-8.109577328753822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ec084cb098c5%3A0x39818dcf3fb62e7e!2sMTsN%201%20Kota%20Blitar!5e0!3m2!1sid!2sid!4v1699185864845!5m2!1sid!2sid"
                  width="1240"
                  height="400"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default KontakPage;
