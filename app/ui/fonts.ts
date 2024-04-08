// project 의 font 를 관리합니다.

import { Inter, Lusitana } from 'next/font/google';

// main font
export const inter = Inter({ subsets: ['latin'] });

// secondary font
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
