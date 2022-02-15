import artworks from "../data/art.json"
import ImageGallery from "../components/lightbox"

const Art = () => {
    return (
        <div>
            <div>
                <div className="mx-auto px-4">
                    <h3 className="text-2xl font-medium pt-24 px-5 sm:px-0 pb-6">
                        Selected works
                    </h3>
                    <div>
                        <div className="mb-12">
                            <ImageGallery images={artworks.art} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art
