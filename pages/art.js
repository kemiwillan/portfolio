import Head from "next/head";
import Image from "next/image";
import artworks from "../data/art.json";
import ImageGallery from "../components/lightbox";

const Art = () => {
  return (
    <div>
      {" "}
      <div>
        <div className="mx-auto max-w-[1250px]">
          <div className="flex justify-between py-4 border">
            <h3>Kemi Mai</h3>
            <button>Mate</button>
          </div>
          <button>
            <span class="material-icons-outlined">arrow_forward_ios</span>
          </button>
          <h3 className="text-2xl font-medium pt-24 pb-6">Selected works</h3>
          <div>
            <div>
              <ImageGallery images={artworks.art} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
