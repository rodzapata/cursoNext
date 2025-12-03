import Navbar from "./navbar";
export const metadata = {
  title: "Mi App",
  description: "Descripción",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
