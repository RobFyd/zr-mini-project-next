import { Layout } from "./components/Layout/Layout";
import globals from "./globals.css";

export const metadata = {
  title: "TOPSHOP",
  description: "The best shop for trendy clothes in Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
