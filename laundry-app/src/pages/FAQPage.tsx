export default function FAQPage() {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'How does LaundryPro work?',
          a: 'Simply schedule a pickup through our website or app. We will collect your laundry at your preferred time, clean it professionally, and deliver it back to you fresh and ready to wear.',
        },
        {
          q: 'What areas do you serve?',
          a: 'We currently serve the greater metropolitan area. Enter your address during booking to check if we service your location.',
        },
        {
          q: 'Do I need to create an account?',
          a: 'While you can book as a guest, creating an account allows you to track orders, save addresses, and access order history more easily.',
        },
      ],
    },
    {
      category: 'Services and Pricing',
      questions: [
        {
          q: 'How is pricing calculated?',
          a: 'Most items are priced by weight. Some specialty items like suits or comforters have per-item pricing. See our Services page for detailed pricing.',
        },
        {
          q: 'Is there a minimum order?',
          a: 'Yes, we have a 15 dollar minimum order. Orders over 30 dollars qualify for free pickup and delivery.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept all major credit cards, debit cards, and digital wallets. Payment is processed after your order is completed.',
        },
        {
          q: 'Do you offer any discounts?',
          a: 'Yes! We offer student discounts, senior discounts, and subscription plans for regular customers. Contact us for more information.',
        },
      ],
    },
    {
      category: 'Pickup and Delivery',
      questions: [
        {
          q: 'How far in advance should I schedule?',
          a: 'We recommend scheduling at least 24 hours in advance. Same-day pickup may be available depending on your location and time slot availability.',
        },
        {
          q: 'What are your pickup and delivery hours?',
          a: 'We offer pickups and deliveries from 7 AM to 9 PM, seven days a week. You can select your preferred time slot during booking.',
        },
        {
          q: 'How long does it take to get my laundry back?',
          a: 'Standard service takes 24-48 hours. Express same-day service is available for an additional fee.',
        },
        {
          q: 'Do I need to be home for pickup or delivery?',
          a: 'No! You can leave your laundry in a bag at your door or with a doorman. Just provide instructions during booking.',
        },
      ],
    },
    {
      category: 'Care and Quality',
      questions: [
        {
          q: 'What detergents do you use?',
          a: 'We use premium, hypoallergenic detergents. If you have sensitivities or preferences, you can request specific products or our eco-friendly option.',
        },
        {
          q: 'How do you handle special care instructions?',
          a: 'You can add special instructions during booking. Our team carefully follows all care labels and customer requests.',
        },
        {
          q: 'What if something gets damaged?',
          a: 'We take great care with every item. In the rare event of damage, we offer compensation up to 10x the cleaning cost. Contact us immediately to file a claim.',
        },
        {
          q: 'Do you sort clothes by color?',
          a: 'Yes, all clothes are sorted by color and fabric type before washing to prevent any color bleeding or damage.',
        },
      ],
    },
    {
      category: 'Account and Orders',
      questions: [
        {
          q: 'How do I track my order?',
          a: 'You can track your order in real-time through our website using your Order ID, or through your account dashboard if you are logged in.',
        },
        {
          q: 'Can I modify or cancel my order?',
          a: 'You can modify or cancel your order up to 2 hours before the scheduled pickup time through your account or by contacting support.',
        },
        {
          q: 'Where can I find my Order ID?',
          a: 'Your Order ID is sent via email and SMS after booking. It is also available in your account dashboard under Order History.',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <details
                    key={faqIndex}
                    className="group bg-white rounded-2xl shadow-sm overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="font-semibold text-gray-900 pr-4">{faq.q}</h3>
                      <svg
                        className="w-5 h-5 text-gray-500 transform group-open:rotate-180 transition-transform flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* Still Need Help */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-8">
              Our support team is here to help you with any questions you may have.
            </p>
            <a
              href="/contact"
              className="inline-flex px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
