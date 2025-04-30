import React from "react";

import './Testimonials.sass';

const userReviews = [
    {
        username: "User 1",
        review: "Convenient tool even for bery beginners!"
    },
    {
        username: "User 2",
        review: "L'application est si joli ! Finalement, je peux apprendre ukrainien."
    },
    {
        username: "User 3",
        review: "Круте місце: просто вибирай мову і вчи в своє задоволення."
    },
]

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">
            <h2 className="testimonials__title">Testimonials</h2>
            <div className="testimonials__reviews">
                {userReviews.map((review) => (
                    <div className="review">
                        <h3 className="review__username">{review.username}</h3>
                        <p className="review__body">{review.review}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;