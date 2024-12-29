import React from 'react';
import Header from '../Header/Header';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const images = Array.from({ length: 18 }, (_, i) => ({
  src: `/galleryHome/${i + 1}.jpg`,
  name: `Image ${i + 1}`,
}));

const GalleryHome = () => {
  return (
    <section className="p-8 rounded-lg">
      <h2 className="text-center mb-10">
        <Header text="Photos from Past" />
      </h2>
      <div className="">
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
