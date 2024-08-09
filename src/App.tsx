import MenuItem from "./components/MenuItem";
import OrdenTotal from "./components/OrdenTotal";
import OrderContenido from "./components/OrderContenido";
import TipPorcentaje from "./components/TipPorcentaje";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { agregarItem, orden, eliminarItem, propina, setPropina, guardarOrden } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-6">
        <h1 className="text-center text-3xl font-bold">
          Calculadora de Propinas y Consumos
        </h1>
      </header>

      {/* seccion principal */}
      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2 text-center">
        <div className="p-5">
          <h2 className="font-serif text-4xl">Menú</h2>

          <div className="mt-5 space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} agregarItem={agregarItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

          {orden.length > 0 ? (
            <>
              <OrderContenido
                orden={orden}
                eliminarItem={eliminarItem}
              />
              <TipPorcentaje
                setPropina={setPropina}
              />
              <OrdenTotal
                orden={orden}
                propina={propina}
                guardarOrden={guardarOrden}
              />
            </>
          ) : (
            <p className="text-gray-500">No hay productos en la orden.</p>
          )}
        </div>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
