import { useState } from 'react';
import { useTranslation } from '../../i18n';
import { useBookingStore } from '../../store/bookingStore';

interface TimeSlotPickerProps {
  type: 'pickup' | 'delivery';
  onComplete?: () => void;
}

// Mock time slots - in production, fetch from API
const generateTimeSlots = (startDate: Date) => {
  const slots = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    
    const timeSlots = [
      '08:00-10:00',
      '10:00-12:00',
      '14:00-16:00',
      '16:00-18:00',
      '18:00-20:00',
    ];

    timeSlots.forEach((time, idx) => {
      slots.push({
        id: `${date.toISOString().split('T')[0]}-${idx}`,
        date: date.toISOString().split('T')[0],
        startTime: time.split('-')[0],
        endTime: time.split('-')[1],
        maxCapacity: 20,
        currentBookings: Math.floor(Math.random() * 15),
        isActive: true,
      });
    });
  }
  return slots;
};

export function TimeSlotPicker({ type, onComplete }: TimeSlotPickerProps) {
  const { t, locale } = useTranslation();
  const setPickupSlot = useBookingStore((state) => state.setPickupSlot);
  const setDeliverySlot = useBookingStore((state) => state.setDeliverySlot);
  const selectedSlot = useBookingStore((state) => 
    type === 'pickup' ? state.pickupSlot : state.deliverySlot
  );

  const [selectedDate, setSelectedDate] = useState<string>('');
  const slots = generateTimeSlots(new Date());

  const handleSelectSlot = (slot: typeof slots[0]) => {
    if (type === 'pickup') {
      setPickupSlot(slot);
    } else {
      setDeliverySlot(slot);
    }
    onComplete?.();
  };

  const dates = [...new Set(slots.map(s => s.date))];
  const filteredSlots = selectedDate ? slots.filter(s => s.date === selectedDate) : slots;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (dateStr === today.toISOString().split('T')[0]) {
      return `Today, ${date.toLocaleDateString(locale, { month: 'short', day: 'numeric' })}`;
    }
    if (dateStr === tomorrow.toISOString().split('T')[0]) {
      return `Tomorrow, ${date.toLocaleDateString(locale, { month: 'short', day: 'numeric' })}`;
    }
    return date.toLocaleDateString(locale, { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">
        {type === 'pickup' ? t('booking.pickup_time') : t('booking.delivery_time')}
      </h2>

      {/* Date Selection */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {dates.map(date => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`px-4 py-3 rounded-lg whitespace-nowrap transition-colors ${
              selectedDate === date || (!selectedDate && date === dates[0])
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <div className="text-xs opacity-80">
              {new Date(date).toLocaleDateString(locale, { weekday: 'short' })}
            </div>
            <div className="font-medium">{formatDate(date)}</div>
          </button>
        ))}
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {filteredSlots.map(slot => {
          const isAvailable = slot.currentBookings < slot.maxCapacity;
          const isSelected = selectedSlot?.id === slot.id;

          return (
            <button
              key={slot.id}
              onClick={() => isAvailable && handleSelectSlot(slot)}
              disabled={!isAvailable}
              className={`p-4 rounded-lg border-2 transition-all ${
                isSelected
                  ? 'border-blue-600 bg-blue-50'
                  : isAvailable
                  ? 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  : 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-50'
              }`}
            >
              <div className="font-medium">{slot.startTime} - {slot.endTime}</div>
              <div className="text-sm text-gray-500 mt-1">
                {isAvailable 
                  ? `${slot.maxCapacity - slot.currentBookings} slots left`
                  : 'Full'
                }
              </div>
            </button>
          );
        })}
      </div>

      {selectedSlot && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div>
              <p className="font-medium">
                {formatDate(selectedSlot.date)}, {selectedSlot.startTime} - {selectedSlot.endTime}
              </p>
              <p className="text-sm text-gray-500">
                {type === 'pickup' ? 'Pickup scheduled' : 'Delivery scheduled'}
              </p>
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
