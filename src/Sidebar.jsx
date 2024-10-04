export default function Sidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        My Projects
      </h2>
      <div>
        <button className="px-2 py-2 text-xs md:text-base rounded-md bg-stone-500  text-stone-300 hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
