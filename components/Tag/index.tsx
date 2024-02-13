import React from "react";

type Props = {
  tag: string;
};

export default function index({ tag }: Props) {
  return (
    <p className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 gunmetal-tag  rounded-full my-2 mx-1">
      {tag}
    </p>
  );
}
