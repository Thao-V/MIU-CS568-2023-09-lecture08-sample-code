import { useOutlet } from "react-router-dom";
export default function Settings(){
  const outlet = useOutlet();
  return (
    <div>
      <p>Settings</p>
      {outlet}
    </div>
  )
}

