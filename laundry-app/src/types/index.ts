export interface ServiceItem {
  id: string;
  category: 'clothes' | 'bedding' | 'shoes' | 'delicate';
  name: {
    en: string;
    vi: string;
    ko: string;
  };
  pricingType: 'per_item' | 'per_kg';
  basePrice: number;
  maxWeightKg?: number;
}

export interface BookingItem {
  serviceItemId: string;
  quantity: number;
  estimatedWeightKg?: number;
  specialInstructions?: string[];
}

export interface TimeSlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  maxCapacity: number;
  currentBookings: number;
  isActive: boolean;
}

export interface Address {
  id?: string;
  label: string;
  fullAddress: string;
  lat?: number;
  lng?: number;
  isDefault: boolean;
}

export interface Booking {
  id?: string;
  userId: string;
  status: 'pending' | 'confirmed' | 'picked_up' | 'processing' | 'out_for_delivery' | 'delivered' | 'cancelled';
  pickupDatetime: string;
  deliveryDatetime: string;
  pickupAddress: Address;
  deliveryAddress: Address;
  items: BookingItem[];
  totalPrice: number;
  currency: string;
  notes?: string;
  createdAt?: string;
}

export type Language = 'en' | 'vi' | 'ko';

export interface BookingState {
  items: BookingItem[];
  pickupSlot: TimeSlot | null;
  deliverySlot: TimeSlot | null;
  pickupAddress: Address | null;
  deliveryAddress: Address | null;
  notes: string;
  currentStep: number;
}
