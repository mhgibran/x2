"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SecondaryButton from "../button/Secondary";
import GoogleButton from "../button/Google";
import AppleButton from "../button/Apple";
import TextWithLine from "../TextWithLine";
import PrimaryButton from "../button/Primary";
import CloseModal from "../button/CloseModal";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Modal Trigger Button */}
      <SecondaryButton
        text="Masuk"
        htmlAttributes={{
          onClick: openModal,
          className: "w-[300px] text-sm py-2",
        }}
      />

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="bg-white rounded-none sm:rounded-2xl shadow-lg fixed transform transition-all duration-300 w-full sm:w-[600px] sm:h-[580px] h-screen">
            {/* Modal Header */}
            <div className="flex items-start justify-between h-14 p-2">
              <CloseModal closeModal={closeModal} />
              <Image
                src="/x2.png"
                width={30}
                height={30}
                alt="X2"
                priority
                className="mx-auto"
              />
            </div>
            {/* Modal Body */}
            <div className="flex flex-col gap-2 pt-8 px-36 h-full max-h-[424] overflow-x-hidden overflow-y-auto">
              <h5 className="text-3xl font-extrabold mb-4">Masuk ke X2</h5>
              <GoogleButton
                text="Login dengan Google"
                htmlAttributes={{ className: "w-full text-sm py-2" }}
              />
              <AppleButton
                text="Login dengan Apple"
                htmlAttributes={{ className: "w-full text-sm py-2" }}
              />
              <TextWithLine text="atau" />

              {/* Floating input credential */}
              <div className="flex items-center mb-8">
                <div className="relative w-full overflow-x-hidden">
                  <input
                    id="inputCredential"
                    type="text"
                    placeholder=" "
                    autoComplete="off"
                    className="floating-label-input w-full h-[58px] block px-2 pt-4 text-sm bg-transparent border rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-gray-200 text-black"
                  />
                  <label
                    htmlFor="inputCredential"
                    className="absolute duration-300 truncate text-md left-2 top-4 -z-1 origin-0 text-gray-500 font-extralight"
                  >
                    Nomor telepon, email, atau nama pengguna
                  </label>
                </div>
              </div>

              <PrimaryButton
                text="Berikutnya"
                htmlAttributes={{ className: "w-full text-sm py-2 mb-4" }}
              />
              <SecondaryButton
                text="Lupa kata sandi?"
                htmlAttributes={{ className: "w-full text-sm py-2" }}
              />
              <p className="my-12 text-sm">
                Belum punya akun?{" "}
                <Link href="/" className="text-blue-600">
                  Daftar
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
