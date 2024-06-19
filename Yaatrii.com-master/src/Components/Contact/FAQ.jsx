// FAQ.js
import React from 'react';
import './FAQ.css';

const FAQ = () => {
    // Assuming FAQs are fetched from an API or stored in an array
    const faqs = [
        { id: 1, question: 'How can I access my booking details?', answer: 'Once your booking is confirmed, you will receive a confirmation email containing all the relevant details, including itinerary information and booking reference numbers. You can also log in to your account on our website to view and manage your bookings......' },
        { id: 2, question: 'How do I book my travel arrangements through your website?', answer: 'You can easily book flights, hotels, by using our intuitive search and booking platform. Simply enter your travel details, browse the options, and follow the prompts to complete your reservation securely.......' },
        { id: 3, question: 'What is your cancellation policy?', answer: 'Cancellation policies vary depending on the service provider (e.g., airline, hotel, car rental agency) and the type of booking you have made You can find detailed information about cancellation fees and deadlines during the booking process or by reviewing your booking confirmation.....' },
        { id: 4, question: 'How can I provide feedback or share my travel experience?', answer: 'We welcome feedback from our customers! You can leave reviews and ratings for the services you have used through our website. Additionally, you can contact our customer support team to provide feedback or share your travel experience directly with us.....' },
        // More FAQs...
    ];

    return (
        <div className="faq">
            <h3>FAQs</h3>
            {faqs.map(faq => (
                <div key={faq.id}>
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                </div>
            ))}
        </div>
    );
}

export default FAQ;
