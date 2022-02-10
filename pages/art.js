import Head from "next/head";
import Image from "next/image";
import square from "../public/images/graysquare.png";
import artworks from "../data/art.json";
import ImageGallery from "../components/lightbox";

const Art = () => {
  return (
    <div>
      {" "}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <title>Kemi Mai - Art</title>
        <meta name="description" content="Art by Kemi Mai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="mx-auto max-w-[1250px]">
          <div className="flex justify-between py-4 border">
            <h3>Kemi Mai</h3>
            <button>Mate</button>
          </div>
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
