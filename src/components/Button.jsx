export function Button({ children, ...props }) {
  return (
    <button
      className="px-2 py-2 text-xs md:text-base rounded-md bg-stone-500  text-stone-300 hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}
