import { useNavigate, useOutlet } from "react-router"
import { Link } from "react-router-dom";

export default function Home(){
  const outlet = useOutlet();
  const navigate = useNavigate();
  const navigateToLanguages = () => {
    navigate('/settings/languages/English?name=thao&id=123&address=fairfield', {state: {name: "thao"}});
  }
  return (
    <div>
      <h3>Home</h3>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/">Go Back</Link>
      {outlet}
      <button onClick={navigateToLanguages}>Goto English</button>
      <Link to={'/settings/languages/English?name=thao&id=123&address=fairfield'}>Link To Language</Link>
      
    </div>
  )
}