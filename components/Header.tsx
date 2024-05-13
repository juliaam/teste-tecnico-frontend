'use client';

import Image from 'next/image';
import Link from 'next/link';
import restaurant from '@/assets/restaurant.svg';
import { LINKS_HEADER } from '@/data/header';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center px-8">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image src={restaurant} alt="restaurante" width={25} height={25} />
          <h1 className="text-2xl font-bold transition ease-in-out delay-50 hover:text-gray-400">
            Restaurante
          </h1>{' '}
        </div>
      </Link>
      <nav>
        <ul className="flex gap-x-6">
          {LINKS_HEADER.map((link) => (
            <li key={link.value}>
              <Link
                className="transition ease-in-out delay-50 hover:text-gray-400"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
