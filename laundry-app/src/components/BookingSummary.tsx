import { useTranslation } from '../i18n';
import { useBookingStore } from '../store/bookingStore';
import { SERVICE_ITEMS, calculateTotalPrice, formatCurrency } from '../utils/constants';

interface BookingSummaryProps {
  onSubmit?: () => void;
}

export function BookingSummary({ onSubmit }: BookingSummaryProps) {
  const { t, locale } = useTranslation();
  const items = useBookingStore((state) => state.items);
  const pickupSlot = useBookingStore((state) => state.pickupSlot);
  const deliverySlot = useBookingStore((state) => state.deliverySlot);
  const notes = useBookingStore((state) => state.notes);
  const setNotes = useBookingStore((state) => state.setNotes);

  const totalPrice = calculateTotalPrice(items);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold">{t('booking.summary')}</h2>

      {/* Items Summary */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-medium mb-3">{t('booking.select_items')}</h3>
        <div className="space-y-2">
          {items.map(item => {
            const serviceItem = SERVICE_ITEMS.find(si => si.id === item.serviceItemId);
            if (!serviceItem) return null;
            
            const itemName = serviceItem.name[locale as 'en' | 'vi' | 'ko'] || serviceItem.name.en;
            const price = serviceItem.pricingType === 'per_item'
              ? serviceItem.basePrice * item.quantity
              : serviceItem.basePrice * (item.estimatedWeightKg || 1);

            return (
              <div key={item.serviceItemId} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium">{itemName}</p>
                  <p className="text-sm text-gray-500">
                    {serviceItem.pricingType === 'per_item'
                      ? `${item.quantity} × ${formatCurrency(serviceItem.basePrice, locale)}`
                      : `${item.estimatedWeightKg} kg × ${formatCurrency(serviceItem.basePrice, locale)}`}
                  </p>
                </div>
                <p className="font-medium">{formatCurrency(price, locale)}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pickup & Delivery */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-medium mb-3">{t('booking.pickup_delivery')}</h3>
        
        {pickupSlot && (
          <div className="mb-4 pb-4 border-b border-gray-100">
            <p className="text-sm text-gray-500">{t('booking.pickup_time')}</p>
            <p className="font-medium">
              {formatDate(pickupSlot.date)}, {pickupSlot.startTime} - {pickupSlot.endTime}
            </p>
          </div>
        )}

        {deliverySlot && (
          <div>
            <p className="text-sm text-gray-500">{t('booking.delivery_time')}</p>
            <p className="font-medium">
              {formatDate(deliverySlot.date)}, {deliverySlot.startTime} - {deliverySlot.endTime}
            </p>
          </div>
        )}
      </div>

      {/* Special Instructions */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h3 className="font-medium mb-3">{t('booking.notes')}</h3>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Stains, delicate items, special requests..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows={3}
        />
      </div>

      {/* Total */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center text-xl">
          <span className="font-semibold">Total</span>
          <span className="font-bold text-blue-600">{formatCurrency(totalPrice, locale)}</span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={onSubmit}
        disabled={!pickupSlot || !deliverySlot || items.length === 0}
        className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-medium text-lg transition-colors"
      >
        {t('booking.confirm')}
      </button>
    </div>
  );
}
