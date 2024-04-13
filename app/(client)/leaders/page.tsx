import { BsEye } from "react-icons/bs";

const AllLaeders = () => {
    return (
        <div className="relative flex min-h-screen flex-col  overflow-hidden py-6 bg-white">
            <div className="mx-auto max-w-screen-xl px-4 w-full">
                <h2 className="mb-4 font-bold text-xl text-gray-600">Business Profiles.</h2>
                <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

                    <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">

                        <a href="/leaders/1" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
                        <div className="h-auto overflow-hidden">
                            <div className="h-44 overflow-hidden relative">
                                <img src="/src/img/dummy/avatar.jpg" alt="" />
                            </div>
                        </div>
                        <div className="bg-white py-4 px-3">
                            <h3 className="mb-2 font-bold text-lg text-black">Mr John Doe</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-md text-gray-400">
                                    He is one of the greatest leaders ...
                                </p>
                                <div className="relative z-40 flex items-center gap-2">
                                    <a className="text-red-600 hover:text-red-700 flex flex-col justify-center items-center"
                                        href="/leaders/1">
                                        <BsEye size={20} color="red" />
                                        <span>view</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default AllLaeders;