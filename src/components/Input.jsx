import { forwardRef } from "react";

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  const classes =
    "w-full p-1 border-solid rounded-sm border-stone-300 bg-stone-200 text-stone-600";
  return (
    <p className="flex flex-col gap-1 my-5">
      <label className="uppercase text-sm font-bold text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props}></textarea>
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
