import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProjects} from "./redux/slices/projects";

function App() {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.items);

useEffect(() => {
  dispatch(fetchProjects());
  console.log(projects);
}, []);

  return (
    <>AAAAA</>
  );
}

export default App;
