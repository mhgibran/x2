import Image from "next/image";
import Link from "next/link";
import Login from "./components/modal/Login";
import Footer from "./components/Footer";
import GoogleButton from "./components/button/Google";
import AppleButton from "./components/button/Apple";
import TextWithLine from "./components/TextWithLine";
import Signup from "./components/modal/Signup";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Logo */}
          <div className="flex w-full items-center px-8 py-6 md:h-screen md:w-2/6 md:justify-center md:px-4">
            <Image
              src="/x2.png"
              width={234}
              height={234}
              alt="X2"
              priority
              className="my-auto h-[45px] w-[45px] sm:h-[45px] sm:w-[45px] md:h-auto md:w-auto"
            />
          </div>
          {/* Content */}
          <div className="mb-4 w-full px-8 md:w-4/6 md:px-4">
            <div className="flex flex-col gap-2 py-16 md:py-24">
              <h1 className="mb-12 text-6xl font-black">
                Sedang tren saat ini
              </h1>
              <h3 className="mb-8 text-3xl font-extrabold">
                Bergabunglah sekarang.
              </h3>
              <GoogleButton
                text="Daftar dengan Google"
                htmlAttributes={{ className: "w-[300px] text-sm py-2" }}
              />
              <AppleButton
                text="Daftar dengan Apple"
                htmlAttributes={{ className: "w-[300px] text-sm py-2" }}
              />
              <TextWithLine text="atau" />
              <Signup />
              <p className="w-[300px] text-[10px] font-extralight">
                Dengan mendaftar, Anda menyetujui{" "}
                <Link className="text-[#0a88f0]" href="/">
                  Persyaratan Layanan
                </Link>{" "}
                dan{" "}
                <Link href="/" className="text-[#0a88f0]">
                  Kebijakan Privasi
                </Link>
                , termasuk{" "}
                <Link href="/" className="text-[#0a88f0]">
                  Penggunaan Kuki
                </Link>
                .
              </p>
              <h5 className="mt-12 text-base font-semibold">
                Sudah punya akun?
              </h5>
              <Login />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
