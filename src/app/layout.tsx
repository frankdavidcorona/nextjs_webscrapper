import "./globals.css";

export const metadata = {
  title: "Sports News",
  description: "Get latest sports news",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
