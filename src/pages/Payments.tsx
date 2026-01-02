import { Search, Filter, Download, Plus } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../contexts/CurrencyContext';
import { mockInvoices } from '../data/mockData';
import type { Invoice } from '../types';
import { format } from 'date-fns';
import AddInvoiceModal from '../components/AddInvoiceModal';

const statusBadgeClasses = {
  'Paid': 'bg-green-100 text-green-800',
  'Open': 'bg-blue-100 text-blue-800',
  'Past Due': 'bg-red-100 text-red-800',
  'Uncollectible': 'bg-gray-100 text-gray-800',
};

export default function Payments() {
  const { t } = useTranslation();
  const { formatCurrency } = useCurrency();
  const [invoices, setInvoices] = useState(mockInvoices);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddInvoice = (newInvoice: Invoice) => {
    setInvoices([...invoices, newInvoice]);
    alert(`Invoice "${newInvoice.id}" has been created successfully!`);
  };

  const handleExport = () => {
    const csvContent = [
      ['Invoice ID', 'Member', 'Amount', 'Currency', 'Status', 'Type', 'Due Date'].join(','),
      ...invoices.map(inv => [
        inv.id,
        inv.memberName,
        inv.amount,
        inv.currency,
        inv.status,
        inv.type,
        inv.dueDate
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `invoices-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    alert('Invoices exported successfully!');
  };

  const filteredInvoices = invoices.filter(inv =>
    inv.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inv.memberName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary">{t('payments.title')}</h1>
          <p className="text-gray-600 mt-1">{t('payments.description')}</p>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <button 
            onClick={handleExport}
            className="bg-white hover:bg-gray-50 text-neutral font-semibold px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-primary/30 shadow-sm transition-all duration-300 hover:shadow-md flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>{t('common.export')}</span>
          </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(217,30,92,0.3)] hover:shadow-[0_6px_20px_rgba(217,30,92,0.4)] flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>{t('payments.newInvoice')}</span>
          </button>
        </div>
      </div>

      {/* Payment Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <p className="text-sm text-gray-600">{t('payments.totalRevenue')}</p>
          <p className="text-2xl font-bold text-secondary mt-1">
            {formatCurrency(invoices.reduce((sum, inv) => sum + inv.amount, 0))}
          </p>
        </div>
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <p className="text-sm text-gray-600">{t('payments.paid')}</p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {formatCurrency(invoices.filter(inv => inv.status === 'Paid').reduce((sum, inv) => sum + inv.amount, 0))}
          </p>
        </div>
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <p className="text-sm text-gray-600">{t('payments.open')}</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">
            {formatCurrency(invoices.filter(inv => inv.status === 'Open').reduce((sum, inv) => sum + inv.amount, 0))}
          </p>
        </div>
        <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
          <p className="text-sm text-gray-600">{t('payments.pastDue')}</p>
          <p className="text-2xl font-bold text-red-600 mt-1">
            {formatCurrency(invoices.filter(inv => inv.status === 'Past Due').reduce((sum, inv) => sum + inv.amount, 0))}
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('payments.searchInvoices')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <button 
            onClick={() => alert('Filter options coming soon!')}
            className="bg-white hover:bg-gray-50 text-neutral font-semibold px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-primary/30 shadow-sm transition-all duration-300 hover:shadow-md flex items-center space-x-2"
          >
            <Filter className="w-4 h-4" />
            <span>{t('common.filter')}</span>
          </button>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('payments.invoiceId')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('payments.member')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('payments.amount')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('payments.type')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('payments.status')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('payments.dueDate')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('payments.actions')}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInvoices.map((invoice: Invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-secondary">{invoice.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{invoice.memberName}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-secondary">
                      {invoice.amount.toLocaleString()} {invoice.currency}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">{invoice.type}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusBadgeClasses[invoice.status]}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-600">
                      {format(new Date(invoice.dueDate), 'MMM dd, yyyy')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button 
                      onClick={() => alert(`Viewing details for invoice ${invoice.id}`)}
                      className="text-primary hover:text-primary-dark font-medium"
                    >
                      {t('common.view')}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Registration Forms Section */}
      <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.08),0_0_15px_rgba(217,30,92,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),0_0_25px_rgba(217,30,92,0.15)] hover:border-[rgba(217,30,92,0.3)] relative overflow-hidden">
        <h2 className="text-xl font-bold text-secondary mb-4">{t('payments.registrationForms')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => alert('New Member registration form coming soon!')}
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
          >
            <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="font-medium text-secondary">{t('payments.newMember')}</p>
            <p className="text-sm text-gray-500 mt-1">{t('payments.registrationForm')}</p>
          </button>
          <button 
            onClick={() => alert('Tryouts registration form coming soon!')}
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
          >
            <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="font-medium text-secondary">{t('payments.tryouts')}</p>
            <p className="text-sm text-gray-500 mt-1">{t('payments.tryoutRegistration')}</p>
          </button>
          <button 
            onClick={() => alert('Camps registration form coming soon!')}
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
          >
            <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="font-medium text-secondary">{t('payments.camps')}</p>
            <p className="text-sm text-gray-500 mt-1">{t('payments.campRegistration')}</p>
          </button>
        </div>
      </div>

      {/* Add Invoice Modal */}
      <AddInvoiceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddInvoice}
      />
    </div>
  );
}
