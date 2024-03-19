import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const footers = [
    "Tentang",
    "Unduh aplikasi X2",
    "Pusat Bantuan",
    "Persyaratan Layanan",
    "Kebijakan Privasi",
    "Kebijakan Penggunaan Kuki",
    "Aksesbilitas",
    "Informasi Iklan",
    "Blog",
    "Status",
    "Karir",
    "Sumber Daya Merek",
    "Periklanan",
    "Pemasaran",
    "X2 untuk Bisnis",
    "Pengembang",
    "Direktori",
    "Pengaturan",
    "@ " + date.getFullYear() + " X2 Corp.",
  ];

  return (
    <ul className="mb-4 flex flex-wrap justify-center space-x-4 px-2">
      {footers &&
        footers.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href="/"
                className="text-[12px] text-gray-800 hover:underline"
              >
                {item}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
