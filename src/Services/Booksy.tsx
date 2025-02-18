import { useEffect } from "react";

const Booksy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://booksy.com/widget/code.js?id=22214&country=ca&lang=en";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup to prevent duplicate scripts
    };
  }, []);

  return (
    <div>
      <h2>Book Your Appointment</h2>
      <div id="booksy-widget"></div>
    </div>
  );
};

export default Booksy;
