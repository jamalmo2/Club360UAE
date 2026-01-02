import { useCurrency } from '../contexts/CurrencyContext';
import { DollarSign } from 'lucide-react';
import { useState } from 'react';

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);

  const currencies = [
    { code: 'AED' as const, name: 'UAE Dirham', symbol: 'AED', flag: '🇦🇪' },
    { code: 'EUR' as const, name: 'Euro', symbol: 'EUR', flag: '🇪🇺' },
  ];

  const currentCurrency = currencies.find(c => c.code === currency) || currencies[0];

  const changeCurrency = (currencyCode: 'AED' | 'EUR') => {
    setCurrency(currencyCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Change currency"
      >
        <DollarSign className="w-5 h-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">{currentCurrency.flag}</span>
        <span className="text-sm text-gray-600 hidden sm:inline">{currentCurrency.symbol}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20 rtl:left-0 rtl:right-auto">
            {currencies.map((curr) => (
              <button
                key={curr.code}
                onClick={() => changeCurrency(curr.code)}
                className={`w-full text-right px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                  currency === curr.code ? 'bg-primary/10' : ''
                }`}
              >
                <span className="text-sm font-medium text-gray-700">{curr.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{curr.symbol}</span>
                  <span className="text-lg">{curr.flag}</span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
