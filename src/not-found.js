import React from 'react';
import img from '../../public/images/notfound.webp';
import Image from "next/image";
import Link from 'next/link';

//-----------function for page not found page-----------
const NotFoundPage = () => {


    return (
        <div className="container mt-[100px]">
            <div className="mt-[100px]">
                <Image src={img} alt="img" width={1000}
                    height={900} className="mx-auto w-full h-[280px] max-w-[400px] smobile:max-w-[300px]" />
            </div>
            <div className="text-center">
                <h1 className="text-6xl font-bold text-black">404</h1>
                <p className="mt-4 text-lg text-black">Oops! The page you’re looking for doesn’t exist.</p>
                <p className="mt-2 text-sm text-black">It might have been removed, or the URL may be incorrect.</p>

                <div className="mt-6">
                    <Link
                        href="/"
                        className="inline-block px-4 py-2 text-white bg-darkblue rounded-md hover:bg-darkblue transition duration-300 font-semibold"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default NotFoundPage;
