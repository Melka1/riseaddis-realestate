import { CldImage } from "next-cloudinary";

function ImageFromCloudinary({ src, alt, back, width, aspectRatio }) {
  return (
    <CldImage
      width={width || "640"}
      height={width / (aspectRatio || 1.6) || "240"}
      crop={"fill"}
      src={src}
      alt={alt}
      style={{
        objectFit: "contain",
        position: back ? "absolute" : "relative",
        top: 0,
        left: 0,
      }}
    />
  );
}

export default ImageFromCloudinary;
