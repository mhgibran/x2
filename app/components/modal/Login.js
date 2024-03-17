"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import SecondaryButton from "../button/Secondary";
import GoogleButton from "../button/Google";
import AppleButton from "../button/Apple";
import TextWithLine from "../TextWithLine";
import PrimaryButton from "../button/Primary";

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
      <SecondaryButton text="Masuk" handleClick={openModal} />

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-50"></div>

          {/* Modal Content */}
          <div className="bg-white py-8 px-10 rounded-none sm:rounded-2xl shadow-lg fixed transform transition-all duration-300 w-full sm:w-[600px] sm:h-4/5 h-screen">
            <div className="absolute left-4 top-4">
              <button
                type="button"
                className="bg-transparent text-black text-3xl"
                onClick={closeModal}
              >
                <HiMiniXMark />
              </button>
            </div>
            <div className="flex flex-col items-center gap-2 h-full overflow-x-auto">
              <Image
                src="/x2.png"
                width={38}
                height={38}
                alt="X2"
                priority
                className="mx-auto mb-8"
              />
              <h5 className="text-3xl font-extrabold mb-4">Masuk ke X2</h5>
              <GoogleButton text="Login dengan Google" />
              <AppleButton text="Login dengan Apple" />
              <TextWithLine text="atau" />
              <div className="flex items-center">
                <div className="relative w-[300px] mb-8 overflow-x-hidden">
                  <input
                    type="text"
                    name="credential"
                    placeholder=" "
                    autoComplete="off"
                    className="floating-label-input w-full h-[58px] block px-2 pt-4 text-sm bg-transparent border rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-gray-200 text-black"
                  />
                  <label
                    for="credential"
                    className="absolute duration-300 truncate text-md left-2 top-4 -z-1 origin-0 text-gray-500 font-extralight"
                  >
                    Nomor telepon, email, atau nama pengguna
                  </label>
                </div>
              </div>
              <PrimaryButton text="Berikutnya" />
              <SecondaryButton text="Lupa kata sandi?" />
              <div className="w-[300px]">
                <p className="mt-12 text-sm mb-8">
                  Belum punya akun?{" "}
                  <Link href="/" className="text-blue-600">
                    Daftar
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
