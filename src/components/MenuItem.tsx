import { IMenuItem } from "../interfaces"


interface MenuItemProps {
  item : IMenuItem,
  agregarItem: (item: IMenuItem) => void
}


function MenuItem({item, agregarItem} : MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-400 hover:cursor-pointer hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => agregarItem(item)}
    >
      <p className="text-xl">{item.name}</p>
      <p className="font-black"> ${item.price}</p>
    </button>
  )
}

export default MenuItem