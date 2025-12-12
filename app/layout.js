// import Login from './login/page'
import './globals.css'

export const metadata = {
  title: "Book Review App",
  description: "A modern book review platform built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
