import Image from "next/image";
import Link from "next/link";
import Login from "./components/modal/Login";
import Footer from "./components/Footer";
import GoogleButton from "./components/button/Google";
import AppleButton from "./components/button/Apple";
import TextWithLine from "./components/TextWithLine";
import PrimaryButton from "./components/button/Primary";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/6 flex md:justify-center items-center md:h-screen px-4 py-6">
            <Image
              src="/x2.png"
              width={234}
              height={234}
              alt="X2"
              priority
              className="my-auto md:w-auto md:h-auto sm:w-[45px] sm:h-[45px] w-[45px] h-[45px]"
            />
          </div>

          <div className="w-full md:w-4/6 px-4 mb-4">
            <div className="flex flex-col gap-2 md:py-24 py-16">
              <h1 className="text-6xl font-black mb-12">
                Sedang tren saat ini
              </h1>
              <h3 className="text-3xl font-extrabold mb-8">
                Bergabunglah sekarang.
              </h3>
              <GoogleButton text="Daftar dengan Google" />
              <AppleButton text="Daftar dengan Apple" />
              <TextWithLine text="atau" />
              <PrimaryButton text="Buat akun" />
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
