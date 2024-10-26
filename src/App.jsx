import { useState } from "react";
import NewProject from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
import { SelectedProject } from "./components/SelectedProject";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((pre) => {
      return {
        ...pre,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(dataProject) {
    setProjectsState((pre) => {
      const projects = [...pre.projects, dataProject];
      return {
        ...pre,
        selectedProjectId: undefined,
        projects: projects,
      };
    });
  }

  function handleSelectProject(selectedId) {
    setProjectsState((pre) => {
      return {
        ...pre,
        selectedProjectId: selectedId,
      };
    });
  }

  let content;
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else {
    const project = projectsState.projects.find(
      (item) => item.id === projectsState.selectedProjectId
    );
    content = <SelectedProject project={project} />;
  }
  return (
    <main className="h-screen flex my-8 gap-8">
      <Sidebar
        projectsState={projectsState}
        onAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
