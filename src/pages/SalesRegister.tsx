import React from 'react';
import { useData } from '@/context/DataContext';

const SalesRegister = () => {
  const { invoices } = useData();
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Sales Register</h1>
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm text-left">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Invoice #</th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Date</th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Customer</th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">Amount</th>
                  <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {invoices.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-muted-foreground">No invoices found</td>
                  </tr>
                ) : (
                  invoices.map((inv) => (
                    <tr key={inv.id} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle font-medium">{inv.invoiceNumber}</td>
                      <td className="p-4 align-middle">{new Date(inv.date).toLocaleDateString()}</td>
                      <td className="p-4 align-middle">{inv.customerName}</td>
                      <td className="p-4 align-middle text-right">₹{inv.grandTotal?.toLocaleString()}</td>
                      <td className="p-4 align-middle">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                          {inv.status}
                        </span>
                      </td>
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

export default SalesRegister;