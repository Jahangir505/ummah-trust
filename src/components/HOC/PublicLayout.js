
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Header from "../Header";
import Footer from "../Footer";

export default function PublicLayout({ pageTitle, children }) {
  return (
    <div>
      <Head>
        <title>{pageTitle} | Ummah Trust Review Service</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
