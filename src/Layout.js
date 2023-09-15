import {createBrowserRouter, useNavigate, useOutlet, redirect} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Settings from './Settings';
import Languages from './Languages';

function Error1(){
  return <p>Error 1</p>
}
function Error2(){
  return <p>Error 2</p>
}
const myrouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error1/>,
    children: [
      {
        path:"about",
        element: <About/>,
      }
    ]
  },
  {
    path: "/settings",
    element: <Settings/>,
    errorElement: <p>My Error</p>,
    children: [
      {
        path: "languages/:preferedLanguage",
        element: <Languages/>,
        loader: async () => {
          if(true){
            return redirect('/login')
          }
        },
        
      }
    ]
  },
  {
    path: '/login',
    element: <p>Login</p>
  }
])

export default myrouter;
