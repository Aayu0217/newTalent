"use client"

import map from '../../../../../public/images/map.svg';
import mobile from '../../../../../public/images/mobile.svg';
import email from '../../../../../public/images/email.svg';
import website from '../../../../../public/images/website.svg';
import Image from "next/image";
import GoogleMapAdd from '../../components/commonComponents/GoogleMap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../../../utils/Validation';

//-----------function for contact us page--------------
export default function ContactUs() {
    // Initialize useForm with the yupResolver and validation schema
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        mode:"onChange",
        resolver: yupResolver(validationSchema),
    });

    // Handle form submission
    const onSubmit = (data) => {
        // console.log('Form Submitted', data);
    };


    // Function to prevent space as the first character
    const handleInput = (e) => {
        const value = e.target.value;

        // Prevent space as the first character
        if (value.startsWith(" ")) {
            setValue(e.target.name, value.trim()); // Trim the space
        }
    };


    return (
        <section>
            <div className="relative w-full h-[280px] bg-cover bg-center bg-[url('/contactImg.webp')]">
                <div className="container w-full text-center absolute bottom-[64px] left-[0] right-[0] mx-[auto] my-[0]">
                    <h1 className="text-[45px] font-bold leading-[59.99px] text-white font-playfair">Contact Us</h1>
                    <p className="text-[12px] font-bold leading-[15.12px] text-lightwhite mt-[15px]">Home / Contact Us</p>
                </div>
            </div>
            <div className="py-[50px]">
                <div className="container">
                    <p className="text-[15px] font-extrabold leading-[18.9px] text-darkblue text-center">CONTACT US</p>
                    <h1 className="text-[35px] font-semibold leading-[46.66px] text-center text-blackshade font-playfair mt-[10px] smobile:text-[26px]">Stay Connected</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[38px] smobile:mt-[10px]">
                        <div>
                            <p className="text-[15px] font-normal leading-[25px] text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <div className="flex items-center mt-[22px]">
                                <Image
                                    src={map}
                                    alt="location"
                                    width={1000}
                                    height={1000}
                                    className="bg-[#3B599933] rounded-full w-[40px] h-[40px] p-2"
                                />
                                <div className="ml-[20px]">
                                    <h6 className="text-[20px] font-bold leading-[25.2px] text-black">ADDRESS</h6>
                                    <p className="text-[13px] font-medium leading-[16.38px] text-gray mt-[8px]">LIG - 2/21/422 Nehru Nagar Rewa M.P. India pincode - 486001</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-[30px]">
                                <Image
                                    src={mobile}
                                    alt="mobile"
                                    width={1000}
                                    height={1000}
                                    className="bg-[#3B599933] rounded-full w-[40px] h-[40px] p-2"
                                />
                                <div className="ml-[20px]">
                                    <h6 className="text-[20px] font-bold leading-[25.2px] text-black">Phone</h6>
                                    <p className="text-[13px] font-medium leading-[16.38px] text-gray mt-[8px]">+91-7662462289 | +91-9174253016</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-[30px]">
                                <Image
                                    src={email}
                                    alt="email"
                                    width={1000}
                                    height={1000}
                                    className="bg-[#3B599933] rounded-full w-[40px] h-[40px] p-2"
                                />
                                <div className="ml-[20px]">
                                    <h6 className="text-[20px] font-bold leading-[25.2px] text-black">E-MAIL</h6>
                                    <p className="text-[13px] font-medium leading-[16.38px] text-gray mt-[8px]">info@newtalentinfotech.com | hr@newtalentinfotech.com</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-[30px]">
                                <Image
                                    src={website}
                                    alt="website"
                                    width={1000}
                                    height={1000}
                                    className="bg-[#3B599933] rounded-full w-[40px] h-[40px] p-2"
                                />
                                <div className="ml-[20px]">
                                    <h6 className="text-[20px] font-bold leading-[25.2px] text-black">Web</h6>
                                    <p className="text-[13px] font-medium leading-[16.38px] text-gray mt-[8px]">www.newtalentinfotech.com</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 mobile:grid-cols-2 saddMobile:grid-cols-2 gap-x-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            {...register('name')}
                                            className={`border border-grayshade p-3 w-full rounded-[4px] bg-[#F9F9F9] focus:outline-none placeholder:text-gray placeholder:text-[13px] placeholder:font-medium ${errors.name ? 'border-red' : ''
                                                }`}
                                            onChange={handleInput}
                                        />
                                        {errors.name && <p className="text-red text-[12px] mt-1">{errors.name.message}</p>}
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            {...register('email')}
                                            className={`border-[1px] border-[solid] w-full border-grayshade mt-[25px] p-3 rounded-[4px] bg-[#F9F9F9] focus:outline-none placeholder:text-gray placeholder:text-[13px] placeholder:font-medium ${errors.email ? 'border-red' : ''
                                                } sm:mt-0 mobile:mt-0 saddMobile:mt-0`}
                                        />
                                        {errors.email && <p className="text-red text-[12px] mt-1">{errors.email.message}</p>}
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your phone"
                                            {...register('phone')}
                                            className={`border-[1px] border-[solid] w-full border-grayshade mt-[25px] p-3 rounded-[4px] bg-[#F9F9F9] focus:outline-none placeholder:text-gray placeholder:text-[13px] placeholder:font-medium ${errors.phone ? 'border-red' : ''
                                                }`}
                                        />
                                        {errors.phone && <p className="text-red text-[12px] mt-1">{errors.phone.message}</p>}
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            {...register('subject')}
                                            className={`border-[1px] border-[solid] w-full border-grayshade mt-[25px] p-3 rounded-[4px] bg-[#F9F9F9] focus:outline-none placeholder:text-gray placeholder:text-[13px] placeholder:font-medium ${errors.subject ? 'border-red' : ''
                                                }`}
                                            onChange={handleInput}
                                        />
                                        {errors.subject && <p className="text-red text-[12px] mt-1">{errors.subject.message}</p>}
                                    </div>
                                </div>

                                <textarea
                                    rows="5"
                                    placeholder="Write your comment here..."
                                    {...register('comment')}
                                    className={`border-[1px] border-[solid] border-grayshade mt-[25px] w-full p-3 rounded-[4px] bg-[#F9F9F9] focus:outline-none placeholder:text-gray placeholder:text-[13px] placeholder:font-medium ${errors.comment ? 'border-red' : ''
                                        }`}
                                    onChange={handleInput}
                                />
                                {errors.comment && <p className="text-red text-[12px]">{errors.comment.message}</p>}

                                <button
                                    type="submit"
                                    className="bg-darkblue text-[16px] mt-[30px] w-full max-w-[200px] h-[50px] font-bold leading-[20.16px] text-white p-3 rounded-[4px]"
                                >
                                    SUBMIT NOW
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-[50px]">
                        <GoogleMapAdd />
                    </div>
                </div>
            </div>
        </section >
    );
}