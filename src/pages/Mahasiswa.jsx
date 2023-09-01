import { useParams } from "react-router-dom"
import { useState ,useEffect} from "react";
import axios from "axios";

function Detail(){
    
    const [data, setData] = useState(null);

    const fetchData = async () => {
    const res = await axios.get("https://strapi-rygs.onrender.com/api/prodis");
    console.log(res.data.data[0].attributes.prodi[0]);
    setData(res.data.data[0].attributes.prodi[0]);
  }

  useEffect(() => {
    fetchData()
  }, []);

    const {id} = useParams()

    // console.log(NPM)
    return (
        <div>
          <h3>NPM: {id}</h3>
          <h3>Nama: {id}</h3>
          <h3>Jenis Kelamin: {id}</h3>
          <h3>Alamat: {id}</h3>
          <h3>Hobi: {id}</h3>
        </div>
    )
}
// const Mahasiswa = () => {
//     return <h3>Data Mahasiswa</h3>
    
// }

export default Detail