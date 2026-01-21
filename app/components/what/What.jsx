"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import "./what.css"

const testimonials = [
    {
        id: 1,
        quote: "Quincy is an outstanding frontend developer I've worked with on numerous projects. His creativity, attention to detail, and reliability make him a valuable asset to any team. I've recommended him for other projects, and he consistently delivers exceptional results, earning praise from clients and colleagues alike.",
        name: "Maro Orode",
        role: "CTO Novaxa Technologies",
        image: "https://res.cloudinary.com/dha7gjz6y/image/upload/v1768925693/maro_zqcmy4.webp"
    },
    {
        id: 2,
        quote: "Quincy is a good writer. highly recommended.",
        name: "Ankur Tyagi",
        role: "Developer Marketer ",
        image: "https://res.cloudinary.com/dha7gjz6y/image/upload/v1768925693/Ankur_pics_upg8wd.jpg"
    },
    {
        id: 3,
        quote: "⭐⭐⭐⭐⭐ 5-star rating on Upwork Freelance project completed successfully (no written review)",
        name: "Maksym Blank",
        role: "Recruiter Blank Canvas",
        image: "https://res.cloudinary.com/dha7gjz6y/image/upload/v1768925693/blank_pics_stzin5.webp"
    }
];

const What = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-swipe every 2 seconds
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <h2 className="testimonials-title">What They Say</h2>

                <div
                    className="testimonials-carousel"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Arrows */}
                    <button
                        className="carousel-arrow carousel-arrow-left"
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    {/* Testimonial Card */}
                    <div className="testimonial-card">
                        <div className="testimonial-quote">
                            <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z" />
                            </svg>
                            <p>{testimonials[currentIndex].quote}</p>
                        </div>
                        <div className="testimonial-author">
                            <Image
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                width={50}
                                height={50}
                                className="author-image"
                            />
                            <div className="author-info">
                                <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                                <p className="author-role">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                    </div>

                    <button
                        className="carousel-arrow carousel-arrow-right"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToTestimonial(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default What;