import { useState } from "react";
import NewProject from "./components/NewProject";
import { NoProjectSelected } from "./components/NoProjectSelected";
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

  console.log("projectsState", projectsState);

  let projectSelected;
  if (projectsState.selectedProjectId === undefined) {
    projectSelected = (
      <NoProjectSelected onAddProject={handleStartAddProject} />
    );
  } else if (projectsState.selectedProjectId === null) {
    projectSelected = <NewProject onAdd={handleAddProject} />;
  }
  return (
    <main className="h-screen flex my-8 gap-8">
      <Sidebar
        projectsState={projectsState}
        onAddProject={handleStartAddProject}
      />
      {projectSelected}
    </main>
  );
}

export default App;
