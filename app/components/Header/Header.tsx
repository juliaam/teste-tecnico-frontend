import Image from 'next/image';
import Link from 'next/link';
import restaurant from '@/app/assets/restaurant.svg';
import { LINKS_HEADER } from '@/app/data/header';

export default function Header() {
  return (
    <header>
      <div className="mx-auto flex justify-between items-center px-8">
        <div className="flex items-center gap-2">
          <Image src={restaurant} alt="restaurante" width={25} height={25} />
          <h1 className="text-2xl font-bold">Restaurante</h1>
        </div>
        <nav>
          <ul className="flex gap-x-6">
            {LINKS_HEADER.map((link) => (
              <li>
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
      </div>
    </header>
  );
}
