'use client';

import { Plus, Search } from 'lucide-react';
import Link from 'next/link';

export default function TableHeader() {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-bold"> Produtos </h1>
      <div className="flex gap-3">
        <div>
          <Link href="products/form">
            <button className="border border-white/10 rounded-lg p-2 flex items-center gap-2">
              <p> Adicionar produtos</p>
              <Plus size={18} />
            </button>
          </Link>
        </div>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3 ">
          <Search className="size-4 text-red-500" />
          <input
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm "
            placeholder="Buscar produtos..."
          />
        </div>
      </div>
    </div>
  );
}
