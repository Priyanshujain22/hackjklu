import React from 'react';
import Header from '../Header/Header';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const images = Array.from({ length: 18 }, (_, i) => ({
  src: `/galleryHome/${i + 1}.webp`,
  name: `Image ${i + 1}`,
}));

const GalleryHome = () => {
  return (
    <section className="pt-10">
      <h2 className="text-center my-10 relative bg-black/50">
        <Header text="Past Photos" />
      </h2>
      <div className="py-10">
        {Array.from({ length: 3 }).map((_, rowIdx) => (
          <InfiniteMovingCards
            key={rowIdx}
            items={images.slice(rowIdx * 6, (rowIdx + 1) * 6)}
            direction={rowIdx % 2 === 0 ? 'left' : 'right'}
            speed="slow"
            className="w-full"
          />
        ))}
      </div>
    </section>
  );
};

export default GalleryHome;
