import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="text-2xl">
      <h1>Ini Home</h1>
      <div>
        <button className="text-3xl font-bold underline" onClick={() => navigate("/prodi")}>Prodi</button>
      </div>
    </div>
  )
}

export default Home