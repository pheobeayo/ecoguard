import React from "react";
import arrow from "../../assets/arrow.png";
import star from "../../assets/star.png";





const About = () => {


    return (
        <div className="bg-[#1A1818]">
            <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
                
                    <h2 className="text-white text-3xl pb-[48px] font-bold leading-10 mt-16">
                        Why Ecoguards?
                    </h2>
                    <img src={arrow} alt="arrow" />
                

                <div className="sm:grid sm:grid-cols-3 sm:space-x-0 gap-4">
                    {/* first content */}
                    <div className='content-card w-full  mb-5 h-full border-white border-2 rounded-md'>
                        <div className="mx-12">
                        <img src={star} alt="star" width={40} className="mx-4 mt-2" />
                        <h3 className="text-white text-2xl font-bold leading-loose pt-[40px] mx-4">
                            Direct Impact
                        </h3>
                        <p className="text-white text-sm font-normal leading-7">
                            Donating through our platform ensures
                            <br></br>that your contributions directly support
                            <br></br>conservation projects aimed at saving
                            <br></br>endangered animals in Africa,
                            <br></br>maximizing the impact of your donations.
                        </p>
                        </div>
                    </div>

                    {/* second content */}
                    <div className='content-card w-full mb-5 h-full border-white border-2 rounded-md'>
                        <img src={star} alt="star" width={40} />
                        <h3 className="text-white text-2xl font-bold leading-loose pt-[40px]">
                            Transparency and Accountability
                        </h3>
                        <p className="text-white text-sm font-normal leading-7">
                            Our platform ensures transparency and
                            <br></br>accountability by enabling donors to track
                            <br></br>and verify the utilization of their funds,
                            <br></br>promoting trust and accountability in
                            <br></br>conservation efforts
                        </p>
                    </div>

                    {/* third content */}
                    <div className='content-card w-full mb-5 h-full border-white border-2 rounded-md'>
                        <img src={star} alt="star" width={40} />
                        <h3 className="text-white text-2xl font-bold leading-loose pt-[40px]">
                            Efficiency and Cost-effectiveness
                        </h3>
                        <p className="text-white text-sm font-normal leading-7">
                            By leveraging blockchain technology and
                            <br></br>cryptocurrency donations, our platform
                            <br></br>minimizes transaction costs, allowing a
                            <br></br>higher proportion of donated funds to
                            <br></br>benefit wildlife conservation projects
                        </p>
                    </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:space-x-0 gap-4 mt-2">
                    {/* first content */}
                    <div className='content-card w-full mb-5 h-full border-white border-2 rounded-md'>
                        <img src={star} alt="star" width={40} />
                        <h3 className="text-white text-2xl font-bold leading-loose pt-[40px]">
                            Global Reach
                        </h3>
                        <p className="text-white text-sm font-normal leading-7">
                            Our platform enables individuals and
                            <br></br>organizations from around the world to
                            <br></br>participate in saving endangered animals,
                            <br></br>fostering a global community united in
                            <br></br>their commitment to wildlife conservation
                        </p>
                    </div>

                    {/* second content */}
                    <div className='content-card w-full mb-5 h-full border-white border-2 rounded-md'>
                        <img src={star} alt="star" width={40} />
                        <h3 className="text-white text-2xl font-bold leading-loose pt-[40px]">
                            Cryptocurrency Benefits
                        </h3>
                        <p className="text-white text-sm font-normal leading-7">
                            Donating in cryptocurrency offers benefits
                            <br></br>such as faster transactions, enhanced
                            <br></br>security, and potential tax advantages,
                            <br></br>making it an efficient method for
                            <br></br>contributing to wildlife conservation
                        </p>
                    </div>

                    {/* third content */}
                    <div className='content-card w-full mb-5 h-full border-white border-2 rounded-md'>
                        <img src={star} alt="star" width={40} />
                        <h3 className="text-white text-2xl font-bold leading-loose pt-[40px]">
                            Sustainable Future
                        </h3>
                        <p className="text-white text-sm font-normal leading-7">
                            By donating to save endangered animals,
                            <br></br>you secure a sustainable future,
                            <br></br>preserving Africa's biodiversity, ecological
                            <br></br>balance, and invaluable natural heritage
                            <br></br>for generations to come
                        </p>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default About;