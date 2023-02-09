import React from "react";
import { ISVG } from "../interface/interface";

const RetweetIcon: React.FC<ISVG> = ({ isRetweeted }) => {
  return (
    <svg
      width="21px"
      height="21px"
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      className={`${isRetweeted ? "retweeted" : ""}`}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1 4)"
      >
        <path d="m12.5 9.5 3 3 3-3" />
        <path d="m8.5.5h3c2.209139 0 4 1.790861 4 4v8" />
        <path d="m6.5 3.5-3-3-3 3" />
        <path d="m10.5 12.5h-3c-2.209139 0-4-1.790861-4-4v-8" />
      </g>
    </svg>
  );
};

export default RetweetIcon;
