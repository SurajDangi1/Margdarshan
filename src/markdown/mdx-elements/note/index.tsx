import { slugify } from "@/ui";
import { ReactNode } from "react";
export const Note = (props: { title: string; body: ReactNode }) => {
  return (
    <div id={slugify(props.title)}>
      <div className={` bg-surface-blue not-prose rounded-huge mt-5 p-8`}>
        <h2 className="heading-3 mb-6">{props.title}</h2>
        <div>{props.body}</div>
      </div>
    </div>
  );
};
