import React from 'react';
import Frontimage from '../../assets/Frontimage.png';  // Correct import path

const MainPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 pb-4">
            <div className="w-full md:w-3/4"> {/* Full width on small screens, 3/4 width on medium and larger */}
                <h1 className="text-3xl font-semibold mb-4">Welcome to the Main Page</h1>
                <div className="flex flex-col md:flex-row gap-8"> {/* Flex for layout, stack on small screens */}
                    <img
                        src={Frontimage}
                        alt="Front Page"
                        className="w-full md:w-3/5 h-auto rounded-lg shadow-lg"  // Full width on small screens, 3/5 width on medium and larger
                    />
                    <div className="md:w-2/5">
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
                            <h1 className="text-4xl font-bold mb-4 text-gray-800">We are here to support you</h1>
                            <p className="text-gray-700 leading-relaxed">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus in fugiat distinctio! Nulla, minus laudantium odit
                                excepturi blanditiis a voluptates vero dolorum sapiente totam deleniti! Voluptates nulla suscipit deserunt repellat
                                corrupti eum labore corporis eaque nobis laboriosam eius officiis consequuntur architecto laborum minus, nisi
                                adipisci alias voluptas libero? Ab consequuntur temporibus quasi non optio unde nostrum quaerat, sequi dolorem
                                itaque tempora nobis blanditiis possimus, provident illum, nesciunt nihil? Quod perspiciatis suscipit soluta illum
                                necessitatibus nobis ratione dolorem praesentium quasi, possimus maxime tempore natus iusto dolore officia corrupti
                                officiis est voluptate voluptas. Eligendi autem cumque nam reprehenderit inventore exercitationem voluptatum
                                asperiores?
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
