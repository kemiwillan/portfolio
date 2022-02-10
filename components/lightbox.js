import { useState } from "react";
import Image from "next/image";
import square from "../public/images/graysquare.png";

const ImageGallery = (props) => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = props.images.indexOf(imageToShow);
    if (currentIndex >= props.images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = props.images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = props.images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = props.images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <div className="flex flex-wrap justify-between">
      {props.images.map((image) => (
        <div className="mb-[11px]">
          <Image
            src={square}
            alt="Picture of the author"
            width={300}
            height={300}
            onClick={() => showImage(image)}
          />
        </div>
      ))}

      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <style jsx>
            {`
              #lightbox-img {
                height: 80vh;
                max-width: 90vw;
                object-fit: cover;
              }

              #lightbox {
                z-index: 1;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: white;
                display: flex;
                align-items: center;
                justify-content: space-between;
              }
            `}
          </style>
          <button onClick={showPrev}>⭠</button>
          <img id="lightbox-img" src={imageToShow}></img>
          <button onClick={showNext}>⭢</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageGallery;
