import { useEffect, useRef, useState } from "react";

const LazyImage = ({ src, alt, className = "", style = {}, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    if (!image || !src) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(image);
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(image);

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      {...props}
      ref={imageRef}
      src={isVisible ? src : undefined}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0.3,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    />
  );
};

export default LazyImage;
