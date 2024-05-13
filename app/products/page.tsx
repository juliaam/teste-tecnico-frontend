import { Plus, Search } from 'lucide-react';
import Table from '@/components/table/Table';
import TableHeader from '@/components/table/TableHeader';

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
