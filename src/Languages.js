import { useLoaderData, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Languages() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const params = useParams();
  console.log(params.preferedLanguage);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('name'));

  const data = useLoaderData();
  console.log(data);
  const goHome = () => {
    navigate("/about");
  };
  return (
    <div>
      <p>Languages</p>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
}
