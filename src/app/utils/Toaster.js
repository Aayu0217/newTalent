//------Toaster------
import { toast } from "react-toastify";
export default function Toster(text, status) {
    if (status === "success") {
        return toast.success(text, {
            autoClose: 4000,
            toastId: text,
            pauseOnFocusLoss: false,
            pauseOnHover: false,
        });
    } else if (status === "error") {
        return toast.error(text, {
            autoClose: 4000,
            toastId: text,
            pauseOnFocusLoss: false,
            pauseOnHover: false,
        });
    } else if (status === "info") {
        return toast.info(text, {
            autoClose: 4000,
            toastId: text,
            pauseOnFocusLoss: false,
            pauseOnHover: false,
        });
    }
    return null;
}
