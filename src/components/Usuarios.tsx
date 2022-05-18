import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

let pagina = 1;

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState <Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
        
      cargarUsuarios(); 
    }, [])

   
    const cargarUsuarios = async () => {
        
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })
        
        
        if (resp.data.data.length > 0) {

            
            setUsuarios(resp.data.data);
            paginaRef.current++;
            

        } else {
            
            alert('No hay mas registros')
        }
        
        

    }

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

        <button 
            className='btn btn-primary'
            onClick={cargarUsuarios}
        >
            Siguientes
        </button>
    </>
  )
}
