import { fetchCompanies } from '@/app/action';
import Image from 'next/image';

const DirectoryPage = async () => {
    const companies = await fetchCompanies();

    return (
        <div className="bg-gray-50 py-6">
            <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
                <div className="flex flex-row flex-wrap">
                    <div className="w-full max-w-full flex-shrink overflow-hidden">
                        <div className="w-full py-3">
                            <h2 className="text-2xl font-bold text-gray-800">
                                <span className="border-l-3 mr-2 inline-block h-5 border-2 border-red-600"></span>
                                Directories
                            </h2>
                        </div>
                        <div className="-mx-3 flex flex-row flex-wrap">
                            <div className="w-full max-w-full flex-shrink px-3 pb-5">
                                <div className="hover-img relative max-h-[50vh] overflow-hidden">
                                    {/*thumbnail*/}
                                    <a href="#">
                                        <Image
                                            className="mx-auto h-auto w-full max-w-full object-cover"
                                            width={1300}
                                            height={400}
                                            src="/src/img/directory.jpg"
                                            alt="Image description"
                                        />
                                    </a>
                                </div>
                            </div>
                            {companies.length
                                ? companies.map((company) => (
                                      <div
                                          key={company._id}
                                          className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0"
                                      >
                                          <div className="hover-img flex flex-row sm:block">
                                              <a href={`/directory/${company._id}`}>
                                                  <img
                                                      className="max-w-20 mx-auto h-20 w-20 object-cover"
                                                      src={company.logo[0]?.url}
                                                      alt="alt title"
                                                  />
                                              </a>
                                              <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                                                  <h3 className="mb-2 text-center text-2xl font-bold leading-tight text-black">
                                                      <a href={`/directory/${company._id}`}>{company.name}</a>
                                                  </h3>
                                              </div>
                                          </div>
                                      </div>
                                  ))
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectoryPage;
