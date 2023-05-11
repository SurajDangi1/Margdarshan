import H1 from "./h1";
import H2 from "./h2";
import Img from "./img";
import { Note } from "./note";
import Youtube from "./youtube";
import { Button } from "@/ui";
export const mdxElements = {
  Youtube: Youtube,
  h2: H2,
  Img,
  h1: H1,
  Button: Button,
  a: (
    props: React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a {...props} className="text-cherry-300" />
  ),
  Note: Note,
};
