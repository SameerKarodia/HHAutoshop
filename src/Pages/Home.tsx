import "bootstrap/dist/css/bootstrap.css";
import styles from "./Home.module.css";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.Header}>
        <Header />
      </div>
      <div className={styles.Info}>
        <Info />
      </div>
      <div className={styles.Services}>
        <Services />
      </div>
      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
