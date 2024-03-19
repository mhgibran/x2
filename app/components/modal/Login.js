"use client";
import Image from "next/image";
import { useState } from "react";
import SecondaryButton from "../button/Secondary";
import GoogleButton from "../button/Google";
import AppleButton from "../button/Apple";
import TextWithLine from "../TextWithLine";
import PrimaryButton from "../button/Primary";
import CloseModal from "../button/CloseModal";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [credential, setCredential] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openSignupModal = () => {
    setIsOpen(false);
    document.getElementById("btn-signup").click();
  };

  const handleCredentialChange = (e) => {
    setCredential(e.target.value);
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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-50"></div>

          <div className="fixed h-screen w-full transform rounded-none bg-white shadow-lg transition-all duration-300 sm:h-[580px] sm:w-[600px] sm:rounded-2xl">
            {/* Modal Header */}
            <div className="flex h-14 items-start justify-between p-2">
              <CloseModal closeModal={closeModal} />
              <Image
                src="/x2.png"
                width={30}
                height={30}
                alt="X2"
                priority
                className="mx-auto"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            {/* Modal Body */}
            <div className="flex h-full max-h-[424] flex-col gap-2 overflow-y-auto overflow-x-hidden px-36 pt-8">
              <h5 className="mb-4 text-3xl font-extrabold">Masuk ke X2</h5>
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
              <div className="mb-8 flex items-center">
                <div className="relative w-full overflow-x-hidden">
                  <input
                    id="inputCredential"
                    type="text"
                    placeholder=" "
                    autoComplete="off"
                    className="floating-label-input block h-[58px] w-full appearance-none rounded-md border border-gray-200 bg-transparent px-2 pt-4 text-sm text-black focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
                    onChange={handleCredentialChange}
                    value={credential}
                  />
                  <label
                    htmlFor="inputCredential"
                    className="text-md -z-1 origin-0 absolute left-2 top-4 truncate font-extralight text-gray-500 duration-300"
                  >
                    Nomor telepon, email, atau nama pengguna
                  </label>
                </div>
              </div>

              <PrimaryButton
                text="Berikutnya"
                htmlAttributes={{
                  className: "w-full text-sm py-2 mb-4",
                  disabled: credential !== "" ? false : true,
                }}
              />
              <SecondaryButton
                text="Lupa kata sandi?"
                htmlAttributes={{ className: "w-full text-sm py-2" }}
              />
              <p className="my-12 text-sm">
                Belum punya akun?{" "}
                <span
                  className="cursor-pointer text-blue-600"
                  onClick={openSignupModal}
                >
                  Daftar
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
