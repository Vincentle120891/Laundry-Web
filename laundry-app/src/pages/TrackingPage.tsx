import { useState } from 'react';

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('');
  const [orderStatus, setOrderStatus] = useState<{
    id: string;
    status: string;
    estimatedDelivery: string;
    timeline: Array<{ status: string; date: string; completed: boolean }>;
  } | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock data - will be replaced with actual API call later
    if (trackingId.trim()) {
      setOrderStatus({
        id: trackingId.toUpperCase(),
        status: 'processing',
        estimatedDelivery: 'Tomorrow, 2-4 PM',
        timeline: [
          { status: 'Order Placed', date: 'Today, 9:00 AM', completed: true },
          { status: 'Picked Up', date: 'Today, 11:30 AM', completed: true },
          { status: 'Processing', date: 'Today, 2:00 PM', completed: true },
          { status: 'Quality Check', date: 'Today, 5:00 PM', completed: false },
          { status: 'Out for Delivery', date: 'Tomorrow, 10:00 AM', completed: false },
          { status: 'Delivered', date: 'Tomorrow, 2-4 PM', completed: false },
        ],
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'picked_up':
        return 'bg-purple-100 text-purple-800';
      case 'processing':
        return 'bg-indigo-100 text-indigo-800';
      case 'out_for_delivery':
        return 'bg-orange-100 text-orange-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Track Your Order</h1>
          <p className="text-xl text-gray-300 mb-8">
            Enter your order ID to track the status of your laundry
          </p>

          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter Order ID (e.g., LND-12345)"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Track
            </button>
          </form>
        </div>
      </section>

      {/* Tracking Results */}
      {orderStatus && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              {/* Order Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-8 border-b">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Order ID</p>
                  <p className="text-2xl font-bold text-gray-900">{orderStatus.id}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
                  <p className="text-xl font-semibold text-blue-600">{orderStatus.estimatedDelivery}</p>
                </div>
              </div>

              {/* Current Status */}
              <div className="mb-8">
                <div className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(orderStatus.status)}`}>
                  {orderStatus.status.replace('_', ' ').toUpperCase()}
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="space-y-8">
                  {orderStatus.timeline.map((item, index) => (
                    <div key={index} className="relative flex items-start">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                          item.completed ? 'bg-green-500' : 'bg-gray-200'
                        }`}
                      >
                        {item.completed ? (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        )}
                      </div>
                      <div className="ml-4 flex-1">
                        <p className={`font-medium ${item.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                          {item.status}
                        </p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Info Section */}
      {!orderStatus && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Where's my Order ID?</h3>
                <p className="text-sm text-gray-600">
                  Your Order ID is sent via email and SMS after you complete your booking.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Real-time Updates</h3>
                <p className="text-sm text-gray-600">
                  Track your order in real-time from pickup to delivery.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600">
                  Contact our support team for any questions about your order.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
