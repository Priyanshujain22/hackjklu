import React from 'react';
import Image from "next/image";

// import styles from "./Gallery.module.css";

const Gallery = () => {
  const imageCount = 20;
  const imageList = Array.from(
    { length: imageCount },
    (_, index) => `/gallery/${index + 1}.jpg`
  );

  return (
    <div className={`mx-auto my-[2rem] md:my-[5rem]`}>
      <div className="flex flex-wrap">
        {imageList.map((image, index) => (
          <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 px-2 mb-4">
            <div className="relative rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-xl">
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                width={500}
                height={300}
                priority={index < 10}
                // placeholder="blur"
                // blurDataURL="/placeholder.jpg"
                className="rounded-lg object-cover responsive"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default Gallery