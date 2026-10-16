"use client";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  showSkeleton?: boolean;
  containerClassName?: string;
}

/**
 * OptimizedImage Component
 *
 * A wrapper around Next.js Image with:
 * - Loading skeleton
 * - Error fallback
 * - Blur placeholder
 * - Lazy loading by default
 *
 * Usage:
 * ```tsx
 * <OptimizedImage
 *   src="/product.jpg"
 *   alt="Product"
 *   width={400}
 *   height={300}
 *   fallbackSrc="/placeholder.jpg"
 * />
 * ```
 */
export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/images/notfoundimage.png",
  showSkeleton = true,
  className = "",
  containerClassName = "",
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(src || fallbackSrc);
  const [hasErrored, setHasErrored] = useState(false);

  useEffect(() => {
    setImageSrc(src || fallbackSrc);
    setHasErrored(false);
    setIsLoading(true);
  }, [src, fallbackSrc]);

  return (
    <div className={`relative overflow-hidden ${containerClassName || className}`}>
      {/* Loading skeleton */}
      {showSkeleton && isLoading && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          aria-hidden="true"
        />
      )}

      <Image
        src={imageSrc}
        alt={alt}
        className={`
          transition-opacity duration-300
          ${isLoading ? "opacity-0" : "opacity-100"}
          ${className}
        `}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          if (!hasErrored && imageSrc !== fallbackSrc) {
            setHasErrored(true);
            setImageSrc(fallbackSrc);
          }
        }}
        loading="lazy"
        {...props}
      />
    </div>
  );
}

/**
 * ProductImage Component
 *
 * Optimized for product images with consistent sizing.
 */
export function ProductImage({
  src,
  alt,
  size = "medium",
  className = "",
  containerClassName = "",
}: {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
  className?: string;
  containerClassName?: string;
}) {
  const sizes = {
    small: { width: 150, height: 150 },
    medium: { width: 300, height: 300 },
    large: { width: 500, height: 500 },
  };

  const { width, height } = sizes[size];

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      containerClassName={`aspect-square w-full overflow-hidden rounded-lg ${containerClassName}`}
      className={`h-full w-full object-cover ${className}`}
      sizes={`(max-width: 768px) 100vw, ${width}px`}
    />
  );
}

/**
 * Avatar Component
 *
 * Optimized for user avatars with circular shape.
 */
export function Avatar({
  src,
  alt,
  size = 40,
  className = "",
}: {
  src?: string | null;
  alt: string;
  size?: number;
  className?: string;
}) {
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(alt)}&size=${size * 2}&background=dc2626&color=fff`;

  return (
    <OptimizedImage
      src={src || fallback}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
      fallbackSrc={fallback}
    />
  );
}

/**
 * HeroImage Component
 *
 * Full-width hero images with priority loading.
 */
export function HeroImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full h-[60vh] min-h-[400px] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
