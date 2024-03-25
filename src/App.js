import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Cart from './components/Cart';
import Layout from './components/layout';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
