import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import slidestyles from "./ImageSlider.module.css";

type ImageSliderProps = {
  imageUrls: string[];
};

function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img src={imageUrls[imageIndex]} className={slidestyles.sliderPics} />
      <button
        onClick={showPrevImage}
        className={slidestyles.sliderButton}
        style={{ left: 0 }}
      >
        {" "}
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className={slidestyles.sliderButton}
        style={{ right: 0 }}
      >
        {" "}
        <ArrowBigRight />
      </button>
    </div>
  );
}
export default ImageSlider;
