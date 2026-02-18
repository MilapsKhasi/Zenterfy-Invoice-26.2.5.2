import React from 'react';
import { useData } from '@/context/DataContext';

const Customers = () => {
  const { customers } = useData();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
           <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm text-left">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50">
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Name</th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">GSTIN</th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Address</th>
                </tr>
              </thead>
              <tbody>
                {customers.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="p-4 text-center text-muted-foreground">No customers found</td>
                  </tr>
                ) : (
                  customers.map((customer) => (
                    <tr key={customer.id} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle font-medium">{customer.name}</td>
                      <td className="p-4 align-middle">{customer.gstin || '-'}</td>
                      <td className="p-4 align-middle">{customer.address || '-'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;