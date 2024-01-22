import Image, { type ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

//======================================
export const ImageContainer = ({
  cn = "",
  ...rest
}: ImageProps & { cn?: string }) => {
  return (
    <div className="">
      {/* <Triangle /> */}
      <div className="triangle animate-bounce"></div>
      <Image
        className={twMerge(
          "rounded-3xl border border-solid border-gray-200 object-contain px-1",
          cn,
        )}
        quality={60}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8fvdXPQAIcAMvy5dPawAAAABJRU5ErkJggg=="
        {...rest}
        alt={"image"}
      />
    </div>
  );
};
