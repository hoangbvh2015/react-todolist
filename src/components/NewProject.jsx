import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onSave }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const date = new Date();
    const dataProject = {
      id: date.getTime(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      duaDate: dueDateRef.current.value,
    };
    onSave(dataProject);
  }
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-500">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md bg-stone-600 text-stone-100 hover:bg-stone-500 hover:text-stone-50"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label={"Title"} />
        <Input ref={descriptionRef} textarea label={"Description"} />
        <Input ref={dueDateRef} label={"Due Date"} />
      </div>
    </div>
  );
}
