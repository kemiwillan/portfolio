import caseStudies from "../data/caseStudies.json"
import { useState } from "react"
import Head from "next/head"

export default function Home() {
    return (
        <div>
            <Head>
                {" "}
                <title>Kemi Mai</title>
                <meta name="description" content="Art by Kemi Mai" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="flex items-center justify-center  h-screen">
                    <h1 className="text-5xl px-4 text-center sm:text-left">
                        Donec accumsan, vitae, erat pharetra mollis ultrices.{" "}
                    </h1>
                </div>

                <div className="px-8 max-w-[1250px] mx-auto">
                    {caseStudies.studies.map((study, index) => (
                        <div key="{study}" className="pb-16 ">
                            <img src={study.image} alt={study.title} />
                            <div className="py-16 flex">
                                <h3 className="text-4xl w-1/2 font-semibold">
                                    {study.title}
                                </h3>
                                <div className="w-1/2">
                                    <div className="w-full flex pb-6 justify-between font-medium text-2xl">
                                        <span>Case study </span>
                                        <button className="font-medium hover:text-gray-500">
                                            Expand
                                        </button>
                                    </div>
                                    <div>
                                        <p className="text-lg">
                                            {study.description}{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}
