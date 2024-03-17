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
    <ul className="flex flex-wrap justify-center space-x-4 mb-4">
      {footers &&
        footers.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href="/"
                className="text-gray-800 text-[12px] hover:underline"
              >
                {item}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
