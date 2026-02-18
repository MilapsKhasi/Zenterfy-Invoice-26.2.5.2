export interface Customer {
  id: string;
  name: string;
  gstin?: string;
  address?: string;
  createdAt?: string;
}

export interface Item {
  id: string;
  name: string;
  hsnCode?: string;
  rate: number;
  createdAt?: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  date: string;
  customerId: string;
  customerName: string;
  gstin?: string;
  address?: string;
  po?: string;
  items: InvoiceItem[];
  withoutGst: number;
  cgstTotal: number;
  sgstTotal: number;
  gstAmount: number;
  roundOff: number;
  grandTotal: number;
  status: 'paid' | 'pending';
  createdAt?: string;
  updatedAt?: string;
}