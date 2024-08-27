"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageModalProps {
  imageUrls: string[];
  initialIndex: number;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrls,
  initialIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
      <button
        onClick={onClose}
        className="absolute cursor-pointer top-14 right-28 text-white"
      >
        <Image
          src="/images/x-button.svg"
          alt="left-arrow"
          width={30}
          height={30}
        />
      </button>
      <button
        onClick={handlePrev}
        className="absolute flex items-center justify-center bg-white rounded-full h-14 w-14 cursor-pointer left-24 text-white"
      >
        <Image
          src="/images/leftArrow.svg"
          alt="left-arrow"
          width={15}
          height={15}
        />
      </button>
      <div className="max-w-full max-h-full flex justify-center items-center">
        <Image
          src={imageUrls[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          width={500}
          height={500}
          sizes="(max-width: 80%, height: 90%)"
        />
      </div>
      <button
        onClick={handleNext}
        className="absolute flex items-center justify-center cursor-pointer h-14 w-14 right-20 bg-white rounded-full text-white"
      >
        <Image
          src="/images/rightArrow.svg"
          alt="left-arrow"
          width={15}
          height={15}
        />
      </button>
    </div>
  );
};

export default ImageModal;
