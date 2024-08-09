import { useState } from "react"
import { IMenuItem, OrderItem } from "../interfaces"
import {  toast } from 'react-toastify';



export default function useOrder () {
  const [orden, setOrden] = useState<OrderItem[]>([])
  // state de propinas
  const [propina, setPropina] = useState(0)

    // agregar items
    const agregarItem = (item : IMenuItem) => {

    // verificar si existe ya el item
    const itemExiste = orden.find(orderItem => orderItem.id === item.id)
    if(itemExiste){
      toast.error('Ese producto ya esta en la lista!')
      const actualizarOrden = orden.map( orderItem => orderItem.id === item.id ?  {...orderItem, cantidad: orderItem.cantidad + 1 }  : orderItem )
      setOrden(actualizarOrden)
    } else {
      const nuevoItem = {...item, cantidad: 1}
      setOrden([...orden, nuevoItem])
    }

  }

  // eliminar productos de consumo
  const eliminarItem = (id : IMenuItem['id']) => {
    setOrden(orden.filter(item => item.id !== id ))
    toast.success('Se elimino con exito!')
    
  }

  // guardar orden
  const guardarOrden = () => {
    setOrden([])
    setPropina(0)
    toast.success('Orden Pedida!')
    
  }

  return {
    agregarItem,
    orden,
    eliminarItem,
    propina,
    setPropina,
    guardarOrden
  }
}