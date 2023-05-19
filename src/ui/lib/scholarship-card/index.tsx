import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

export interface ScholarshipsProps {
  image: string;
  deadlineDate: string;
  scholarshipName: string;
  scholarshipDescription: string;
  slug: string;
}

export const ScholarshipCard = ({
  image,
  deadlineDate,
  scholarshipName,
  scholarshipDescription,
  slug,
}: ScholarshipsProps) => {
  return (
    <Link href={`scholarship/${slug}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer rounded-large group min-h-[560px]">
        <div className="overflow-hidden">
          <Image
            className="group-hover:scale-105 transition-all duration-500 cursor-pointer"
            src={image}
            alt={scholarshipName}
            height={400}
            width={400}
            style={{
              aspectRatio: 1 / 1,
              objectFit: "cover",
            }}
          />
        </div>

        <div className="px-6 py-4">
          <p className="text-gray-700 text-body-3 mb-2">
            Deadline Date : {deadlineDate}
          </p>
          <LinesEllipsis
            text={scholarshipName}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className="font-bold text-title-7 mb-2"
          />
          <LinesEllipsis
            text={scholarshipDescription}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className="text-gray-700 text-body-3"
          />
        </div>
      </div>
    </Link>
  );
};
