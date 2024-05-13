'use client';

import { ubuntu } from '@/styles/fonts';
import Input from './form/Input';
import React from 'react';
import Select from './form/Select';

export default function MenuForm() {
  return (
    <div>
      <p className={`${ubuntu.className} text-4xl lg:text-center`}>
        Formulário de cardápio
      </p>
      <div className="flex justify-evenly">
        <form className="max-w-sm mt-10 flex flex-col gap-2">
          <Input label="Nome" />
          <Select
            label="Horário"
            options={[
              { label: 'Noite', value: 'night' },
              { label: 'Dia', value: 'day' },
            ]}
          />
          <button
            type="submit"
            className="text-black bg-white hover:bg-white-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}
