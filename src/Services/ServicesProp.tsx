import styles from "./Services.module.css";
import { Link } from "react-router-dom";
// import Iframe from "../Iframe";
import BookingWidget from "../BookingWidget";

interface ServicesPropProps {
  image: string;
  name: string;
  description: string;
  moreinfo: string;
  // url: string;
}
function ServicesProp(props: ServicesPropProps) {
  return (
    <div className={styles.cardBox}>
      <div className={styles.cardImg}>
        <img src={props.image} />
      </div>
      <div className={styles.cardText}>
        <h1>{props.name}</h1>
        <h6>{props.description}</h6>

        <Link to={props.moreinfo}>
          <h6 className={styles.linkTag}>More Info</h6>
        </Link>

        {/* <button className={styles.bookButton}>{props.booknow}</button> */}

        <BookingWidget />
      </div>
    </div>
  );
}

export default ServicesProp;
