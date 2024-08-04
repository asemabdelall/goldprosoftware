import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GOLD PRO SOFTWARE",
  description: "خدماتنا و منتجاتنا",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"></link>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
