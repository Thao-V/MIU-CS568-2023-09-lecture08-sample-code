import './App.css';
import {RouterProvider} from 'react-router-dom';

import myrouter from './Layout';

function App() {
  return (
    <RouterProvider router={myrouter}/>
  );
}

export default App;
