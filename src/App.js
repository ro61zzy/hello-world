import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import LifecycleB from "./components/LifecycleB";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";

function App() {
  return (
    <div className="App">
      <ParentComp />
      {/*<Table />
      <FragmentDemo />
      <LifecycleA />
      <Form />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <Stylesheet primary={true} />
      <NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <ClassClick />
      <FunctionClick />
      <Counter />
      <Message />
      <Greet name="Wacu" anotherName="Wetu">
        <p>This is children props</p>
      </Greet>
      <Greet name="Wangu" />
      <Greet name="Msupuu" />
      <Welcome name="Zion" anotherName="Baby" />
      <Welcome name="Wangu" anotherName="Hellow" />
      <Hello />
      */}
    </div>
  );
}

export default App;
