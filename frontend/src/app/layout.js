import "./globals.css";
import Header from './components/Header/Header';

export const metadata = {
  title: "Product Listing Page | Appscrip Frontend Assignment",
  description: "A responsive product listing page built for Appscrip frontend assignment with filters, product grid, and modern UI using Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
