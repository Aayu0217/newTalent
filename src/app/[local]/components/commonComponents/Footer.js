'use client'

import { footerLinks } from "@/app/[local]/components/commonComponents/mockData";
import Link from "next/link";
import arrow from '../../../../../public/images/arrow.svg';
import Image from "next/image";
import { useTranslations } from "next-intl";


//--------function for footer---------------
export default function Footer() {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const yearRange = `${currentYear}-${nextYear}`;
    const t = useTranslations();
    const FooterData = footerLinks(t);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll animation
        });
    };

    return (
        <footer className="w-full px-[0] py-[10px] text-center">
            <div className="bg-[#151823] pt-5 pb-[30px]">
                <div className="container mx-auto smobile:px-[20px] smobile:py-0">
                    <div className="text-[white] text-center w-full max-w-[767px] mx-[auto] my-0">
                        <h1 className="text-[35px] mb-3 font-extrabold leading-[50px] text-center text-white smobile:text-[29px]">{t("FooterTitle")}</h1>
                        <p className="text-[17px] font-medium leading-[31px] text-center text-white mb-0">{t("FooterPara")}</p>
                    </div>
                </div>
            </div>
            <div className="mt-[-28px] flex justify-end w-full container mx-auto smobile:pr-[20px] mobile:pr-[20px] tablet:pr-[20px] laptop:pr-[20px]"
                onClick={scrollToTop}>
                <Image src={arrow} alt="arrow-image" className="cursor-pointer" />
            </div>
            <div className="text-[black] text-center ">
                <p className="mb-1 text-[16px] font-semibold leading-[20.16px] text-black smobile:px-[20px] smobile:py-0 smobile:leading-[24px]">© {yearRange} {t("Footerparas")}</p>
                <nav className="flex justify-center text-[14px] font-medium leading-[17.64px] text-lightBlack mx-[10px] my-0">
                    {FooterData.map((item, index) => (
                        <div key={index} className="mt-2 mb-2">
                            <Link href={item.link} className="smobile:text-[12px]">
                                {(item.label)} {item.extraText || ""}
                            </Link>

                            {index === 0 || index === 1 ? (
                                <span className="border-l border-gray-600 h-[11px] mx-[5px]"></span>
                            ) : null}
                        </div>
                    ))}
                </nav>
            </div>
        </footer >)
}
