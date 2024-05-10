import PicturesSlider from '@/app/(client)/components/PicturesSlider';
import SocialMediaButtons from '@/app/(client)/components/SocialMediaButtons';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
const SingleLeader = () => {
    const images = [
        {
            url: '/src/img/dummy/img8.jpg',
            key: '1',
        },
        {
            url: '/src/img/dummy/img22.jpg',
            key: '1',
        },
        {
            url: '/src/img/dummy/img5.jpg',
            key: '1',
        },
    ];
    return (
        <div className="bg-white">
            <div className="flex flex-col items-center">
                {/* top content */}
                <div className="flex w-full flex-col rounded-t-lg sm:px-2 md:w-4/5">
                    <div className="flex w-full justify-center">
                        <div className="w-[1000px] overflow-hidden md:h-[510px]">
                            <PicturesSlider images={images} />
                        </div>
                    </div>

                    <div className="mt-5 flex w-full flex-col items-center justify-center pl-5 text-start sm:text-center">
                        <p className="font-poppins text-heading text-2xl font-bold text-black sm:text-4xl">
                            Mr John Doe
                        </p>
                        <p className="text-gray-700">Software Engineer</p>
                    </div>
                </div>

                {/* main content */}
                <div className="w-full px-5 md:w-11/12">
                    <div className="flex flex-col sm:mt-10 sm:flex-row">
                        <div className="order-first flex w-full flex-col sm:order-none sm:-mt-10">
                            {/* About me */}
                            <div className="py-3">
                                <h2 className="font-poppins text-lg font-bold text-red-700">About</h2>
                                <div className="my-3 w-20 border-2 border-red-700"></div>
                                <p className="text-gray-700">
                                    To get a career opportunity which would help me to utilize my academic background to
                                    assist me to gain experience, employ my excellent skills, and enable me to make
                                    positive contribution.<br></br>
                                    <br></br>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam commodi
                                    harum minus impedit distinctio, eum vitae nulla blanditiis nisi error deserunt
                                    similique magnam cupiditate eos id, quibusdam exercitationem nemo pariatur
                                    praesentium. Fuga nisi, reprehenderit repellendus sequi repudiandae, nostrum quae
                                    voluptatum ex a, sunt consectetur nulla nesciunt exercitationem. Quaerat soluta
                                    nobis non dicta, at eligendi sed voluptatibus pariatur quidem voluptas.
                                    <br></br>
                                    <br></br>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium ab
                                    rerum, in similique quaerat eos quasi tenetur inventore ducimus mollitia voluptas
                                    vel sapiente molestias hic fugit unde libero fugiat deleniti amet aperiam. Aperiam
                                    ipsam nulla, ducimus alias praesentium itaque iste sed eos id sequi placeat impedit
                                    tempora adipisci ullam facilis voluptatum? Mollitia, provident ex quod architecto
                                    quia aspernatur illo!
                                </p>
                                <p className="text-gray-700">
                                    To get a career opportunity which would help me to utilize my academic background to
                                    assist me to gain experience, employ my excellent skills, and enable me to make
                                    positive contribution.<br></br>
                                    <br></br>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam commodi
                                    harum minus impedit distinctio, eum vitae nulla blanditiis nisi error deserunt
                                    similique magnam cupiditate eos id, quibusdam exercitationem nemo pariatur
                                    praesentium. Fuga nisi, reprehenderit repellendus sequi repudiandae, nostrum quae
                                    voluptatum ex a, sunt consectetur nulla nesciunt exercitationem. Quaerat soluta
                                    nobis non dicta, at eligendi sed voluptatibus pariatur quidem voluptas.
                                    <br></br>
                                    <br></br>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium ab
                                    rerum, in similique quaerat eos quasi tenetur inventore ducimus mollitia voluptas
                                    vel sapiente molestias hic fugit unde libero fugiat deleniti amet aperiam. Aperiam
                                    ipsam nulla, ducimus alias praesentium itaque iste sed eos id sequi placeat impedit
                                    tempora adipisci ullam facilis voluptatum? Mollitia, provident ex quod architecto
                                    quia aspernatur illo!
                                </p>
                                <p className="text-gray-700">
                                    To get a career opportunity which would help me to utilize my academic background to
                                    assist me to gain experience, employ my excellent skills, and enable me to make
                                    positive contribution.<br></br>
                                    <br></br>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam commodi
                                    harum minus impedit distinctio, eum vitae nulla blanditiis nisi error deserunt
                                    similique magnam cupiditate eos id, quibusdam exercitationem nemo pariatur
                                    praesentium. Fuga nisi, reprehenderit repellendus sequi repudiandae, nostrum quae
                                    voluptatum ex a, sunt consectetur nulla nesciunt exercitationem. Quaerat soluta
                                    nobis non dicta, at eligendi sed voluptatibus pariatur quidem voluptas.
                                    <br></br>
                                    <br></br>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis accusantium ab
                                    rerum, in similique quaerat eos quasi tenetur inventore ducimus mollitia voluptas
                                    vel sapiente molestias hic fugit unde libero fugiat deleniti amet aperiam. Aperiam
                                    ipsam nulla, ducimus alias praesentium itaque iste sed eos id sequi placeat impedit
                                    tempora adipisci ullam facilis voluptatum? Mollitia, provident ex quod architecto
                                    quia aspernatur illo!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SocialMediaButtons url={'/leaders/2'} />
        </div>
    );
};

export default SingleLeader;
