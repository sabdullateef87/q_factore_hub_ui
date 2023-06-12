import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ({ children }: Props) {
  return (
    <div className="h-full flex justify-center items-center flex-col">{children}</div>
  );
}
