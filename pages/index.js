import caseStudies from "../data/caseStudies.json";
import { useState } from "react";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <div>
      <main>
        <div className="flex items-center justify-center border h-screen">
          <h1 className="text-5xl">
            Donec accumsan, vitae, erat pharetra mollis ultrices.{" "}
          </h1>
        </div>

        <div className="px-8 max-w-[1250px] mx-auto">
          {caseStudies.studies.map((study, index) => (
            <div key="{study}" className="pb-16 ">
              {/* <Image src={require(study.image)} /> */}
              <img src={study.image} alt={study.title} />
              <div className="py-16 flex">
                <h3 className="text-4xl w-1/2 font-semibold">{study.title}</h3>
                <div className="w-1/2">
                  <div className="w-full flex pb-6 justify-between font-medium text-2xl">
                    <span>Case study </span>
                    <button className="font-medium hover:text-gray-500">
                      Expand
                    </button>
                  </div>
                  <div>
                    <p className="text-lg">{study.description} </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
