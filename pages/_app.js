import Head from "next/head"
import "../styles/globals.css"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }) {
    const router = useRouter()
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
            </Head>
            <div className="flex justify-between p-4 sm:py-4 ">
                <a href="/">
                    <h3 className="text-2xl">Kemi Mai</h3>
                </a>
                <div className="flex space-between">
                    <a
                        href="/"
                        className={`px-4 ${
                            router.pathname == "/" ? "font-bold underline" : ""
                        }`}
                    >
                        <h3>Design</h3>
                    </a>

                    <a
                        href="/art"
                        className={`px-4 ${
                            router.pathname == "/art"
                                ? "font-bold underline"
                                : ""
                        }`}
                    >
                        <h3>Art</h3>
                    </a>

                    <a
                        href="/about"
                        className={`px-4 ${
                            router.pathname == "/about"
                                ? "font-bold underline"
                                : ""
                        }`}
                    >
                        <h3>About</h3>
                    </a>
                </div>
            </div>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
