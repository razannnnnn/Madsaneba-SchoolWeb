import { Container, Row, Col } from "react-bootstrap";

const TentangPage = () => {
  return (
    <div className="profil">
      <div className="tentang-kami">
        <Container>
          <Row>
            <Col className="section-title">
              <h1>Tentang Kami</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                MTsN 1 Kota Blitar, adalah sebuah lembaga pendidikan yang telah
                tumbuh dan berkembang sejak didirikan pada tanggal 26 Desember
                1967. Sejak awal berdirinya, kami telah menjalani perjalanan
                yang penuh semangat dalam memberikan layanan pendidikan
                berkualitas kepada warga negara Indonesia.
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                MTsN 1 Kota Blitar, awalnya dikenal sebagai PGAN 4 Tahun, telah
                mengalami beberapa perubahan nama sepanjang sejarahnya, tetapi
                semangat dan komitmen kami untuk mencerdaskan generasi bangsa
                tetap tidak pernah surut. Dalam tahun 1978, berdasarkan
                instruksi dari Departemen Agama dan keputusan Menteri Agama,
                nama PGAN 4 Tahun diubah menjadi Madrasah Tsanawiyah Negeri
                Blitar (MTsN Blitar).
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Kemudian, melalui beberapa perubahan, kami dikenal sebagai MTsN
                Kodya Blitar hingga akhirnya menjadi MTsN 1 Kota Blitar, seperti
                yang dikenal saat ini. Perubahan nama yang berkali-kali ini
                tidak pernah menghentikan semangat dan perjuangan kami dalam
                mengemban tugas mulia untuk mencerdaskan anak bangsa. Selama
                berjalannya waktu, MTsN 1 Kota Blitar telah berperan aktif dalam
                membantu pemerintah memberikan layanan pendidikan yang layak
                kepada masyarakat Indonesia.
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Kami terus berbenah diri dengan tekad kuat untuk memperbaiki dan
                mengembangkan kuantitas dan kualitas layanan pendidikan. Upaya
                ini dimulai dengan peningkatan sumber daya manusia, baik tenaga
                pendidik maupun tenaga kependidikan, serta penerimaan siswa baru
                yang terus mengutamakan kualitas. Kami juga memberikan pelatihan
                dan dukungan penuh kepada seluruh siswa kami, baik dalam aspek
                akademik maupun non-akademik.
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Misi kami adalah mencetak generasi berakhlakul karimah yang siap
                menghadapi tantangan perkembangan ilmu pengetahuan dan
                teknologi, baik pada masa sekarang maupun masa yang akan datang.
                Kami berkomitmen untuk memberikan pendidikan yang menginspirasi,
                mengembangkan kecerdasan, dan membentuk kepribadian yang unggul.
              </p>
              <p className="lh-lg" style={{ textAlign: "justify" }}>
                Dengan bangga, MTsN 1 Kota Blitar terus berperan dalam membantu
                masyarakat dan pemerintah dalam membentuk masa depan yang cerah
                melalui pendidikan berkualitas. Kami mengundang Anda untuk
                menjelajahi lebih lanjut tentang kami dan bergabung dalam
                perjalanan pendidikan yang bermakna di MTsN 1 Kota Blitar.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TentangPage;
