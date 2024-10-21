"use client"

import { useEffect, useRef, useState } from "react";
import leftArrow from '../../../../../public/images/leftarrow.svg';
import rightArrow from '../../../../../public/images/rightarrow.svg';
import img from '../../../../../public/images/img.webp';
import Image from "next/image";
import { clientsData, homeservice, homesoftware, itServices, industries } from "../commonComponents/mockData";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getCategoryList, getserviceList } from "@/app/services/APIClient";
import { STATUS_CODES } from "@/app/utils/statusCode";
import { useTranslations } from 'next-intl';
import Toster from "@/app/utils/Toaster";
import { useLoader } from "@/app/contexts/LoaderContext";

//---------function for home page ----------
export default function Home() {
    const t = useTranslations();
    const carouselRef = useRef(null); // Ref to access the carousel programmatically
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [bannerList, setBannerList] = useState([]);
    const [serviceList, setServiceList] = useState([]);
    const { setLoading } = useLoader();

    const handleSlideClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    useEffect(() => {
        getCategoryCall();
        getServiceCall();
    }, []);

    const getCategoryCall = async () => {
        try {
            setLoading(true);
            const response = await getCategoryList();
            setLoading(false);
            if (response?.code === STATUS_CODES.SUCCESS) {
                setBannerList(response?.data?.bannerData);
            }
        } catch (error) {
            setLoading(false);
            Toster(t("Error In Banner List"), "error");
        }
    };

    const getServiceCall = async () => {
        try {
            setLoading(true);
            const response = await getserviceList();
            setLoading(false);
            if (response?.code === STATUS_CODES.SUCCESS) {
                setServiceList(response?.data?.serviceData);
            }
        } catch (error) {
            setLoading(false);
            Toster(t("Error In Service List"), "error");
        }
    };

    // Function to handle the next slide
    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slickNext(); // Move to the next slide
        }
    };

    // Function to handle the previous slide
    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slickPrev(); // Move to the previous slide
        }
    };

    // Slider settings
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
    };

    const industrySettings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const sliderSoftware = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        customPaging: (i) => (
            <div className="h-[3px] bg-gray-300 rounded-full"></div>
        ),
        appendDots: dots => (
            <ul className="custom-dots"> {dots} </ul>
        ),
        responsive: [
            {
                breakpoint: 959,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 719,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="z-0" >
            {/* bg slider section */}
            <div className="!w-full">
                {/* <Slider ref={carouselRef} {...sliderSettings} className="w-full">
                    {bannerList?.length > 0 && bannerList?.map((item, index) => (
                        <div className="relative w-full h-[500px] bg-cover bg-center" key={index} >
                            <Image
                                src={item.bannerImage}
                                alt="Background"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="container flex items-center justify-between tablet:p-2 desktop:px-0 smobile:flex-col py-[50px]">
                                <div className="text-white z-10 max-w-full smobile:text-center w-1/2">
                                    <h1 className="leading-[70.65px] mb-5 font-playfair text-[53px] font-bold smobile:text-[31px] smobile:mb-0 mobile:text-[35px] mobile:mb-2 tablet:text-[2.5rem] tablet:leading-[38.65px] mobile:leading-[47.65px] mobile:mt-6 smobile:leading-[43px]">
                                        {item.title}
                                    </h1>
                                    <p className="text-[26px] font-semibold leading-[46px] text-white mb-10 font-jakarta smobile:text-[17px] smobile:leading-[31px] smobile:mb-3 mobile:text-[20px] mobile:mb-2 tablet:text-[1.2rem] ">
                                        {item.shortDescription}
                                    </p>
                                    <div className="flex gap-4 z-0 smobile:justify-center">
                                        <button
                                            className="bg-white text-blue-900 rounded-full w-12 h-12 flex items-center smobile:justify-center"
                                            onClick={handlePrev}
                                        >
                                            <Image src={leftArrow} alt="Previous" />
                                        </button>
                                        <button
                                            className="bg-white text-blue-900 rounded-full w-12 h-12 flex items-center smobile:justify-center"
                                            onClick={handleNext}
                                        >
                                            <Image src={rightArrow} alt="Next" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider> */}
                {bannerList?.length > 0 && (
                    bannerList.length > 1 ? (
                        <Slider ref={carouselRef} {...sliderSettings} className="w-full">
                            {bannerList.map((item, index) => (
                                <div className="relative w-full h-[500px] bg-cover bg-center" key={index}>
                                    <Image
                                        src={item.bannerImage}
                                        alt="Background"
                                        fill
                                        className="object-cover"
                                        style={{ opacity: 0.8 }}
                                        priority
                                    />
                                    <div className="container flex items-center justify-between tablet:p-2 desktop:px-0 smobile:flex-col py-[50px]">
                                        <div className="text-white z-10 max-w-full smobile:text-center w-1/2">
                                            <h1 className="leading-[70.65px] mb-5 font-playfair text-[53px] font-bold smobile:text-[31px] smobile:mb-0 mobile:text-[35px] mobile:mb-2 tablet:text-[2.5rem] tablet:leading-[38.65px] mobile:leading-[47.65px] mobile:mt-6 smobile:leading-[43px]">
                                                {item.title}
                                            </h1>
                                            <p className="text-[26px] font-semibold leading-[46px] text-white mb-10 font-jakarta smobile:text-[17px] smobile:leading-[31px] smobile:mb-3 mobile:text-[20px] mobile:mb-2 tablet:text-[1.2rem]">
                                                {item.shortDescription}
                                            </p>
                                            <div className="flex gap-4 z-0 smobile:justify-center">
                                                <button
                                                    className="bg-white text-blue-900 rounded-full w-12 h-12 flex items-center smobile:justify-center"
                                                    onClick={handlePrev}
                                                >
                                                    <Image src={leftArrow} alt="Previous" />
                                                </button>
                                                <button
                                                    className="bg-white text-blue-900 rounded-full w-12 h-12 flex items-center smobile:justify-center"
                                                    onClick={handleNext}
                                                >
                                                    <Image src={rightArrow} alt="Next" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        bannerList.map((item, index) => (
                            <div className="relative w-full h-[500px] bg-cover bg-center" key={index}>
                                <Image
                                    src={item.bannerImage}
                                    alt="Background"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="container flex items-center justify-between tablet:p-2 desktop:px-0 smobile:flex-col py-[50px]">
                                    <div className="text-white z-10 max-w-full smobile:text-center w-1/2">
                                        <h1 className="leading-[70.65px] mb-5 font-playfair text-[53px] font-bold smobile:text-[31px] smobile:mb-0 mobile:text-[35px] mobile:mb-2 tablet:text-[2.5rem] tablet:leading-[38.65px] mobile:leading-[47.65px] mobile:mt-6 smobile:leading-[43px]">
                                            {item.title}
                                        </h1>
                                        <p className="text-[26px] font-semibold leading-[46px] text-white mb-10 font-jakarta smobile:text-[17px] smobile:leading-[31px] smobile:mb-3 mobile:text-[20px] mobile:mb-2 tablet:text-[1.2rem]">
                                            {item.shortDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                )}

            </div>

            {/* Services Section  */}
            <div className="py-10 container">
                <strong className="text-[18px] font-extrabold leading-[22.68px] text-[#3B5999] pt-2">OUR SERVICE</strong>
                <h1 className="text-[35px] font-bold leading-[46.66px] text-[#202020] font-playfair mt-[19px] mb-[35px] smobile:text-[26px] smobile:mt-[10px] smobile:mb-[17px] ">Variety of IT Services</h1>
                <Slider {...settings}>
                    {serviceList.map((item, index) => (
                        <div key={index}>
                            <div className="w-full max-w-[300px] pr-[15px] pt-0 relative smobile:pr-[20px]">
                                <Image
                                    src={item.serviceImage}
                                    alt="services"
                                    width={1500}
                                    height={1500}
                                    className="w-full max-w-[300px] object-cover rounded-[6px]"
                                />
                                <div className="mt-[10px] text-[15px] font-bold leading-[18.9px] text-white absolute line-clamp-2 mr-[4px] bottom-[30px] left-1/2 transform -translate-x-1/2 text-center tablet:bottom-[10px] tablet:text-[13px] desktop:pl-3 desktop:pr-3 desktop:translate-x-0 desktop:left-0 desktop:text-left mobile:text-[12px] mobile:bottom-[9px] smobile:text-[12px] smobile:bottom-[7px] laptop:bottom-[15px]" >
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Clients Section  */}
            <div className="bg-[#151823] py-6">
                <div className="container">
                    <div className="flex justify-between items-center w-full max-w-[991px] mx-[auto] my-0 mobile:flex-col smobile:flex-col tabview:justify-around">
                        <div className="transform rotate-45">
                            <div className="w-full max-w-[408.99px] h-[427.71px] overflow-hidden rounded-lg mobile:max-w-[300px] mobile:h-[330px] smobile:max-w-[200px] smobile:h-[230px]">
                                <Image src={img} alt="img" className="max-w-[408.99px] h-[427.71px] w-full object-cover transform -rotate-45 tablet:max-w-[300px] tablet:h-[330.71px] mobile:max-w-[300px] mobile:h-[330px] smobile:max-w-[200px] smobile:h-[230px]" />
                            </div>
                        </div>
                        <div className="items-start">
                            <h2 className="mb-[30px] text-[45px] font-bold font-playfair leading-[59.99px] text-white tablet:text-[31px] mobile:text-[31px] smobile:text-[26px] smobile:mb-[10px]">Amazing Clients</h2>
                            <div className="grid grid-cols-3 smobile:grid-cols-2 gap-5 tablet:grid-cols-2">
                                {clientsData.map((item, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-md p-2">
                                        <Image
                                            src={item.image}
                                            alt="client image"
                                            width={1000}
                                            height={1000}
                                            className="w-full max-w-[120px] h-[72px]  smobile:max-w-[90px] smobile:h-[52px]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* industries section */}
            <div className="py-10 border border-solid border-[#E4E4E4] bg-[#EFF4FF]">
                <h2 className="text-center pb-[35px] text-[45px] font-playfair font-bold leading-[59.99px] text-[#202020] tablet:text-[31px] mobile:text-[31px] smobile:text-[26px] smobile:leading-[37px] smobile:pb-[10px]">
                    We Serve All Industries
                </h2>
                <div className="container px-4">
                    <Slider {...industrySettings} beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}>
                        {industries.map((item, index) => (
                            <div key={index} className="pr-[10px] mobile:pr-[2px] smobile:pr-[0px]">
                                <div className="w-full max-w-[450px] relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={1000}
                                        height={1000}
                                        className={`w-[450px] object-cover transition-transform duration-500 p-3 mobile:p-2 ${currentSlide === index ? 'sm:scale-110' : ''
                                            }`}

                                    />
                                    <div className="text-[29px] font-semibold line-clamp-2 leading-[36.54px] mt-[10px] text-white absolute bottom-[30px] left-1/2 transform -translate-x-1/2 text-center rounded tablet:text-[20px] mobile:text-[14px] mobile:leading-[21px] smobile:text-[15px] smobile:leading-[23px]">
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Software Section  */}
            <div className="p-3">
                <div className="container py-7 softwareSlider smobile:py-4">
                    <h1 className="text-[35px] font-playfair font-bold leading-[46.66px] text-[#202020] text-center mb-10 smobile:text-[26px] smobile:mb-3">Readymade Software</h1>
                    <Slider {...sliderSoftware} ref={sliderRef}>
                        {homesoftware.map((item, index) => (
                            <div
                                key={index}
                                className="slick-slide transition-all pr-[15px] duration-300 ease-in-out"
                                onClick={() => handleSlideClick(index)}
                            >
                                <div className="group shadow-box border-[1px] rounded-[7px] border-[solid] mb-5 border-[#E6E6E6] bg-white w-full max-w-[223px] h-[223px] py-[40px] slick-slide-container smallMobile:py-[20px] smallMobile:max-w-[170px] smallMobile:h-[170px]">
                                    <div className="customimg bg-[#3B59990A] rounded-full w-full max-w-[75px] h-[75px] mx-auto my-0 group-slick-image">
                                        <Image
                                            src={item.image}
                                            alt="icon"
                                            width={1000}
                                            height={1000}
                                            className="w-full max-w-[35px] mx-auto my-0 pt-[17px] group-slick-image-element color-white"
                                        />
                                    </div>
                                    <div className="customtext text-[18px] mt-[30px] font-semibold leading-[22.68px] text-center text-[#000] line-clamp-2 group-slick-text smallMobile:text-[14px] smallMobile:mt-[14px]">
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* service section */}
            <div className="py-10 relative w-full h-[200px] bg-cover bg-center bg-[url('/rectangle.webp')]">
                <div className="container">
                    <div className="flex justify-between items-center text-center">
                        {homeservice.map((item, index) => (
                            <div key={index}>
                                <Image
                                    src={item.image}
                                    alt="icon"
                                    width={1000}
                                    height={1000}
                                    className="w-full max-w-[40px] h-[40px] mx-[auto] my-0"
                                />
                                <strong className="text-[30px] font-extrabold leading-[43.35px] text-[#F3F3F3] font-jost smobile:text-[20px] mobile:text-[23px]">{item.count}</strong>
                                <p className="text-[12px] font-semibold leading-[15.12px] text-white smobile:text-[9px] mobile:text-[10px]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


