import PicturesSlider from "@/app/(client)/components/PicturesSlider";
import SocialMediaButtons from "@/app/(client)/components/SocialMediaButtons";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
const SingleLeader = () => {
    const images = [
        {
            url: "/src/img/ad.jpeg",
            key: "1"
        },
        {
            url: "/src/img/ad.jpeg",
            key: "1"
        }
    ]
    return (
        <div className="bg-white">

            <div className="space-y-8 flex flex-col md:flex-row md:justify-center md:items-start md:space-x-4">

                {/* top content */}
                <div className="flex flex-col rounded-t-lg sm:px-2 w-full md:w-2/5">
                    <div className="md:h-[70vh] md:w-full overflow-hidden sm:relative sm:p-0 top-10 left-5 p-3">
                        <img className="h-full w-full object-cover" src="../src/img/dummy/img1.jpg" />
                    </div>

                    <div className="w-full sm:text-center pl-5 mt-10 text-start flex flex-col items-center justify-center">
                        <p className="font-poppins text-black font-bold text-heading sm:text-4xl text-2xl">
                            Mphatso
                        </p>
                        <p className="text-gray-700">Software Engineer</p>
                    </div>

                </div>

                {/* main content */}
                <div className="px-5 w-full md:w-3/5">

                    <div className="flex flex-col sm:flex-row sm:mt-10">

                        <div className="flex flex-col w-full order-first sm:order-none sm:-mt-10">
                            {/* About me */}
                            <div className="py-3">
                                <h2 className="text-lg font-poppins font-bold text-red-700">About</h2>
                                <div className="border-2 w-20 border-red-700 my-3"></div>
                                <p className="text-gray-700">To get a career opportunity which would help me to utilize my academic background to assist
                                    me to gain experience, employ my excellent skills, and enable me to make positive
                                    contribution.<br></br><br></br>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam commodi harum minus impedit distinctio, eum vitae nulla blanditiis nisi error deserunt similique magnam cupiditate eos id, quibusdam exercitationem nemo pariatur praesentium. Fuga nisi, reprehenderit repellendus sequi repudiandae, nostrum quae voluptatum ex a, sunt consectetur nulla nesciunt exercitationem. Quaerat soluta nobis non dicta, at eligendi sed voluptatibus pariatur quidem voluptas.
                                    <br></br><br></br>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium ab rerum, in similique quaerat eos quasi tenetur inventore ducimus mollitia voluptas vel sapiente molestias hic fugit unde libero fugiat deleniti amet aperiam. Aperiam ipsam nulla, ducimus alias praesentium itaque iste sed eos id sequi placeat impedit tempora adipisci ullam facilis voluptatum? Mollitia, provident ex quod architecto quia aspernatur illo!
                                </p>
                                <p className="text-gray-700">To get a career opportunity which would help me to utilize my academic background to assist
                                    me to gain experience, employ my excellent skills, and enable me to make positive
                                    contribution.<br></br><br></br>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam commodi harum minus impedit distinctio, eum vitae nulla blanditiis nisi error deserunt similique magnam cupiditate eos id, quibusdam exercitationem nemo pariatur praesentium. Fuga nisi, reprehenderit repellendus sequi repudiandae, nostrum quae voluptatum ex a, sunt consectetur nulla nesciunt exercitationem. Quaerat soluta nobis non dicta, at eligendi sed voluptatibus pariatur quidem voluptas.
                                    <br></br><br></br>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium ab rerum, in similique quaerat eos quasi tenetur inventore ducimus mollitia voluptas vel sapiente molestias hic fugit unde libero fugiat deleniti amet aperiam. Aperiam ipsam nulla, ducimus alias praesentium itaque iste sed eos id sequi placeat impedit tempora adipisci ullam facilis voluptatum? Mollitia, provident ex quod architecto quia aspernatur illo!
                                </p>
                                <p className="text-gray-700">To get a career opportunity which would help me to utilize my academic background to assist
                                    me to gain experience, employ my excellent skills, and enable me to make positive
                                    contribution.<br></br><br></br>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam commodi harum minus impedit distinctio, eum vitae nulla blanditiis nisi error deserunt similique magnam cupiditate eos id, quibusdam exercitationem nemo pariatur praesentium. Fuga nisi, reprehenderit repellendus sequi repudiandae, nostrum quae voluptatum ex a, sunt consectetur nulla nesciunt exercitationem. Quaerat soluta nobis non dicta, at eligendi sed voluptatibus pariatur quidem voluptas.
                                    <br></br><br></br>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium ab rerum, in similique quaerat eos quasi tenetur inventore ducimus mollitia voluptas vel sapiente molestias hic fugit unde libero fugiat deleniti amet aperiam. Aperiam ipsam nulla, ducimus alias praesentium itaque iste sed eos id sequi placeat impedit tempora adipisci ullam facilis voluptatum? Mollitia, provident ex quod architecto quia aspernatur illo!
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <SocialMediaButtons url={"/leaders/2"} />

        </div>
    )
}

export default SingleLeader;