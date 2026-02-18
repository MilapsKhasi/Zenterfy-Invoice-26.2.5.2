import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { LayoutDashboard, FilePlus, FileText, Users, Package, LogOut, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { signOut, user } = useAuth();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const navItems = [
    { href: '/', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/create-invoice', label: 'Create Invoice', icon: FilePlus },
    { href: '/sales-register', label: 'Sales Register', icon: FileText },
    { href: '/customers', label: 'Customers', icon: Users },
    { href: '/items', label: 'Items', icon: Package },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed md:sticky top-0 left-0 z-50 h-screen w-64 bg-card border-r border-border transition-transform duration-200 ease-in-out",
        isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">Invoice Pro</h1>
          <button onClick={() => setIsMobileOpen(false)} className="md:hidden text-muted-foreground">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-border">
          <div className="flex items-center gap-3 px-4 py-3 mb-2">
             <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user?.email}</p>
             </div>
          </div>
          <button
            onClick={() => signOut()}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full min-w-0">
        <div className="md:hidden p-4 border-b bg-card flex items-center gap-4">
          <button onClick={() => setIsMobileOpen(true)} className="p-2 -ml-2 text-foreground">
            <Menu className="h-6 w-6" />
          </button>
          <span className="font-semibold">Invoice Pro</span>
        </div>
        <div className="p-4 md:p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
          {children}
        </div>
      </main>
    </div>
  );
};