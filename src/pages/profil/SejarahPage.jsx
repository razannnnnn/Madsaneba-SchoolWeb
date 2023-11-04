import { Container, Row, Col } from "react-bootstrap";

const SejarahPage = () => {
  return (
    <div className="profil">
      <div className="sejarah">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>Sejarah Singkat</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Madrasah Tsanawiyah Negeri 1 Kota Blitar merupakan Madrasah
                Tsanawiyah Negeri yang berdiri mulai 26 Desember 1967 yang asal
                mulanya bernama PGAN 4 tahun. Madrasah ini mengalami beberapa
                kali perubahan nama mulai PGAN 4 Tahun Selanjutnya tahun 1978
                atas dasar instruksi Departemen Agama berdasar pada keputusan
                Menteri agama yang isinya perubahan nama dari PGAN 4 Tahun
                menjadi Madrasah Tsanawiyah Negeri Blitar ( MTsN Blitar ),
                selanjutnya berubah nama lagi menjadi MTsN kodya Blitar ,
                berubah lagi menjadi MTsN 1 Kota Blitar sampai sekarang .
                Perubahan nama yang berkali-kali tidak menyurutkan perjuangan
                madrasah dalam mengemban tugas mencerdaskan anak bangsa. Dan
                dengan berjalannya waktu Madrasah ini telah berperan aktif
                membantu pemerintah memberikan layanan pendidikan layak kepada
                warga negara Indonesia. MTsN 1 Kota Blitar terus berbenah dalam
                memperbaiki dan mengembangkan kuantitas dan kualitas layanan
                pendidikan melalui berbagai upaya , di mulai dengan peningkatan
                SDM tenaga pendidik dan tenaga kependidikan , penerimaan siswa
                baru yang terus mengutamakan kualitas sekaligus melatih seluruh
                siswa dalam bidang akademik dan non akademik Berbagai upaya yang
                dilakukan madrasah ini diharapkan mampu mencetak generasi
                berakhlakul karimah untuk menjawab tantangan perkembangan ilmu
                pengetahuan dan teknologi baik masa sekarang maupun masa yang
                akan datang.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SejarahPage;
