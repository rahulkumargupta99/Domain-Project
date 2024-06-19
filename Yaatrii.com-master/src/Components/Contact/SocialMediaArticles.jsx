// SocialMediaArticles.js
import React from 'react';
import './SocialMediaArticles.css';

const SocialMediaArticles = () => {
    // Assuming articles are fetched from an API or stored in an array
    const articles = [
        { id: 1, title: 'Top Travel Destinations for 2024', content: 'Explore the top travel destinations for 2024 and plan your next adventure.', image: 'https://thumbs.dreamstime.com/b/sunset-time-airplane-wing-inside-travel-thaila-thailand-photo-applied-to-tourism-operators-traveling-concept-87276539.jpg?w=768' },
        { id: 2, title: 'Travel Safety Tips', content: 'Stay safe during your travels with these essential travel safety tips.', image: 'https://img.freepik.com/free-vector/flat-travel-background_23-2148051445.jpg' },
        { id: 3, title: 'Packing Guide for Your Next Trip', content: 'Learn how to pack efficiently and make the most of your luggage space for your upcoming trip.', image: 'https://m.media-amazon.com/images/I/61DWMVlmgbL._AC_UF1000,1000_QL80_.jpg' },
    ];

    return (
        <div className="social-media-articles">
            <h3>Social Media Articles</h3>
            {articles.map(article => (
                <div key={article.id} className="article">
                    <img src={article.image} alt={article.title} />
                    <div className="article-content">
                        <h4>{article.title}</h4>
                        <p>{article.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SocialMediaArticles;
