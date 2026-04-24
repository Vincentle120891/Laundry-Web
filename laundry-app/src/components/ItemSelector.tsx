import { useState } from 'react';
import { useTranslation } from '../i18n';
import { useBookingStore } from '../store/bookingStore';
import { SERVICE_ITEMS, CATEGORIES, calculateTotalPrice, formatCurrency } from '../utils/constants';
import type { BookingItem } from '../types';

interface ItemSelectorProps {
  onComplete?: () => void;
}

export function ItemSelector({ onComplete }: ItemSelectorProps) {
  const { t, locale } = useTranslation();
  const addItem = useBookingStore((state) => state.addItem);
  const items = useBookingStore((state) => state.items);
  
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [weights, setWeights] = useState<Record<string, number>>({});

  const filteredItems = selectedCategory === 'all'
    ? SERVICE_ITEMS
    : SERVICE_ITEMS.filter(item => item.category === selectedCategory);

  const handleAddToCart = (itemId: string, pricingType: 'per_item' | 'per_kg') => {
    const quantity = quantities[itemId] || 0;
    const weight = weights[itemId] || 1;

    if (quantity > 0 || (pricingType === 'per_kg' && weight > 0)) {
      addItem({
        serviceItemId: itemId,
        quantity: pricingType === 'per_item' ? quantity : 1,
        estimatedWeightKg: pricingType === 'per_kg' ? weight : undefined,
      });

      setQuantities(prev => ({ ...prev, [itemId]: 0 }));
      setWeights(prev => ({ ...prev, [itemId]: 1 }));
    }
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          All Items
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {cat.icon} {t(`items.${cat.id}`) || cat.id}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => {
          const itemName = item.name[locale as 'en' | 'vi' | 'ko'] || item.name.en;
          const quantity = quantities[item.id] || 0;
          const weight = weights[item.id] || 1;

          return (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg">{itemName}</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {formatCurrency(item.basePrice, locale)} {t(`items.${item.pricingType}`)}
                </span>
              </div>

              {item.pricingType === 'per_item' ? (
                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => setQuantities(prev => ({ ...prev, [item.id]: Math.max(0, (prev[item.id] || 0) - 1) }))}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl"
                  >
                    −
                  </button>
                  <span className="text-xl font-medium w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantities(prev => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }))}
                    className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center text-xl"
                  >
                    +
                  </button>
                </div>
              ) : (
                <div className="mt-4">
                  <label className="text-sm text-gray-600 mb-2 block">
                    {t('items.weight_estimate')}: {weight} kg
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max={item.maxWeightKg || 10}
                    step="0.5"
                    value={weight}
                    onChange={(e) => setWeights(prev => ({ ...prev, [item.id]: parseFloat(e.target.value) }))}
                    className="w-full accent-blue-600"
                  />
                </div>
              )}

              <button
                onClick={() => handleAddToCart(item.id, item.pricingType)}
                disabled={item.pricingType === 'per_item' ? quantity === 0 : weight === 0}
                className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
              >
                {t('common.save') || 'Add'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Selected Items Summary */}
      {items.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <p className="font-medium">{totalItems} {t('items.count_other', { count: totalItems })}</p>
              <p className="text-sm text-gray-500">{formatCurrency(calculateTotalPrice(items), locale)}</p>
            </div>
            <button
              onClick={onComplete}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              {t('common.next') || 'Next'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
