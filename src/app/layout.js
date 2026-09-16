import { Roboto } from 'next/font/google';
import './globals.css';
import '@material/web/typography/md-typescale-styles.css';
import MaterialProvider from './components/MaterialProvider';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Quiz Isapres — Práctica Examen Material Design 3',
  description: 'Aplicación oficial de práctica con 103 preguntas sobre normativa de Isapres, CAEC, GES y Agentes de Ventas construida con Google Material Design 3.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="light" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={roboto.className}>
        <MaterialProvider>{children}</MaterialProvider>
      </body>
    </html>
  );
}
