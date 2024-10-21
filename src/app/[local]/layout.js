import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from "./components/commonComponents/Header";
import Footer from "./components/commonComponents/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoaderProvider } from "../contexts/LoaderContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "700"], // You can specify multiple weights if needed
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const metadata = {
  title: "New talent infotech",
  description: "New talent infotech Pvt. Ltd. has extensive experience in delivering top notch corporate and industrial trainings. Having a team of expert trainers, we provide both Technical and Non technical trainings across domains.",
};

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  const messages = await getMessages();

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body
        className="overflow-x-hidden"
      >
        
        <NextIntlClientProvider messages={messages}>
          <LoaderProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow w-screen pt-[88px] pb-2 mx-auto">
              {children}
            </main>
            <ToastContainer />
            <Footer />
          </div>
          </LoaderProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
