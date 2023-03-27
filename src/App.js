import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import Form from "./Form";
import Useref from "./Useref";
import A from "./A";
import Reducer from "./Reducer";
import Api from "./Api";
import CourseList from "./thoughtIndustries/thoughtIndustriesApi";

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      {/* <A /> */}
      {/* <Home />
      <Useref /> */}
      {/* <Profile text="props passed" /> */}
      {/* <Profile text={{ name: "peter" }} data="profile data" /> */}
      {/* <Form /> */}
      {/* <Api />
      <Reducer /> */}
      <CourseList />
    </div>
  );
}

export default App;
