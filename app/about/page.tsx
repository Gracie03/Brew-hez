import Header from '@/components/LayoutComponents/Header';
import React from 'react';

function About() {
    return (
        <section className="mb-20">
            <Header
                title="About"
                intro="Discover the story, vision, and values behind BrewHez Coffee Shop."
            />
            <div className="flex flex-col items-center gap-6 px-4 sm:px-10 md:px-20 py-10 text-base sm:text-lg leading-relaxed text-left max-w-6xl mx-auto">

                <article>
                    BrewHez was founded with one simple mission: to make exceptional coffee accessible to everyone, whether you are at home, at work, or on the move. What began as a small idea shared between friends has grown into a modern coffee brand rooted in community, convenience, and quality. Our journey started in 2021 with a deep belief that coffee is more than just a beverage — it is a ritual, a source of comfort, and a way to connect. Whether you visit us in person or place your order online, we’re committed to delivering that same warmth in every cup.
                </article>

                <article>
                    We carefully source our beans from sustainable farms across Africa and South America, partnering with ethical growers who care about quality as much as we do. Each batch is roasted locally to preserve its natural flavor and aroma, then expertly brewed by our baristas — or delivered straight to your door when you order through our platform. With just a few clicks, you can explore our full menu, customize your drinks, and get your favorite coffee delivered fast and fresh.
                </article>

                <article>
                    BrewHez is more than coffee — it is a lifestyle. We have built a digital café experience that brings our signature drinks, handcrafted pastries, and cozy vibe into your everyday routine. Whether you are taking a break at the office or relaxing at home, we make it easy to enjoy premium coffee without the wait. And for our local customers, our pick-up and delivery services ensure your favorites are always just around the corner.
                </article>

                <article>
                    Our team is passionate about making your coffee experience smooth, satisfying, and personal. We’re here to recommend blends, answer questions, and deliver not just a drink, but a moment of joy. We also continue to support local artisans by featuring Nigerian-made products and art in our café and online store.
                </article>

                <article>
                    At BrewHez, we believe good coffee should be convenient, crafted with care, and shared with community. Whether it’s your first time ordering or you’re a loyal regular, thank you for choosing us. We’re proud to be part of your daily grind — literally.
                </article>

                <article>
                    Order now, and let us bring the BrewHez experience straight to your doorstep.
                </article>
            </div>
        </section>
    );
}

export default About;
