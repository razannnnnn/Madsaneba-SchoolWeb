import { useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

import Hero1 from "../assets/homepage/hero/hero-1.webp";
import Hero2 from "../assets/homepage/hero/hero-2.webp";
import Hero3 from "../assets/homepage/hero/hero-3.webp";
import Hero4 from "../assets/homepage/hero/hero-4.webp";
import Hero5 from "../assets/homepage/gallery/kbm/galeri-1.webp";
import Hero6 from "../assets/homepage/hero/hero-5.webp";

import { Container, Row, Col } from "react-bootstrap";

// Kbm Image
import KBM1 from "../assets/homepage/gallery/kbm/galeri-1.webp";
import KBM2 from "../assets/homepage/gallery/kbm/galeri-2.webp";
import KBM3 from "../assets/homepage/gallery/kbm/galeri-3.webp";

// Event Image
import EVNT1 from "../assets/homepage/gallery/event/event-1.webp";
import EVNT2 from "../assets/homepage/gallery/event/event-2.webp";
import EVNT3 from "../assets/homepage/gallery/event/event-3.webp";

// Eskul Image
import ESKL1 from "../assets/homepage/gallery/eskul/eskul-1.webp";
import ESKL2 from "../assets/homepage/gallery/eskul/eskul-2.webp";
import ESKL3 from "../assets/homepage/gallery/eskul/eskul-3.webp";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="berita-terbaru w-100">
        <Container className="overflow-hidden px-3 mx-auto">
          <Row className="berita-utama row-cols-md-2 row-cols-1 flex-md-nowrap flex-wrap gap-md-1 gap-4 mb-md-1 mb-4">
            <Col className="position-relative overflow-hidden p-0">
              <img
                fetchpriority="low"
                src={Hero1}
                alt="berita-utama-1"
                width="100%"
              />
              <div className="bg"></div>
              <div className="info-berita px-3">
                <button className="btn btn-success btn-sm mb-2">Guru</button>
                <h4 className="text-white fw-bold">
                  Para Guru & Staf Tata Usaha Madrasah Tsanawiyah Negeri 1 Kota
                  Blitar.
                </h4>
                <p className="text-white">
                  <span className="fw-semibold">Team IT Madsaneba</span> - 10
                  September 2021
                </p>
              </div>
            </Col>
            <Col className="position-relative overflow-hidden p-0">
              <img
                src={Hero2}
                alt="berita-utama-2"
                fetchpriority="low"
                width="100%"
              />
              <div className="bg"></div>
              <div className="info-berita px-3">
                <button className="btn btn-success btn-sm mb-2">Guru</button>
                <h4 className="text-white fw-bold">
                  Kejuaraan Tenis Meja Dalam Rangka Porseni PGRI Tingkat
                  Provinsi Tahun 2022.
                </h4>
                <p className="text-white">
                  <span className="fw-semibold">Team IT Madsaneba</span> - 28
                  Oktober 2022
                </p>
              </div>
            </Col>
          </Row>
          <Row className="berita-lainnya row-cols-md-4 row-cols-1 flex-md-nowrap flex-wrap gap-1">
            <Col className="position-relative overflow-hidden p-0 d-flex">
              <img src={Hero3} alt="" fetchpriority="low" />
              <div className="bg d-md-block d-none"></div>
              <div className="info-berita px-3">
                <button className="btn btn-success btn-sm mb-2 d-sm-block d-none">
                  Siswa
                </button>
                <p className="fw-semibold">
                  Seminar Kesehatan Mental Bersama Ibu Aulia Salsabela, S. Pd.
                </p>
                <p className="date">
                  <span className="fw-semibold">Team IT Madsaneba</span> - 30
                  Juli 2023
                </p>
              </div>
            </Col>
            <Col className="position-relative overflow-hidden p-0 d-flex">
              <img src={Hero4} alt="" fetchpriority="low" />
              <div className="bg d-md-block d-none"></div>
              <div className="info-berita px-3">
                <button className="btn btn-success btn-sm mb-2 d-sm-block d-none">
                  Siswa
                </button>
                <p className="fw-semibold">
                  Kejuaraan lomba AKTAPALA Se-Blitar Raya di MAN 1 Blitar tahun
                  2023.
                </p>
                <p className="date">
                  <span className="fw-semibold">Team IT Madsaneba</span> - 30
                  Oktober 2023
                </p>
              </div>
            </Col>
            <Col className="position-relative overflow-hidden p-0 d-flex ">
              <img src={Hero5} alt="" fetchpriority="low" />
              <div className="bg d-md-block d-none"></div>
              <div className="info-berita px-3">
                <button className="btn btn-success btn-sm mb-2 d-sm-block d-none">
                  Siswa
                </button>
                <p className="fw-semibold">
                  Gerakan Sehari Membaca Untuk Enggelorkan Literasi Baca.
                </p>
                <p className="date">
                  <span className="fw-semibold">Team IT Madsaneba</span> - 5
                  November 2022
                </p>
              </div>
            </Col>
            <Col className="position-relative overflow-hidden p-0 d-flex ">
              <img src={Hero6} alt="" fetchpriority="low" />
              <div className="bg d-md-block d-none"></div>
              <div className="info-berita px-3">
                <button className="btn btn-success btn-sm mb-2 d-sm-block d-none">
                  Siswa
                </button>
                <p className="fw-semibold">
                  Jalan Sehat Dalam Rangka Milad Yang Ke-44 MTsN 1 Kota Blitar.
                </p>
                <p className="date">
                  <span className="fw-semibold">Team IT Madsaneba</span> - 22
                  Mei 2023
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="tentang-kami">
        <Container>
          <Row>
            <Col>
              <h1 className="section-title mb-3">Tentang Kami</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Madrasah Tsanawiyah Negeri 1 Kota Blitar, atau lebih dikenal
                sebagai MTsN 1 Kota Blitar, memiliki sejarah panjang yang
                dimulai pada tahun 1967. Madrasah ini telah mengalami beberapa
                perubahan nama sepanjang perjalanannya, tetapi semangat untuk
                memberikan pendidikan berkualitas kepada warga negara Indonesia
                tetap kuat. MTsN 1 Kota Blitar terus berbenah diri dengan fokus
                pada peningkatan sumber daya manusia, penerimaan siswa
                berkualitas, dan pengembangan baik dalam aspek akademik maupun
                non-akademik. Kami berkomitmen untuk mencetak generasi
                berakhlakul karimah yang siap menghadapi perkembangan ilmu
                pengetahuan dan teknologi di masa sekarang dan yang akan datang.
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <button
                className="btn btn-success btn-lg rounded-pill fs-5 px-4"
                onClick={() => navigate("/profil/tentang")}
              >
                Detail Tentang Kami <i className="fa fa-chevron-right fs-6"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="galeri-kegiatan">
        <Container fluid>
          <Row>
            <Col className="text-center galeri-title">
              <h1 className="section-title m-0">Galeri Kegiatan</h1>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">KBM</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img
                  src={KBM1}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM2}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={KBM3}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button
                  className="btn btn-success btn-lg rounded-pill fs-5 px-4"
                  onClick={() => navigate("/gallery/gallery-kbm")}
                >
                  Lihat Semua <i className="fa fa-chevron-right fs-6"></i>
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Ekskul</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img
                  src={ESKL1}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={ESKL2}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={ESKL3}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button
                  className="btn btn-success btn-lg rounded-pill fs-5 px-4"
                  onClick={() => navigate("/gallery/gallery-ekskul")}
                >
                  Lihat Semua <i className="fa fa-chevron-right fs-6"></i>
                </button>
              </Col>
            </Row>
          </div>
          <div className="mb-5">
            <Row style={{ marginTop: "100px" }}>
              <Col>
                <h1 className="section-title mb-4">Event Sekolah</h1>
              </Col>
            </Row>
            <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4">
              <Col>
                <img
                  src={EVNT1}
                  alt="event1"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={EVNT2}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
              <Col>
                <img
                  src={EVNT3}
                  alt="unsplash.com"
                  className="w-100"
                  style={{ height: "250px" }}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col className="text-center">
                <button
                  className="btn btn-success btn-lg rounded-pill fs-5 px-4"
                  onClick={() => navigate("/gallery/gallery-event")}
                >
                  Lihat Semua <i className="fa fa-chevron-right fs-6"></i>
                </button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
