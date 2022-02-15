const PlantPal = () => {
    return (
        <div className="py-12 px-4">
            <div className="flex flex-col">
                <div>
                    <h3 className="font-bold text-2xl pb-12">PlantPal</h3>
                    <p className="leading-7 pr-8 pb-8">
                        This is a space for houseplant lovers everywhere,
                        focused around care guides and interactive content to
                        help match indoor gardeners with the perfect PlantPal
                        and accompanying plant pot.
                    </p>
                </div>
                <div className="flex justify-between items-start">
                    <img
                        src="images/case-studies/plantpal/mobile1.png"
                        className="w-1/3"
                    />
                    <img
                        src="images/case-studies/plantpal/mobile2.png"
                        className="w-1/3 pl-2"
                    />
                    <img
                        src="images/case-studies/plantpal/mobile3.png"
                        className="w-1/3 pl-2"
                    />
                </div>
                <div>
                    <h3 className="font-bold text-2xl pb-12">User problem</h3>
                    <p className="leading-7">
                        Buying plants that you can keep alive. With a growing
                        number of people lacking outdoor space, indoor gardening
                        has become a norm. Plants can boost productivity and
                        bring tranquility to an indoor space. People often
                        choose plants based on how they look, which can lead to
                        incompatibility.
                    </p>
                    <div className="flex py-12">
                        <img
                            src="images/case-studies/plantpal/concept.png"
                            className="w-1/2 pr-2 "
                        />
                        <img
                            src="images/case-studies/plantpal/colours.png"
                            className=" pl-2 w-1/2"
                        />
                    </div>
                    <h3 className="font-bold text-2xl pb-6">Research</h3>
                    <p className="leading-7 pb-12">
                        Plants should be selected based on both aesthetics and
                        suitability. Understanding the limitations presented by
                        your indoor space, such as light and warmth is key to
                        creating a successful indoor garden and maintaining
                        plants long-term. I explored various paths to further my
                        understanding around the needs of indoor gardeners. I
                        created personas based on questionnaire results and
                        performed market research.
                    </p>
                    <h3 className="font-bold text-2xl pb-6">
                        Key points where I reflected back to the personas
                    </h3>
                    <p className="leading-7">
                        PotMatcher - PotMatcher allows you to select plant pots
                        based on aesthetic categories such as sculpture and fun,
                        for those who enjoy finding the perfect plant pot to
                        bring a little more personality to their plants.
                        PlantPal Quiz - My goal was to create a quiz that could
                        offer the right plants, no matter what the persona. I
                        wanted Poppy to be able to find pet-friendly options,
                        Ash to able to find low-maintenance plants and for
                        Acacia to be able to gauge what plants could live
                        without her for a few days.
                    </p>
                    <div className="flex py-12">
                        <img
                            src="images/case-studies/plantpal/poppy.png"
                            className="w-1/3"
                        />
                        <img
                            src="images/case-studies/plantpal/ash.png"
                            className=" pl-2 w-1/3"
                        />
                        <img
                            src="images/case-studies/plantpal/acacia.png"
                            className=" pl-2 w-1/3"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantPal
