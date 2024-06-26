import Table from '@/components/table/Table';
import TableHeader from '@/components/table/TableHeader';
import React from 'react';

export default function Products() {
  return (
    <div className="flex flex-col gap-4">
      <TableHeader />
      <div className="flex flex-col">
        <Table />
      </div>
    </div>
  );
}
