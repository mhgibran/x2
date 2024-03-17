import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: {
    template: "X2 | %s",
    default: "X2 | Yang sedang hangat dibicarakan",
  },
  description:
    "Dari berita terkini dan hiburan hingga olahraga dan politik, baca kisah lengkapnya dengan komentar langsung.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
