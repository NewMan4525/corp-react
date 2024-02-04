//import logo from './logo.svg';
//import './App.css';

// import { set } from "./set";
// import { core } from "./core";

// import Background from "./components/background";
import Frame from "./components/frame";
import CommonContext from "./core/commonContext";
function App() {

  return (< div className="App" >
    <CommonContext>
      {/* <Background></Background> */}
      <Frame
        self=''
      />
    </CommonContext>

  </div>
  );
}

export default App;