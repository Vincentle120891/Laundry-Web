import { useState, useEffect } from 'react';
import { useTranslation, initI18n } from './i18n';
import { useBookingStore } from './store/bookingStore';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { ItemSelector } from './components/ItemSelector';
import { TimeSlotPicker } from './components/TimeSlotPicker';
import { BookingSummary } from './components/BookingSummary';

function App() {
  const { t } = useTranslation();
  const currentStep = useBookingStore((state) => state.currentStep);
  const nextStep = useBookingStore((state) => state.nextStep);
  const prevStep = useBookingStore((state) => state.prevStep);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    async function init() {
      await initI18n();
      setIsInitialized(true);
    }
    init();
  }, []);

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ItemSelector onComplete={nextStep} />;
      case 2:
        return <TimeSlotPicker type="pickup" onComplete={nextStep} />;
      case 3:
        return <TimeSlotPicker type="delivery" onComplete={nextStep} />;
      case 4:
        return <BookingSummary onSubmit={() => alert('Booking submitted!')} />;
      default:
        return null;
    }
  };

  const stepTitles = [
    t('booking.select_items'),
    t('booking.pickup_time'),
    t('booking.delivery_time'),
    t('booking.summary'),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-blue-600">{t('app.title')}</h1>
            <p className="text-sm text-gray-500">{t('app.subtitle')}</p>
          </div>
          <LanguageSwitcher />
        </div>

        <div className="max-w-4xl mx-auto px-4 pb-4">
          <div className="flex items-center gap-2">
            {stepTitles.map((_, index) => (
              <div key={index} className="flex items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    index + 1 <= currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {index + 1}
                </div>
                {index < stepTitles.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 rounded ${
                      index + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            {stepTitles.map((title, index) => (
              <span key={index} className={index + 1 === currentStep ? 'font-medium text-blue-600' : ''}>
                {title}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 pb-32">
        {renderStep()}
      </main>

      {currentStep > 1 && currentStep < 4 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <div className="max-w-4xl mx-auto flex justify-between">
            <button
              onClick={prevStep}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {t('common.back')}
            </button>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
