import Footer from '@/components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <main className='flex flex-col flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
