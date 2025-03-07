import { useEffect } from "react";
import styles from "./Iframe.module.css"; // Import your styles

interface IframeProps {
  url: string;
}

const Iframe: React.FC<IframeProps> = ({ url }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to trigger Calendly popup
  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    }
  };

  return (
    <button className={styles.bookButton} onClick={openCalendlyPopup}>
      Book Now
    </button>
  );
};

export default Iframe;
