import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function FetchData(){
    const [data, setData] = useState([])
    // const [angkatan, setAngkatan] = useState([])
    // const [tipeKelas, setTipeKelas] = useState([])
    // const [mahasiswa, setMahasiswa] = useState([])

    useEffect(() => {
        // axios.get('https://strapi-rygs.onrender.com/api/prodis')
        axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(res => console.log(res))
        .then(res => setData(res.data))
        // .then(res => setAngkatan(res.data))
        // .then(res => setTipeKelas(res.data))
        // .then(res => setMahasiswa(res.data))
        .catch(err => console.log(err))
    }, []);

  return (
    <>
      <div className="App">
        <h3>Tugas API UKM Programming</h3>
      </div>
      <div className='container'>
        <div className='mt-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index) => {
                            return <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
      </div>
      
    </>
  )
}

export default FetchData
