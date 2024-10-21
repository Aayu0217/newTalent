import React from "react";
import { useLoader } from "../contexts/LoaderContext";
import loader from "../../../public/images/loader.gif";


const Loader = () => {
    const { loading } = useLoader();

    if (!loading) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#00000090] z-50">
            <div className="border-8 w-[50px] h-[50px] border-dashed border-[darkblue] rounded-full animate-spin"></div>
            {/* <img src={loader} alt="loader" /> */}
        </div>
    );
};

export default Loader;