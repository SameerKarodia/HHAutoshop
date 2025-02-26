// const Iframe = () => {
//   return (
//     <iframe
//       src="https://calendly.com/sameerkarodia/30min"
//       width="auto"
//       height="400"
//       style={{ border: "none" }}
//       title="Booking"
//     ></iframe>
//   );
// };

// export default Iframe;

// import { useEffect } from "react";

// const Iframe = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       if (window.Calendly) {
//         window.Calendly.initBadgeWidget({
//           url: "https://calendly.com/sameerkarodia/30min",
//           text: "Book Now",
//           color: "#1a1a1a",
//           textColor: "#ffffff",
//         });
//       }
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return null;
// };

// export default Iframe;

import { useEffect } from "react";
import styles from "./Iframe.module.css"; // Import your styles

const Iframe = () => {
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
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/sameerkarodia/30min",
      });
    }
  };

  return (
    <button className={styles.bookButton} onClick={openCalendlyPopup}>
      Book Now
    </button>
  );
};

export default Iframe;
