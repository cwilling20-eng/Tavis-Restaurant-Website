import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedDishes from '../components/FeaturedDishes';
import Parallax from '../components/Parallax';
import ReviewsPreview from '../components/ReviewsPreview';
import Location from '../components/Location';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedDishes />
      <Parallax />
      <ReviewsPreview />
      <Location />
    </>
  );
}
