import Navbar from "./components/Navbar";
import { Roboto } from "next/font/google"
import "./globals.css";

export const metadata = {
  title: "Mi App",
  description: "Descripción",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subset: ["latin"]
}

)

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
