import React from "react";
import { motion } from "framer-motion";
type Props = {
  messages: string[];
  status: string;
};

const Message = (props: any) => {
  const [open, setOpen] = React.useState<boolean>(true);
  const processBackgroundColor = (state: string): string => {
    switch (state) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-400";
      default:
        return "bg-yellow-300";
    }
  };

  return (
    <motion.div
      onClick={() => setOpen(false)}
      initial={{ x: "100%" }}
      animate={{ x: "0%"}}
      className={` ${!open ? "hidden" : "block"} ${processBackgroundColor(
        props.state
      )} text-black w-1/2 laptop:w-[300px] min-h-[30px] shadow-sm p-2 absolute top-5 right-5`}
    >
      <span className="text-[12px] text-center">{props.message}</span>
    </motion.div>
  );
};

export default Message;
