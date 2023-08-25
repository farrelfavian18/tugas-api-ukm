import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function FetchData(){
    const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://strapi-rygs.onrender.com/api/prodis')
    // .then(res => console.log(res))
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, []);

  return (
    <>
      <div className="App">
        <h3>Tugas API UKM Programming</h3>
      </div>
      <div className='container'>
        <div className='mt-3'>
            <h1>ID Prodi</h1>
            <h1>Nama_Prodi</h1>
            <h1>Kepala Prodi</h1>
            <h1>Sekretaris</h1>
            <table>
                <th>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </th>
            </table>
        </div>
      </div>
    </>
  )
}

export default FetchData
