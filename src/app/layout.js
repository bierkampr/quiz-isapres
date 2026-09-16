import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Quiz Isapres — Practica para tu Examen',
  description: 'Aplicación de práctica con 102 preguntas sobre normativa de Isapres, Agentes de Ventas, CAEC, GES y más. Prepárate para tu evaluación.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
