const Planr = () => {
    return (
        <div className="py-12 px-4">
            <div className="flex flex-col">
                <div>
                    <h3 className="font-bold text-2xl pb-6">
                        Planr - Task management dashboard{" "}
                    </h3>
                    <p className="leading-7 pr-8 pb-12">
                        For this project, I wanted to explore organisation in a
                        workforce. Planr is a task management web application.
                        The dashboard has been designed to help users manage
                        their tasks, files and timeline.
                    </p>
                    <img
                        src="images/case-studies/planr/dashboard.png"
                        className="w-full"
                    />
                </div>
                <div>
                    <h3 className="font-bold text-2xl pb-12">Goal</h3>
                    <p className="leading-7">
                        Simplicity, usability and visual appeal were some of the
                        key values for this project. I wanted to create a great
                        structure that could streamline task prioritaisation,
                        whilst ensuring that productivity was presented in the
                        most positive way.
                    </p>
                    <img
                        src="images/case-studies/planr/wireframe.png"
                        className="w-full"
                    />

                    <h3 className="font-bold text-2xl pb-6">Research</h3>
                    <p className="leading-7 pb-12">
                        I researched competitors in the task management field to
                        be able to set key features and address user needs. I
                        found that collaboration was a large takeaway, as most
                        users work as part of a team. Throughout the features of
                        Planr, collaboration remains at the forefront. The user
                        is able to see a list of team members assigned to tasks
                        and there is a notification-based feature which allows
                        you to see tasks being updated in real-time.
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

export default Planr
