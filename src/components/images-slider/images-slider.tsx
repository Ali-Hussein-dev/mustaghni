import Image from "next/image";
import css from "./images-slider.module.css";

const list = [
  "/slider/img-1.jpg",
  "/slider/img-3.png",
  "/slider/img-4.jpeg",
  // "/slider/img-5.jpg",
  // "/slider/img-6.jpg",
  "/slider/img-7.jpg",
  "/slider/img-10.jpg",
  "/slider/img-14.jpg",
  "/slider/img-11.jpg",
  "/slider/img-12.jpg",
  "/slider/img-13.jpg",
  "/slider/img-15.jpg",
];
//======================================
export const ImagesSlider = () => {
  return (
    <div className="relative mx-auto w-full max-w-5xl pb-20 pt-12">
      <div className={`${css.slider} relative w-full overflow-hidden`}>
        <div className={`${css["slide-track"]} w-full items-center`}>
          {list.map((src, i) => (
            <Image
              width={200}
              height={200}
              key={i}
              src={src}
              alt="Image"
              className="h-full rounded-xl object-fill"
            />
          ))}
          {list.map((src, i) => (
            <Image
              width={200}
              height={200}
              key={i}
              src={src}
              alt="Image"
              className="h-full rounded-xl object-fill"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
