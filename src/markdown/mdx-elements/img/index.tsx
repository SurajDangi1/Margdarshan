import { useArticleContext } from "@/markdown/context";
import Image, { ImageProps } from "next/image";
const Img = (props: ImageProps) => {
  const frontMatter = useArticleContext()!;

  const src = props.src.toString();

  return (
    <Image
      src={
        src.startsWith("http")
          ? src
          : `/blog-assets/${frontMatter?.slug}/${src}`
      }
      alt={props.alt}
      width={800}
      height={400}
      style={{
        aspectRatio: 2 / 1,
      }}
    />
  );
};

export default Img;
