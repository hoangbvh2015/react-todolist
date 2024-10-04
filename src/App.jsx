import NewProject from "./NewProject";
import Sidebar from "./Sidebar";

function App() {
  return (
    <main className="h-screen flex my-8 gap-8">
      <Sidebar />
      <NewProject />
    </main>
  );
}

export default App;
