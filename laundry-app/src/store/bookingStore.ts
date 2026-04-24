import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { BookingState, BookingItem, TimeSlot, Address } from '../types';

interface BookingStore extends BookingState {
  addItem: (item: BookingItem) => void;
  updateItem: (serviceItemId: string, updates: Partial<BookingItem>) => void;
  removeItem: (serviceItemId: string) => void;
  clearItems: () => void;
  setPickupSlot: (slot: TimeSlot | null) => void;
  setDeliverySlot: (slot: TimeSlot | null) => void;
  setPickupAddress: (address: Address | null) => void;
  setDeliveryAddress: (address: Address | null) => void;
  setNotes: (notes: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  resetBooking: () => void;
}

const initialState: BookingState = {
  items: [],
  pickupSlot: null,
  deliverySlot: null,
  pickupAddress: null,
  deliveryAddress: null,
  notes: '',
  currentStep: 1,
};

export const useBookingStore = create<BookingStore>()(
  persist(
    (set, get) => ({
      ...initialState,

      addItem: (item) => {
        const existingItems = get().items;
        const existingIndex = existingItems.findIndex(
          (i) => i.serviceItemId === item.serviceItemId
        );

        if (existingIndex >= 0) {
          const updatedItems = [...existingItems];
          updatedItems[existingIndex] = {
            ...updatedItems[existingIndex],
            quantity: updatedItems[existingIndex].quantity + item.quantity,
          };
          set({ items: updatedItems });
        } else {
          set({ items: [...existingItems, item] });
        }
      },

      updateItem: (serviceItemId, updates) => {
        set({
          items: get().items.map((item) =>
            item.serviceItemId === serviceItemId ? { ...item, ...updates } : item
          ),
        });
      },

      removeItem: (serviceItemId) => {
        set({
          items: get().items.filter((item) => item.serviceItemId !== serviceItemId),
        });
      },

      clearItems: () => {
        set({ items: [] });
      },

      setPickupSlot: (slot) => {
        set({ pickupSlot: slot });
      },

      setDeliverySlot: (slot) => {
        set({ deliverySlot: slot });
      },

      setPickupAddress: (address) => {
        set({ pickupAddress: address });
      },

      setDeliveryAddress: (address) => {
        set({ deliveryAddress: address });
      },

      setNotes: (notes) => {
        set({ notes });
      },

      nextStep: () => {
        set({ currentStep: Math.min(get().currentStep + 1, 4) });
      },

      prevStep: () => {
        set({ currentStep: Math.max(get().currentStep - 1, 1) });
      },

      setStep: (step) => {
        set({ currentStep: step });
      },

      resetBooking: () => {
        set(initialState);
      },
    }),
    {
      name: 'laundry-booking-storage',
      partialize: (state) => ({
        items: state.items,
        notes: state.notes,
      }),
    }
  )
);
