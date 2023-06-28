import { ExpenseInterface } from 'interfaces/expense';
import { FinancialReportInterface } from 'interfaces/financial-report';
import { InvoiceInterface } from 'interfaces/invoice';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  expense?: ExpenseInterface[];
  financial_report?: FinancialReportInterface[];
  invoice?: InvoiceInterface[];
  user?: UserInterface;
  _count?: {
    expense?: number;
    financial_report?: number;
    invoice?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
