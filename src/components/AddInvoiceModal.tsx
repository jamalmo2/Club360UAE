import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../contexts/CurrencyContext';
import Modal from './Modal';

interface AddInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (invoice: any) => void;
}

export default function AddInvoiceModal({ isOpen, onClose, onSave }: AddInvoiceModalProps) {
  const { t } = useTranslation();
  const { currency } = useCurrency();
  const [formData, setFormData] = useState({
    memberName: '',
    amount: '',
    type: 'Subscription',
    currency: currency,
    dueDate: '',
  });

  // Sync currency when context changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, currency }));
  }, [currency]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newInvoice = {
      id: `INV-${String(Date.now()).slice(-6)}`,
      memberName: formData.memberName,
      amount: parseFloat(formData.amount),
      currency: formData.currency as 'AED' | 'EUR',
      status: 'Open' as const,
      dueDate: formData.dueDate,
      invoiceDate: new Date().toISOString().split('T')[0],
      type: formData.type as 'Subscription' | 'Installment' | 'One-time',
    };
    onSave(newInvoice);
    setFormData({
      memberName: '',
      amount: '',
      type: 'Subscription',
      currency: currency,
      dueDate: '',
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('payments.createNewInvoice')} size="md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('payments.memberName')} *
          </label>
          <input
            type="text"
            required
            value={formData.memberName}
            onChange={(e) => setFormData({ ...formData, memberName: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder={t('payments.memberName')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('payments.amount')} ({formData.currency}) *
          </label>
          <input
            type="number"
            required
            min="0"
            step="0.01"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="0.00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('payments.currency')} *
          </label>
          <select
            required
            value={formData.currency}
            onChange={(e) => setFormData({ ...formData, currency: e.target.value as 'AED' | 'EUR' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="AED">AED - UAE Dirham</option>
            <option value="EUR">EUR - Euro</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('payments.invoiceType')} *
          </label>
          <select
            required
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="Subscription">{t('payments.subscription')}</option>
            <option value="Installment">{t('payments.installment')}</option>
            <option value="One-time">{t('payments.oneTime')}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('payments.dueDate')} *
          </label>
          <input
            type="date"
            required
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={onClose}
            className="bg-white hover:bg-gray-50 text-neutral font-semibold px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-primary/30 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {t('common.cancel')}
          </button>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(217,30,92,0.3)] hover:shadow-[0_6px_20px_rgba(217,30,92,0.4)]"
          >
            {t('payments.createInvoice')}
          </button>
        </div>
      </form>
    </Modal>
  );
}
