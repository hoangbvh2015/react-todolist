import { Button } from "./Button";

export default function Sidebar({ projectsState, onAddProject }) {
  const projects = projectsState?.projects ?? [];
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        My Projects
      </h2>
      <div>
        <Button onClick={onAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full px-2 py-2 rounded-sm text-left text-stone-300 hover:text-stone-200 hover:bg-stone-600">
              {project.title}
            </button>
          </li>
        ))}
      </ul>

      <ul></ul>
    </aside>
  );
}
