import Sidebar from '@/components/Sidebar/sidebar';
import React from 'react'

const page = () => {
  return (
    <div className='columns-2'>
        <Sidebar/>
        <span>Clientes</span>
        <div>
        <form>
            <label htmlFor="Nombre">Nombre:</label>
            <input type="text" placeholder='Nombre'/>
            <label htmlFor="Domicilio">Domicilio:</label>
            <input type="text" placeholder='Domicilio'/>
            <label htmlFor="Localidad">Localidad:</label>
            <input type="text" placeholder='Localidad'/>
            <label htmlFor="Provincia">Provincia:</label>
            <input type="text" placeholder='Provincia'/>
            <label htmlFor="Codigo postal">Codigo postal:</label>
            <input type="text" placeholder='Codigo postal'/>
            <label htmlFor="CUIT">C.U.I.T:</label>
            <input type="text" placeholder='CUIT'/>
            <label htmlFor="Telefono">Telefono:</label>
            <input type="text" placeholder='Telefono'/>
            <button>Guardar</button>
        </form>
        </div>
    </div>
  )
}

export default page;