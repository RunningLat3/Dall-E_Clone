import React, { FC } from "react";

interface HeadingProps {
  title: string;
  subTitle: string;
}

const Heading: FC<HeadingProps> = ({ ...props }) => {
  return (
    <div>
      <h1 className="font-extrabold text-[#222328] text-[32px]">
        {props.title}
      </h1>
      <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
        {props.subTitle}
      </p>
    </div>
  );
};

export default Heading;
