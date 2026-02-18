import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    date: "November 2024",
    text: "Incredible studio experience! The team at Fresco was professional, welcoming, and made the recording process seamless. The sound quality was amazing. Highly recommend to anyone looking for top-tier recording in Pensacola.",
  },
  {
    name: "Marcus T.",
    rating: 5,
    date: "October 2024",
    text: "Best recording studio in the area, hands down. State-of-the-art equipment and an incredibly talented engineering team. My voiceover project came out better than I ever imagined.",
  },
  {
    name: "Janelle R.",
    rating: 5,
    date: "September 2024",
    text: "Fresco Recording is world-class. The vibe in the studio is relaxed and creative, which really helped me perform at my best. The final product was absolutely stunning.",
  },
  {
    name: "David K.",
    rating: 5,
    date: "August 2024",
    text: "We used Fresco for our audiobook project and could not be happier. The booth is pristine, the team is patient and detail-oriented, and the turnaround was super fast.",
  },
  {
    name: "Alicia W.",
    rating: 5,
    date: "July 2024",
    text: "Professional from start to finish. The engineers truly understand music and help bring out the best in every session. I've recorded at many studios — Fresco is the best.",
  },
  {
    name: "Tony B.",
    rating: 5,
    date: "June 2024",
    text: "Came in for ADR work on a short film and was blown away by the efficiency and quality. The team knew exactly what we needed and delivered flawlessly. Will be back for sure.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
      />
    ))}
  </div>
);

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm uppercase tracking-widest mb-4">
            Google Reviews
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            WHAT OUR
            <span className="text-gradient block">CLIENTS SAY</span>
          </h2>
          {/* Google rating summary */}
          <div className="inline-flex items-center gap-3 bg-card/50 border border-border/50 rounded-xl px-6 py-3 backdrop-blur-sm">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-display text-2xl text-foreground">5.0</span>
            <span className="text-muted-foreground font-body text-sm">on Google</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-lift flex flex-col gap-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/40" />

              {/* Review text */}
              <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>

              {/* Reviewer info */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div>
                  <p className="font-display text-lg text-foreground">{review.name}</p>
                  <p className="text-muted-foreground font-body text-xs">{review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=Fresco+Recording+Services+Pensacola"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            View all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};
