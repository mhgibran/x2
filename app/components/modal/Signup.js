"use client";
import Image from "next/image";
import { useState } from "react";
import PrimaryButton from "../button/Primary";
import CloseModal from "../button/CloseModal";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [month, setMonth] = useState({ id: null, name: null, days: 31 });
  const [day, setDay] = useState(null);
  const [year, setYear] = useState(null);
  const months = [
    {
      id: 1,
      name: "Januari",
      days: 31,
    },
    {
      id: 2,
      name: "Februari",
      days: 29,
    },
    {
      id: 3,
      name: "Maret",
      days: 31,
    },
    {
      id: 4,
      name: "April",
      days: 30,
    },
    {
      id: 5,
      name: "Mei",
      days: 31,
    },
    {
      id: 6,
      name: "Juni",
      days: 30,
    },
    {
      id: 7,
      name: "Juli",
      days: 31,
    },
    {
      id: 8,
      name: "Agustus",
      days: 31,
    },
    {
      id: 9,
      name: "September",
      days: 30,
    },
    {
      id: 10,
      name: "Oktober",
      days: 31,
    },
    {
      id: 11,
      name: "November",
      days: 30,
    },
    {
      id: 12,
      name: "Desember",
      days: 31,
    },
  ];

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSelectMonth = (e) => {
    let monthId = e.target.value;
    const result = months.find(({ id }) => id === parseInt(monthId));
    if (result) {
      setMonth(result);
    }
  };

  const handleSelectDay = (e) => {
    setDay(e.target.value);
  };

  const handleSelectYear = (e) => {
    setDay(e.target.value);
  };

  const dayOptions = [];
  for (let i = 1; i <= month.days; i++) {
    dayOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 90;
  const yearOptions = [];
  for (let year = currentYear; year >= startYear; year--) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  return (
    <>
      {/* Modal Trigger Button */}
      <PrimaryButton
        htmlAttributes={{
          onClick: openModal,
          className: "w-[300px] text-sm py-2",
        }}
        text="Buat akun"
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
            <div className="flex flex-col gap-2 pt-8 px-20 h-full max-h-[424] overflow-x-hidden overflow-y-auto">
              <h5 className="text-3xl font-extrabold mb-4">Buat akun</h5>

              {/* Floating input name */}
              <div className="flex items-center mb-2">
                <div className="relative w-full overflow-x-hidden">
                  <input
                    id="inputName"
                    type="text"
                    placeholder=" "
                    autoComplete="off"
                    className="floating-label-input w-full h-[58px] block px-2 pt-4 text-sm bg-transparent border rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-gray-200 text-black"
                  />
                  <label
                    htmlFor="inputName"
                    className="absolute duration-300 truncate text-md left-2 top-4 -z-1 origin-0 text-gray-500 font-extralight"
                  >
                    Nama
                  </label>
                </div>
              </div>

              {/* Floating input email */}
              <div className="flex items-center mb-2">
                <div className="relative w-full overflow-x-hidden">
                  <input
                    id="inputEmail"
                    type="email"
                    placeholder=" "
                    autoComplete="off"
                    className="floating-label-input w-full h-[58px] block px-2 pt-4 text-sm bg-transparent border rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-gray-200 text-black"
                  />
                  <label
                    htmlFor="inputEmail"
                    className="absolute duration-300 truncate text-md left-2 top-4 -z-1 origin-0 text-gray-500 font-extralight"
                  >
                    Email
                  </label>
                </div>
              </div>

              {/* Floating input birthdate */}
              <h6 className="text-sm">Tanggal lahir</h6>
              <p className="text-[12px] font-light">
                Ini tidak akan ditampilkan secara publik. Konfirmasikan usia
                Anda sendiri, bahkan jika akun ini digunakan untuk bisnis, hewan
                peliharaan, atau tujuan lainnya.
              </p>

              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="relative grow mb-4">
                  <select
                    value={month.id}
                    onChange={handleSelectMonth}
                    className="floating-label-input w-full h-[58px] block px-2 pt-4 text-sm bg-transparent border rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-gray-200 text-black"
                  >
                    <option value={null} selected disabled></option>
                    {months &&
                      months.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                  </select>
                  <label
                    htmlFor="credential"
                    className="absolute duration-300 truncate text-md left-2 top-4 -z-1 origin-0 text-gray-500 font-extralight"
                  >
                    Bulan
                  </label>
                </div>
                <div className="relative flex-1 mb-4">
                  <select
                    value={day}
                    onChange={handleSelectDay}
                    className="floating-label-input w-full h-[58px] block px-2 pt-4 text-sm bg-transparent border rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-gray-200 text-black"
                  >
                    <option value={null} selected disabled></option>
                    {dayOptions}
                  </select>
                  <label
                    htmlFor="credential"
                    className="absolute duration-300 truncate text-md left-2 top-4 -z-1 origin-0 text-gray-500 font-extralight"
                  >
                    Hari
                  </label>
                </div>
                <div className="relative flex-1 mb-4">
                  <select
                    value={year}
                    onChange={handleSelectYear}
                    className="floating-label-input w-full h-[58px] block px-2 pt-4 text-sm bg-transparent border rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 focus:border-2 border-gray-200 text-black"
                  >
                    <option value={null} selected disabled></option>
                    {yearOptions}
                  </select>
                  <label
                    htmlFor="credential"
                    className="absolute duration-300 truncate text-md left-2 top-4 -z-1 origin-0 text-gray-500 font-extralight"
                  >
                    Tahun
                  </label>
                </div>
              </div>
            </div>
            {/* Modal Footer */}
            <div className="fixed bottom-0 w-full h-[100px] px-20 flex justify-center items-center border-t py-2 border-gray-300">
              <PrimaryButton
                htmlAttributes={{
                  disabled: true,
                  className: "w-full h-14 py-3",
                }}
                text="Berikutnya"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
