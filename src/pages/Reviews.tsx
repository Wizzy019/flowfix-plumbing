import { FcGoogle } from "react-icons/fc";
import FadeUp from "../components/animations/FadeUp";
import Container from "../components/common/Container";
import { Desc } from "../components/common/SectionDesc";
import { SectionTitle } from "../components/common/SectionTitle";
import { StarRating } from "../components/home/Testimonials";
import useEmbla from "../useEmbla";
import { FaCrown, FaFacebook } from "react-icons/fa";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageSquareCheck,
} from "lucide-react";
import { reviews, serviceReviews } from "../data/testimonials";
import { type IconType } from "react-icons";
import { Button } from "../components/common/Button";
import ReviewImg from "../assets/images/drop-review.jpg";
import { EmergencyCTA } from "../components/home/EmergencyCTA";

const ratingDistribution = [
  { stars: 5, percentage: 92 },
  { stars: 4, percentage: 6 },
  { stars: 3, percentage: 1 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 0 },
];

const reviewSources = [
  {
    name: "Google",
    rating: 4.9,
    icon: FcGoogle,
    iconColor: "",
  },
  {
    name: "Facebook",
    rating: 4.8,
    icon: FaFacebook,
    iconColor: "text-primary",
  },
  {
    name: "HomeStars",
    rating: 4.9,
    icon: FaCrown,
    iconColor: "text-[#F59E0B]",
  },
];

type ReviewCardProps = {
  rating: number;
  review: string;
  name: string;
  location: string;
  source: IconType;
  iconColor?: string;
};

const ReviewCard = ({
  rating,
  review,
  name,
  location,
  source: Icon,
  iconColor,
}: ReviewCardProps) => {
  return (
    <div className="bg-surface-2 border border-border rounded-lg shadow-md p-5 h-full flex flex-col gap-3 cursor-pointer">
      <StarRating rating={rating} />

      <p className="text-sm text-text-light">{review}</p>

      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-text">{name}</h3>
          <p className="text-sm text-text-light">{location}</p>
        </div>
        <Icon size={20} className={`${iconColor}`} />
      </div>
    </div>
  );
};

const Reviews = () => {
  const { emblaRef, emblaApi, selectedIndex, scrollNext, scrollPrev } =
    useEmbla();

  return (
    <section className="bg-background">
      <SectionTitle title="REVIEWS" />
      <FadeUp>
        <Container
          vatiant="transparent"
          className="flex flex-col md:flex-row gap-4"
          children={
            <>
              <div className="flex-1 text-text flex flex-col gap-2">
                <Desc text="What Our Clients Say" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto, accusantium odio laudantium illo doloremque atque optio
                  et harum id libero quis magnam dolorum nesciunt distinctio
                  pariatur consequatur.
                </p>
              </div>

              <div className="bg-surface p-4 flex flex-col flex-1 items-center gap-4">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex flex-col items-center gap-1.5 cursor-pointer">
                    <p className="font-extrabold">
                      <span className="font-extrabold text-4xl text-primary">
                        4.9
                      </span>{" "}
                      / 5
                    </p>
                    <StarRating rating={5} />
                    <h4 className="text-xs font-extrabold tracking-tighter">
                      Based on 100+ reviews
                    </h4>
                  </div>
                  <div>
                    {ratingDistribution.map((rating) => (
                      <div
                        key={rating.stars}
                        className="flex items-center gap-3"
                      >
                        <p className="">
                          <span className="w-4 text-sm mr-0.5">
                            {rating.stars}
                          </span>
                          <span className="text-yellow-500">★</span>
                        </p>

                        <div className="h-2 w-48 flex-1 rounded-full bg-border overflow-hidden">
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${rating.percentage}% ` }}
                          />
                        </div>

                        <span className="w-10 text-sm text-text-light">
                          {rating.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center flex-wrap">
                  {reviewSources.map((source) => (
                    <div
                      key={source.name}
                      className="border border-border text-sm py-2 px-4 flex-1 flex items-center gap-3"
                    >
                      <source.icon className={`size-8 ${source.iconColor}`} />
                      <h3 className="font-bold flex flex-col">
                        <span className="font-extrabold tracking-tight">
                          {source.name}
                        </span>
                        <span className="tracking-widest">{source.rating}</span>
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </>
          }
        />
      </FadeUp>
      <FadeUp>
        <section className="bg-surface py-4">
          <SectionTitle title="What Our Customers Are Saying" />
          <Container
            vatiant="surface"
            className=""
            children={
              <>
                <div className="flex items-center gap-2 md:hidden">
                  <button
                    onClick={scrollPrev}
                    className="border rounded-full border-primary"
                  >
                    <ChevronLeft size={25} className="text-primary" />
                  </button>
                  <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex">
                      {reviews.map((review) => (
                        <div key={review.name} className="min-w-full px-2">
                          <ReviewCard
                            name={review.name}
                            location={review.location}
                            rating={review.rating}
                            review={review.review}
                            source={review.source}
                            iconColor={review.iconColor}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={scrollNext}
                    className="border rounded-full border-primary"
                  >
                    <ChevronRight size={25} className="text-primary" />
                  </button>
                </div>
                <div className="flex justify-center gap-2 mt-6 md:hidden">
                  {emblaApi?.scrollSnapList().map((_, index) => (
                    <button
                      key={index}
                      className={`size-3 rounded-full transition-colors ${
                        index === selectedIndex ? "bg-primary" : "bg-divider"
                      }`}
                    />
                  ))}
                </div>

                {/* DESKTOP */}
                <div className="hidden md:grid grid-cols-3">
                  {reviews.map((review) => (
                    <div key={review.name}>
                      <ReviewCard
                        name={review.name}
                        location={review.location}
                        rating={review.rating}
                        review={review.review}
                        source={review.source}
                        iconColor={review.iconColor}
                      />
                    </div>
                  ))}
                </div>
              </>
            }
          />
        </section>
      </FadeUp>
      <FadeUp>
        <section className="mb-6 py-4 bg-surface">
          <div>
            <SectionTitle title="REVIEWS BY SERVICE" />
            <Container
              vatiant="transparent"
              className="flex flex-wrap items-center justify-evenly gap-4"
              children={
                <>
                  {serviceReviews.map((review) => (
                    <div className="w-35 py-1 px-4 border border-border text-text rounded flex flex-col items-center gap-2">
                      <review.icon size={24} className="text-primary" />
                      <h3 className="text-center font-bold ">{review.title}</h3>
                      <StarRating rating={review.rating} />
                      <span className="inline-flex">
                        <h4 className="font-bold">{review.rating}</h4>
                        <p>({review.reviews})</p>
                      </span>
                    </div>
                  ))}
                </>
              }
            />
          </div>
        </section>
      </FadeUp>
      <FadeUp>
        <section className="bg-background px-6 md:px-4">
          <Container
            vatiant="transparent"
            className="flex flex-col md:flex-row items-center justify-between mx-auto rounded-xl gap-4"
            children={
              <>
                <div className="flex ">
                  <MessageSquareCheck
                    size={40}
                    className="text-primary mb-4 md:mr-4"
                  />
                  <span>
                    <h2 className="font-bold text-3xl mb-2 md:px-auto">
                      Had a great experince with our team?
                    </h2>
                    <p className="">
                      We would love to hear from you and help others in the
                      community
                    </p>
                  </span>
                </div>
                <div className="w-full md:w-100 flex flex-col items-center md:flex-row gap-3">
                  <Button
                    text="Leave a  Review"
                    icon={ArrowRight}
                    className="w-full h-20 bg-primary text-white p-4 text-xl font-bold flex-row-reverse"
                  />
                </div>
                <div className="hidden md:flex">
                  <img src={ReviewImg} className="w-150 h-50" />
                </div>
              </>
            }
          />
        </section>
      </FadeUp>
      <EmergencyCTA />
    </section>
  );
};

export default Reviews;
