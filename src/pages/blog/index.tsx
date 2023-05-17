import { HeroBanner } from "@/ui";
import React from "react";

const Blog = () => {
  return (
    <div>
      <HeroBanner
        padding={false}
        backgroundColor="cherry-300"
        className="min-h-[300px]"
      >
        <div className="container">
          <div className="text-center">
            <h1 style={{ fontSize: 40 }} className="mb-4 font-bold">
              MargDarshan Scholarships
            </h1>
            <h6 className="text-title-6 ">
              Paving the way for the youth of India
            </h6>
          </div>
        </div>
      </HeroBanner>
      <h2>Scholarship</h2>
    </div>
  );
};

export default Blog;
