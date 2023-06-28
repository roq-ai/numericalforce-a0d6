const mapping: Record<string, string> = {
  businesses: 'business',
  expenses: 'expense',
  'financial-reports': 'financial_report',
  invoices: 'invoice',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
