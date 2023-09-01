import { useParams } from "react-router-dom"

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

    const NPM = useParams()

    console.log(NPM)
    return (
        <div>
            <div className="text-2xl">
                <h1>NPM: {mahasiswa.id}</h1>
                <h1>Nama : {mahasiswa.nama}</h1>
                <h1>Jenis Kelamin : {mahasiswa.jenis_kelamin}</h1>
                <h1>Alamat : {mahasiswa.alamat}</h1>
                <h1>Hobi : {mahasiswa.hobi.join(", ")}</h1>
            </div>
        </div>
    )
}
// const Mahasiswa = () => {
//     return <h3>Data Mahasiswa</h3>
    
// }

export default Detail