import { Montserrat } from "next/font/google";
import styles from "./page.module.css";

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className={styles.container}>
          <header className={styles.header}>this is header</header>
          {children}
        </div>
      </body>
    </html>
  );
}
