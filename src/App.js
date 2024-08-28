import "./App.css";
import PageForm from "./components/form/pageForm";
import ColorScheme from "./components/theme";

function App() {


  return (
    <div>
      {/* This is to choose between diffrent theme */}
      <ColorScheme />

      {/* Main Form for pages */}
      <PageForm />
    </div>
  );
}

export default App;
