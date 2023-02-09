import React from "react";
import { ISVG } from "../interface/interface";

const ReplyIcon: React.FC<ISVG> = ({ color }) => {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 42h-2l1.2-1.6c.8-1.1 1.3-2.5 1.6-4.2C10.8 33.9 8 29.6 8 24c0-8.6 6.5-14 17-14s17 5.4 17 14c0 8.8-6.4 14-17 14h-.7c-1.6 1.9-4.4 4-9.3 4zm10-30c-9.4 0-15 4.5-15 12 0 6.4 3.9 9.4 7.2 10.7l.7.3-.1.8c-.2 1.6-.5 3-1.1 4.2 3.3-.4 5.2-2.1 6.3-3.5l.3-.4H25c13.5 0 15-8.4 15-12C40 16.5 34.4 12 25 12z" />
    </svg>
  );
};

export default ReplyIcon;
