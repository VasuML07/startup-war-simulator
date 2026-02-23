import "./globals.css";

export const metadata = {
  title: "Startup War Simulator",
  description: "Turn-based startup strategy simulation"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}