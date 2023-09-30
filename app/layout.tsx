import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

import { Outlet, Link } from "react-router-dom";
import Table from './components/Table';
import Home from './page';


import { FaWhatsappSquare } from 'react-icons/fa';

import { FaWhatsapp  } from 'react-icons/fa';

export const metadata = {
  title: 'NEUROSYSTEM',
  description: 'Generated by create next app',
  icons: {
    icon: '/logo.svg',
  },
}

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    /*{children}*/
    return (
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
          <a
        href="https://wa.link/pzw01y"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <FaWhatsapp  />
        <span className="contact-message">Contáctanos</span>
      </a>
        </body>
      </html>
    )
  }

  


