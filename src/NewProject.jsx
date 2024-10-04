import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-500">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-4 py-2 rounded-md bg-stone-600 text-stone-100 hover:bg-stone-500 hover:text-stone-50">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label={"Title"} />
        <Input textarea label={"Description"} />
        <Input label={"Due Date"} />
      </div>
    </div>
  );
}
