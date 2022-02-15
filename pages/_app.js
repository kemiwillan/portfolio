import Head from "next/head"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
    return (
        <div className=" max-w-[1250px] mx-auto">
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
            <div className="flex justify-between p-4 sm:py-4 ">
                <h3>Kemi Mai</h3>
                <button>Mate</button>
            </div>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
