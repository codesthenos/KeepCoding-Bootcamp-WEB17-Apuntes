import clsx from "clsx";

import "./Textarea.css";
import { ComponentProps, forwardRef } from "react";

type Props = ComponentProps<"textarea">;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <div className={clsx("textarea", className)}>
        <textarea className="textarea-input" {...props} ref={ref} />
      </div>
    );
  },
);

export default Textarea;
