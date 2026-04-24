import App from '../App';

export default function BookingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Pickup</h1>
          <p className="text-gray-600">Schedule your laundry service in a few simple steps</p>
        </div>
      </div>
      <App />
    </div>
  );
}
