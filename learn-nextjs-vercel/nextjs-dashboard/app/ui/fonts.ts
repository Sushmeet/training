import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  subsets: ['latin'], // You can include subsets like 'latin', 'latin-ext', etc.
  weight: ['400', '700'], // Specify font weights you need (400 for normal, 700 for bold)
});
