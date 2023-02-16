import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";

type Props = {
  data: string[];
};

const TextChanger = (props: Props) => {
  const [index, setIndex] = useState<number>(0);

  
  const changeKeyWord = () => {
    if (index == props.data.length - 1) {
      setIndex((prev) => (prev = 0));
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(changeKeyWord, 10000);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <span
      className="text-yellow-500 transition duration-1000 ease-in-out"
    >
      {props.data[index]}{" "}
    </span>
  );
};

export default TextChanger;
