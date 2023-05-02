import { twMerge } from "tailwind-merge";
import styles from "./hero-banner.module.scss";

export interface HeroBannerProps {
  backgroundColor?: string;
  children?: any;
  backgroundImage?: any;
  padding?: boolean;
  height?: number;
  className?: string;
}

export const HeroBanner = ({ padding = true, ...props }: HeroBannerProps) => {
  return (
    <div className={`${styles.headingFrame}`}>
      <div
        className={twMerge(
          `  ${padding && `pt-24 lg:pt-32`} grid place-items-center  bg-${
            props.backgroundImage ? "" : props.backgroundColor
          } ${props.className}`
        )}
        style={{
          ...(props.backgroundImage
            ? {
                backgroundImage: `url(${props.backgroundImage})`,
              }
            : {}),
          backgroundSize: "cover",
        }}
      >
        <div className={`${padding ? "container" : ""} relative`}>
          {props.children}
        </div>
      </div>
    </div>
  );
};
