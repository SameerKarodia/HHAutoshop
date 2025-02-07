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
        booknow="Book Now"
      />

      <ServicesProp
        image={brakePic}
        name="Brakes"
        description="Reliable Brake Service & Repair"
        moreinfo="/Brakes"
        booknow="Book Now"
      />
      <ServicesProp
        image={TuneupsPic}
        name="Tune-Ups"
        description="Masic Maintenance & Tune-Ups"
        moreinfo="/TuneUps"
        booknow="Book Now"
      />
      <ServicesProp
        image={OilchangePic}
        name="Oil Change"
        description="Oil Change & Filter Replacement"
        moreinfo="/OilChange"
        booknow="Book Now"
      />
      <ServicesProp
        image={lightsPic}
        name=" LED Lights"
        description="High Beam/Low Beam/Fog Lights"
        moreinfo="/Lights"
        booknow="Book Now"
      />
    </div>
  );
}
export default Services;
