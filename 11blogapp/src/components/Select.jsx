import React, { useId } from "react";

function Select({ options, label, className, ...props }, ref) {
  const id = useId();

  return <div className="w-full">Select</div>;
}

export default React.forwardRef(Select);
