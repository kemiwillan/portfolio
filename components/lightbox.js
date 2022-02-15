import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
        <div className="mb-[11px]" key={image.id}>
          <div
            style={{
              backgroundImage: "url(" + `${image.image}` + ")",
              width: "300px",
              height: "300px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            onClick={() => showImage(image)}
          ></div>
        </div>
      ))}

      {lightboxDisplay ? (
        <div className="border" id="lightbox" onClick={hideLightBox}>
          <style jsx>
            {`
              #lightbox-img {
                height: 80vh;
                max-width: 70vw;
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
          <div className="border flex justify-center mx-auto">
            <button onClick={showPrev} className="">
              <ArrowBackIosIcon
                sx={{ fontSize: 40, mx: 10 }}
              ></ArrowBackIosIcon>
            </button>
            <img id="lightbox-img" src={imageToShow.image}></img>
            <button onClick={showNext} className="">
              <ArrowForwardIosIcon
                sx={{ fontSize: 40, mx: 10 }}
              ></ArrowForwardIosIcon>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageGallery;
