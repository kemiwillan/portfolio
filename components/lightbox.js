import { useState, useEffect } from "react"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

const ImageGallery = (props) => {
    const [imageToShow, setImageToShow] = useState("")
    const [lightboxDisplay, setLightBoxDisplay] = useState(false)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    useEffect(() => {
        if (lightboxDisplay == true) {
            document.body.style.overflow = "hidden"
        }
        if (lightboxDisplay == false) {
            document.body.style.overflow = ""
        }
    })

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = (e) => {
        if (touchStart - touchEnd > 75) {
            showNext()
        }
        if (touchStart - touchEnd < -75) {
            showPrev()
        }
    }

    //function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (image) => {
        setImageToShow(image)
        setLightBoxDisplay(true)
    }

    //hide lightbox
    const hideLightBox = () => {
        setLightBoxDisplay(false)
    }

    //show next image in lightbox
    const showNext = (e) => {
        if (e !== undefined) {
            e.stopPropagation()
        }
        let currentIndex = props.images.indexOf(imageToShow)
        if (currentIndex >= props.images.length - 1) {
            setLightBoxDisplay(false)
        } else {
            let nextImage = props.images[currentIndex + 1]
            setImageToShow(nextImage)
        }
    }

    //show previous image in lightbox
    const showPrev = (e) => {
        if (e !== undefined) {
            e.stopPropagation()
        }
        let currentIndex = props.images.indexOf(imageToShow)
        if (currentIndex <= 0) {
            setLightBoxDisplay(false)
        } else {
            let nextImage = props.images[currentIndex - 1]
            setImageToShow(nextImage)
        }
    }

    return (
        <div className="flex flex-wrap justify-center md:justify-between">
            {props.images.map((image) => (
                <div className="mb-[5px]" key={image.id}>
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
                                object-fit: cover;
                            }

                            #lightbox {
                                z-index: 5;
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
                    <div className="flex justify-center mx-auto">
                        <button
                            onClick={showPrev}
                            className="px-2 hidden md:block transition-colors duration-200 text-gray-700 hover:text-gray-500 outline-none"
                        >
                            <ArrowBackIosIcon
                                sx={{ fontSize: 40, mr: 7 }}
                            ></ArrowBackIosIcon>
                        </button>
                        <div>
                            <img
                                id="lightbox-img"
                                className="md:w-[40vw] md:max-h-[95vh]"
                                onTouchMove={(touchMoveEvent) =>
                                    handleTouchMove(touchMoveEvent)
                                }
                                onTouchStart={(touchStartEvent) =>
                                    handleTouchStart(touchStartEvent)
                                }
                                onTouchEnd={(e) => handleTouchEnd()}
                                src={imageToShow.image}
                            ></img>
                            <h4 className="py-4 font-semibold text-2xl text-center">
                                "{imageToShow.title}"
                            </h4>
                        </div>
                        <button
                            onClick={showNext}
                            className="px-2 hidden md:block transition-colors duration-200 text-gray-700 hover:text-gray-500 outline-none"
                        >
                            <ArrowForwardIosIcon
                                sx={{ fontSize: 40, ml: 7 }}
                            ></ArrowForwardIosIcon>
                        </button>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    )
}

export default ImageGallery
