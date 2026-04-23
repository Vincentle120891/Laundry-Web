import { ServiceItem } from '../../types';

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'shirt',
    category: 'clothes',
    name: {
      en: 'Shirt',
      vi: 'Áo sơ mi',
      ko: '셔츠',
    },
    pricingType: 'per_item',
    basePrice: 15000,
  },
  {
    id: 'pants',
    category: 'clothes',
    name: {
      en: 'Pants',
      vi: 'Quần',
      ko: '바지',
    },
    pricingType: 'per_item',
    basePrice: 20000,
  },
  {
    id: 'dress',
    category: 'clothes',
    name: {
      en: 'Dress',
      vi: 'Váy',
      ko: '원피스',
    },
    pricingType: 'per_item',
    basePrice: 35000,
  },
  {
    id: 'bedding',
    category: 'bedding',
    name: {
      en: 'Bedding',
      vi: 'Chăn ga',
      ko: '침구류',
    },
    pricingType: 'per_kg',
    basePrice: 25000,
    maxWeightKg: 10,
  },
  {
    id: 'shoes',
    category: 'shoes',
    name: {
      en: 'Shoes',
      vi: 'Giày',
      ko: '신발',
    },
    pricingType: 'per_item',
    basePrice: 50000,
  },
  {
    id: 'delicate',
    category: 'delicate',
    name: {
      en: 'Delicate Items',
      vi: 'Đồ mỏng manh',
      ko: '섬세한 의류',
    },
    pricingType: 'per_item',
    basePrice: 40000,
  },
];

export const CATEGORIES = [
  { id: 'clothes', icon: '👔' },
  { id: 'bedding', icon: '🛏️' },
  { id: 'shoes', icon: '👟' },
  { id: 'delicate', icon: '✨' },
] as const;

export const SPECIAL_SERVICES = [
  { id: 'dry_clean', icon: '🧼' },
  { id: 'iron_only', icon: '👔' },
  { id: 'stain_removal', icon: '🎯' },
  { id: 'eco_wash', icon: '🌿' },
] as const;

export function calculateTotalPrice(items: Array<{ serviceItemId: string; quantity: number; estimatedWeightKg?: number }>): number {
  return items.reduce((total, item) => {
    const serviceItem = SERVICE_ITEMS.find((si) => si.id === item.serviceItemId);
    if (!serviceItem) return total;

    if (serviceItem.pricingType === 'per_item') {
      return total + serviceItem.basePrice * item.quantity;
    } else {
      const weight = item.estimatedWeightKg || 1;
      return total + serviceItem.basePrice * weight;
    }
  }, 0);
}

export function formatCurrency(amount: number, locale: 'en' | 'vi' | 'ko' = 'en'): string {
  const locales = {
    en: 'en-US',
    vi: 'vi-VN',
    ko: 'ko-KR',
  };
  
  const currencies = {
    en: 'USD',
    vi: 'VND',
    ko: 'KRW',
  };

  return new Intl.NumberFormat(locales[locale], {
    style: 'currency',
    currency: currencies[locale],
  }).format(amount);
}
