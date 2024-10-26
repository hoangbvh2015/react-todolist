import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
  const modal = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const title = titleRef.current.value?.trim();
    const description = descriptionRef.current.value.trim();
    const dueDate = dueDateRef.current.value.trim();
    if (!title || !description || !dueDate) {
      modal.current.open();
      return;
    }
    const date = new Date();
    const dataProject = {
      id: date.getTime(),
      title,
      description,
      dueDate,
    };
    onAdd(dataProject);
  }
  return (
    <>
      <Modal ref={modal} />
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
          <Input ref={dueDateRef} type="date" label={"Due Date"} />
        </div>
      </div>
    </>
  );
}
