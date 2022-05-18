import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';


export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState <Usuario[]>([])

    useEffect(() => {
      
        //Llamar al API
        reqResApi.get<ReqResListado>('/users').then( resp => {
            setUsuarios(resp.data.data);
        } ).catch( err => console.log(err) )
      
    }, [])

    const renderItem = (usuario: Usuario) => {

        return (

            <tr key={usuario.id.toString()}>
                    <th>
                        <img src={usuario.avatar} 
                             alt={usuario.first_name} 
                             style={{
                                 width:35,
                                 borderRadius:100
                             }}
                        />
                    </th>
                    <th>{usuario.first_name} {usuario.last_name}</th>
                    <th>{usuario.email}</th>
                </tr>

        )


    }
    

  return (
    <>
        <h3>Usuarios:</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>email</th>
                </tr>

            </thead>
            <tbody>
                {usuarios.map( usuario => renderItem(usuario) )}
            </tbody>
        </table>

        <button className='btn btn-primary'>
            Siguientes
        </button>
    </>
  )
}
