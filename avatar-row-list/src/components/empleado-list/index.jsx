import React from 'react'
import EmpleadoRow from '../empleado-row'

class EmpleadoList extends React.Component {
    render(){
        return(
            <ul className='media-list'>
                {
                    // map es una funcion propia de javascript, que se emplea para recorrer los elementos de una Array
                    this.props.listado.map((empleado) => {
                        return <EmpleadoRow key={empleado.id}
                                            name={empleado.fullName}
                                            picture={empleado.pic}
                                            title={empleado.title}
                                            departament={empleado.departament} />
                    })
                }
            </ul>
        )
    }
}

export default EmpleadoList