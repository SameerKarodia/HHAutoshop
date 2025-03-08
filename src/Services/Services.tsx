import ServicesProp from "./ServicesProp";
import detailingPic from "../assets/detailingPic.jpg";
import brakePic from "../assets/brakesPic.jpg";
import lightsPic from "../assets/lightsPic.jpg";
import TuneupsPic from "../assets/TuneupsPic.jpg";
import OilchangePic from "../assets/OilchangePic.jpg";

function Services() {
  return (
    <div>
      <ServicesProp
        image={detailingPic}
        name="Detailing"
        description="Full Interior & Exterior Detailing"
        moreinfo="/Detailing"
        url="https://calendly.com/hhautoshop04/detailing"
      />

      <ServicesProp
        image={brakePic}
        name="Brakes"
        description="Reliable Brake Service & Repair"
        moreinfo="/Brakes"
        url="https://calendly.com/hhautoshop04/brakes"
      />
      <ServicesProp
        image={TuneupsPic}
        name="Tune-Ups"
        description="Basic Maintenance & Tune-Ups"
        moreinfo="/TuneUps"
        url="https://calendly.com/hhautoshop04/tuneups"
      />
      <ServicesProp
        image={OilchangePic}
        name="Oil Change"
        description="Oil Change & Filter Replacement"
        moreinfo="/OilChange"
        url="https://calendly.com/hhautoshop04/oilchange"
      />
      <ServicesProp
        image={lightsPic}
        name=" LED Lights"
        description="High Beam/Low Beam/Fog Lights"
        moreinfo="/Lights"
        url="https://calendly.com/hhautoshop04/lights"
      />
    </div>
  );
}
export default Services;
