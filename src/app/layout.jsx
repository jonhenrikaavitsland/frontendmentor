import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <header></header>
        <main className='grow'>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
