"use client"

import { aboutSuccessData, webContent } from '@/app/[local]/components/commonComponents/mockData';
import aboutImg from '../../../../../public/images/aboutImage.webp';
import Image from "next/image";

//-----------function for about us page--------------
export default function AboutUs() {

    return (
        <section>
            <div className="relative w-full h-[280px] bg-cover bg-center bg-[url('/aboutImg.webp')]">
                <div className="container w-full text-center absolute bottom-[64px] left-[0] right-[0] mx-[auto] my-[0]">
                    <h1 className="text-[45px] font-bold leading-[59.99px] text-white font-playfair">About Us</h1>
                    <p className="text-[12px] font-bold leading-[15.12px] text-lightgray mt-[15px]">Home / About Us</p>
                </div>
            </div>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="py-5 mobile:pb-0 smobile:pb-0">
                        <h2 className="text-[40px] font-playfair font-semibold leading-[53.32px] text-blackshade smobile:text-[31px] smobile:leading-[30px]">
                            About Us
                        </h2>
                        <p className="text-lightBlack text-[13px] font-normal leading-[20px] mt-[30px]">
                            <strong className="text-[13px] font-semibold leading-[20px] text-blackshade">
                                New talent infotech Pvt. Ltd.
                            </strong> has extensive experience in delivering top-notch corporate and
                            industrial trainings. Having a team of expert trainers, we provide both
                            Technical and Non-technical trainings across domains.
                        </p>
                        <p className="text-lightBlack text-[13px] font-normal leading-[20px] mt-4 ">
                            <strong className="text-[13px] font-semibold leading-[20px] text-blackshade">
                                New talent infotech Pvt. Ltd.
                            </strong> also specializes in providing end-to-end recruitment services.
                            We have tie-up with major corporate companies to facilitate best in the
                            industry recruitments.
                        </p>

                        <strong className="text-[13px] font-semibold leading-[20px] text-blackshade mt-6 block">
                            Our Approach:
                        </strong>
                        <p className="text-lightBlack text-[13px] font-normal leading-[20px] mt-[12px]">
                            Our main approach is to build better relationships with clients by
                            providing products that meet their business requirements. New talent
                            infotech Pvt. Ltd. has become a well-reputed and award-winning company,
                            completing more than 700 projects. We work both as your partner and
                            consultant to offer fully developed services through the entire process of
                            design, development, and support.
                        </p>

                        <strong className="text-[13px] font-semibold leading-[20px] text-blackshade mt-6 block">
                            Some essential key features required in Our Approach:
                        </strong>
                        <ul className="list-disc list-inside text-lightBlack text-[13px] font-normal leading-[20px] mt-[12px]">
                            <li>To understand your requirements and expectations about the project</li>
                            <li>To provide proper documentation and records</li>
                            <li>Use of advanced and latest tools and techniques</li>
                            <li>To serve better quality services</li>
                            <li>On-time delivery of projects</li>
                        </ul>
                    </div>

                    <div className="md:p-5">
                        <Image
                            src={aboutImg}
                            alt="about-image"
                            width={1000}
                            height={1000}
                            className="md:mt-10 w-full max-w-[410px] mobile:max-w-[200px] mobile:mx-auto smobile:max-w-[200px] smobile:mx-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-darkblue py-[40px]">
                <div className="container">
                    <h3 className="text-[35px] font-bold leading-[46.66px] text-white font-playfair smobile:text-[26px] smobile:leading-[10px]">Our Area Of Expertise</h3>
                    <div className="grid grid-cols-1 saddMobile:grid-cols-2 mobile:grid-cols-2 subtablet:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[42px]">
                        {webContent.map((item, index) => (
                            <div key={index} className="bg-white border-[1px] border-[solid] border-[#989898] w-full ssmobile:max-w-[241px] tabview:max-w-[241px] rounded-[8px] overflow-hidden mx-auto md:border-[0px]">
                                <Image
                                    src={item.image}
                                    alt={item.heading}
                                    width={1000}
                                    height={1000}
                                    // className="w-full max-w-[237px] h-[196px] object-cover mx-[auto] rounded-[8px] p-[1px]"
                                    className="w-full h-auto ssmobile:max-w-[237px] tabview:max-w-[237px] mx-[auto] object-cover rounded-[8px] p-[1px]"
                                />
                                <div className="p-4">
                                    <h5 className="text-[15px] font-bold leading-[18.9px] text-left text-blackshade">{item.heading}</h5>
                                    <p className="text-[10px] font-normal leading-[12.6px] text-lightBlack line-clamp-3 mt-[6px]">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container py-[30px]">
                <h3 className="text-[35px] font-bold leading-[55px] text-center text-lightBlack font-playfair smobile:text-[26px] smobile:leading-[37px] px-[20px]">6 Pillars of Success for Sustainable Growth, Continuous Profitability and Total Client Satisfaction</h3>
                <div className="grid grid-cols-1 saddMobile:grid-cols-2 smobile:place-items-center tabview:place-items-center mobile:grid-cols-2 subtablet:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[50px] smobile:mt-[20px]">
                    {aboutSuccessData.map((item, index) => (
                        <div className="w-full max-w-[233px] mr-[10px] border-b-[1px_solid_#A0A0A0] mt-[20px]" key={index}>
                            <Image
                                src={item.image}
                                alt="about-image"
                                width={1000}
                                height={1000}
                                className="mb-[10px] mr-[10px] w-full max-w-[233px] rounded-[5px]"
                            />
                            <strong className="text-[15px] font-bold leading-[18.9px] text-left text-blackshade line-clamp-1">{item.heading}</strong>
                            <p className="text-[10px] font-normal leading-[12.6px] text-left text-lightBlack mt-[7px] smobile:mb-[10px] line-clamp-4">{item.text}</p>
                            <div className="border-[1px] border-[solid] border-[#D8DBDE] rounded-[5px] mt-[8px]"></div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}