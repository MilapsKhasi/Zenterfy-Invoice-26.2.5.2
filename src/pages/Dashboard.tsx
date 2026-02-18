import React from 'react';
import { useData } from '@/context/DataContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IndianRupee, Users, FileText, Package } from 'lucide-react';

const Dashboard = () => {
  const { invoices, customers, items, isLoading } = useData();

  const totalRevenue = invoices.reduce((acc, inv) => acc + (inv.grandTotal || 0), 0);
  const totalInvoices = invoices.length;
  const totalCustomers = customers.length;
  const totalItems = items.length;

  if (isLoading) {
    return <div>Loading stats...</div>;
  }

  const stats = [
    {
      title: "Total Revenue",
      value: `₹${totalRevenue.toLocaleString()}`,
      icon: IndianRupee,
      description: "Lifetime revenue",
      color: "text-green-600"
    },
    {
      title: "Invoices",
      value: totalInvoices,
      icon: FileText,
      description: "Total invoices generated",
      color: "text-blue-600"
    },
    {
      title: "Customers",
      value: totalCustomers,
      icon: Users,
      description: "Active customers",
      color: "text-purple-600"
    },
    {
      title: "Items",
      value: totalItems,
      icon: Package,
      description: "Products in inventory",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium text-muted-foreground">{stat.title}</h3>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              <div className="pt-2">
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
          <h3 className="font-semibold leading-none tracking-tight mb-4">Recent Invoices</h3>
          {invoices.length === 0 ? (
            <p className="text-muted-foreground text-sm">No invoices found.</p>
          ) : (
            <div className="space-y-4">
              {invoices.slice(0, 5).map((inv) => (
                <div key={inv.id} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-sm">{inv.invoiceNumber}</p>
                    <p className="text-xs text-muted-foreground">{inv.customerName}</p>
                  </div>
                  <div className="font-bold text-sm">₹{inv.grandTotal?.toLocaleString()}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;