import "./App.css";
import Heading from "./components/heading";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Message from "./components/Message";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <>
      <Heading />
      <Message />
      <CurrentTime />
    </>
  );
}

export default App;
