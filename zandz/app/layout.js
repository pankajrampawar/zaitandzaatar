import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footeer";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Zait & Za'atar",
  description: "Craving Mediterranean and limited Indian Food in St Paul Ave, Mn? Enjoy exceptional service, with convenient pickup and delivery options near you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GOOGLE TAG MANAGER HEAD CODE*/}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NQTK8DC3');
          `
          }}
        >
        </script>
        {/* GOOGLE ANALYTICS SCRIPT CODE 1*/}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E7T0LBR578"
        >
        </script>

        {/* GOOGLE ANALYTICS SCRIPT CODE 2*/}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || []; 
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date()); 
              gtag('config', 'G-E7T0LBR578'); 
            `,
          }}
        />
      </head>
      <body className="bg-background relative">

        {/* GOOGLE TAG MANAGER HEAD CODE*/}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQTK8DC3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Background layer */}
        <div
          className="absolute inset-0 w-full z-0"
          style={{
            backgroundImage: "url('bg-pattern-2.png')",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "center",
            opacity: 0.04,
          }}
        />

        {/* Content */}
        <SessionProvider>
          <div className="fixed w-screen top-0 z-40">
            <Navbar />
          </div>

          {/* Children */}
          <div className="flex justify-center w-full relative">
            {children}
          </div>
        </SessionProvider>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
