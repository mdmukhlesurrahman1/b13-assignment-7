import { Geist } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata = {
  title: "Keen Keeper",
  description: "Friends Information",
};

const geist = Geist({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={geist.className}
    >
      <body className="bg-[#F8FAFC] max-w-400 mx-auto">
        <Header></Header>
          {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
