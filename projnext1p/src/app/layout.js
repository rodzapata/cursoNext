export const metadata = {
  title: "Mi App",
  description: "Descripción",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
