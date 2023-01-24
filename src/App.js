import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProjects} from "./redux/slices/projects";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects);

useEffect(() => {
  dispatch(fetchProjects());
  console.log(projects);
}, []);

  return (
    <>
    <Header />
    </>
  );
}

export default App;
