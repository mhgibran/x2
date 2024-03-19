"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import PrimaryButton from "../button/Primary";
import CloseModal from "../button/CloseModal";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [month, setMonth] = useState({ id: "", name: "", days: 31 });
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [invalidForm, setInvalidForm] = useState(true);
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

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
    setYear(e.target.value);
  };

  useEffect(() => {
    if (
      name !== "" &&
      email !== "" &&
      month.id !== "" &&
      day !== "" &&
      year !== ""
    ) {
      setInvalidForm(false);
    } else {
      setInvalidForm(true);
    }
  }, [name, email, month, day, year]);

  const dayOptions = [];
  for (let i = 1; i <= month.days; i++) {
    dayOptions.push(
      <option key={i} value={i}>
        {i}
      </option>,
    );
  }

  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 90;
  const yearOptions = [];
  for (let year = currentYear; year >= startYear; year--) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>,
    );
  }

  return (
    <>
      {/* Modal Trigger Button */}
      <PrimaryButton
        htmlAttributes={{
          onClick: openModal,
          id: "btn-signup",
          className: "w-[300px] text-sm py-2",
        }}
        text="Buat akun"
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
            <div className="flex h-full max-h-[424] flex-col gap-2 overflow-y-auto overflow-x-hidden px-20 pt-8">
              <h5 className="mb-4 text-3xl font-extrabold">Buat akun</h5>

              {/* Floating input name */}
              <div className="mb-2 flex items-center">
                <div className="relative w-full overflow-x-hidden">
                  <input
                    id="inputName"
                    type="text"
                    placeholder=" "
                    autoComplete="off"
                    className="floating-label-input block h-[58px] w-full appearance-none rounded-md border border-gray-200 bg-transparent px-2 pt-4 text-sm text-black focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
                    onChange={handleNameChange}
                    value={name}
                  />
                  <label
                    htmlFor="inputName"
                    className="text-md -z-1 origin-0 absolute left-2 top-4 truncate font-extralight text-gray-500 duration-300"
                  >
                    Nama
                  </label>
                </div>
              </div>

              {/* Floating input email */}
              <div className="mb-2 flex items-center">
                <div className="relative w-full overflow-x-hidden">
                  <input
                    id="inputEmail"
                    type="email"
                    placeholder=" "
                    autoComplete="off"
                    className="floating-label-input block h-[58px] w-full appearance-none rounded-md border border-gray-200 bg-transparent px-2 pt-4 text-sm text-black focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
                    onChange={handleEmailChange}
                    value={email}
                  />
                  <label
                    htmlFor="inputEmail"
                    className="text-md -z-1 origin-0 absolute left-2 top-4 truncate font-extralight text-gray-500 duration-300"
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

              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="relative mb-4 grow">
                  <select
                    value={month.id}
                    onChange={handleSelectMonth}
                    className="floating-label-input block h-[58px] w-full appearance-none rounded-md border border-gray-200 bg-transparent px-2 pt-4 text-sm text-black focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
                  >
                    <option value="" disabled></option>
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
                    className="text-md -z-1 origin-0 absolute left-2 top-4 truncate font-extralight text-gray-500 duration-300"
                  >
                    Bulan
                  </label>
                </div>
                <div className="relative mb-4 flex-1">
                  <select
                    value={day}
                    onChange={handleSelectDay}
                    className="floating-label-input block h-[58px] w-full appearance-none rounded-md border border-gray-200 bg-transparent px-2 pt-4 text-sm text-black focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
                  >
                    <option value="" disabled></option>
                    {dayOptions}
                  </select>
                  <label
                    htmlFor="credential"
                    className="text-md -z-1 origin-0 absolute left-2 top-4 truncate font-extralight text-gray-500 duration-300"
                  >
                    Hari
                  </label>
                </div>
                <div className="relative mb-4 flex-1">
                  <select
                    value={year}
                    onChange={handleSelectYear}
                    className="floating-label-input block h-[58px] w-full appearance-none rounded-md border border-gray-200 bg-transparent px-2 pt-4 text-sm text-black focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-0"
                  >
                    <option value="" disabled></option>
                    {yearOptions}
                  </select>
                  <label
                    htmlFor="credential"
                    className="text-md -z-1 origin-0 absolute left-2 top-4 truncate font-extralight text-gray-500 duration-300"
                  >
                    Tahun
                  </label>
                </div>
              </div>
            </div>
            {/* Modal Footer */}
            <div className="fixed bottom-0 flex h-[100px] w-full items-center justify-center border-t border-gray-300 px-20 py-2">
              <PrimaryButton
                htmlAttributes={{
                  disabled: invalidForm,
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
