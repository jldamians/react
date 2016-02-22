import React from 'react'
import ReactDOM from 'react-dom'
import EmpleadoList from './components/empleado-list'

var empleados = [
  { id: 1, fullName: "Pisfil Puemape", title: "CEO", department: "Business", pic: "img1.jpg" },
  { id: 2, fullName: "Damian Saavedra", title: "DEV", department: "Marketing", pic: "img2.png" },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "img3.png" },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "img4.png" },
  { id: 5, fullName: "Ares Jiménez", title: "DEV", department: "Marketing", pic: "img5.jpg" }
]

ReactDOM.render(<EmpleadoList listado={empleados} />, document.getElementById('app'))

