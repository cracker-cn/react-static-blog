import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "./views/Index"
import Group from "./views/Group"
import Article from "./views/Article"
import GroupArticle from "./views/GroupArticle"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>
  }, {
    path: "/g",
    element: <Group/>
  }, {
    path: "/a",
    element: <Article/>
  }, {
    path: "/ga",
    element: <GroupArticle/>
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
