import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import Container from "../common/Container";
import { SectionDesc } from "../common/SectionDesc";
import { SectionTitle } from "../common/SectionTitle";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../../data/testimonials";
import { useEffect, useState } from "react";
import FadeUp from "../animations/FadeUp";

type StarRatingProp = {
  rating: number;
};

type TestimonialCardProps = {
  rating: number;
  testimony: string;
  name: string;
  location: string;
};

const StarRating = ({ rating }: StarRatingProp) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({
  rating,
  testimony,
  name,
  location,
}: TestimonialCardProps) => {
  return (
    <div className="bg-surface-2 rounded-lg shadow-md p-5 h-full flex flex-col gap-3 cursor-pointer">
      <StarRating rating={rating} />

      <p className="text-sm text-text-light">{testimony}</p>

      <div>
        <h3 className="font-bold text-text">{name}</h3>
        <p className="text-sm text-text-light">{location}</p>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <FadeUp>
      <section className="relative mb-8 py-4 bg-surface">
        <SectionTitle title="WHAT OUR CLIENTS SAY" />

        <Container
          vatiant="transparent"
          className="flex flex-col lg:flex-row gap-10"
        >
          <div className="lg:w-1/3">
            <SectionDesc
              title1="Trusted by Homeowners"
              title2="Across Ontario"
            />
          </div>

          <div className="lg:w-2/3">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {testimonials.map((t) => (
                  <motion.div
                    whileHover={{ y: 0, scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    key={t.name}
                    className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-2"
                  >
                    <TestimonialCard
                      rating={t.rating}
                      testimony={t.testimony}
                      name={t.name}
                      location={t.location}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {emblaApi?.scrollSnapList().map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi.scrollTo(index)}
                  className={`size-3 rounded-full transition-colors ${
                    index === selectedIndex ? "bg-primary" : "bg-divider"
                  }`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </FadeUp>
  );
}
