import type React from "react"
import "./globals.css"
import { League_Spartan, Quicksand } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import MegaNavigation from "@/components/mega-navigation"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import ScrollToTop from "@/components/scroll-to-top"
import Script from "next/script";
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
})

export const metadata = {
  title: "House of Esthete | Timeless Luxury Home Decor",
  description:
    "House of Esthete is where Form finds Soul. Discover our collection of unique, timeless, and meticulously handcrafted home decor pieces.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${quicksand.variable}`}>
      <body className="bg-background-light text-deep-neutral antialiased">
        <ThemeProvider attribute="class" defaultTheme="light">
          <CustomCursor />
          <MegaNavigation />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
      <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M8X4KLFP');`,
          }}
        />
      {/* Meta Pixel Code */}
      <Script
      id="facebook-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '637036452551798');
          fbq('track', 'PageView');
        `,
      }}
    />
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=637036452551798&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
    {/* End Meta Pixel Code */}
	
        

    </html>
    
    
  )
}
