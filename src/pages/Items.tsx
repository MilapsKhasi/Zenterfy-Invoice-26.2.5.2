import React from 'react';
import { useData } from '@/context/DataContext';

const Items = () => {
  const { items } = useData();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Items</h1>
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
           <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm text-left">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50">
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Name</th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">HSN Code</th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">Rate</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="p-4 text-center text-muted-foreground">No items found</td>
                  </tr>
                ) : (
                  items.map((item) => (
                    <tr key={item.id} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle font-medium">{item.name}</td>
                      <td className="p-4 align-middle">{item.hsnCode || '-'}</td>
                      <td className="p-4 align-middle text-right">₹{item.rate}</td>
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

export default Items;