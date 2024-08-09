import { useMemo } from "react";
import { OrderItem } from "../interfaces";
import { formatCurrency } from "../helpers";

interface OrdenTotalProps {
  orden: OrderItem[];
  propina: number;
  guardarOrden: () => void
}

const OrdenTotal = ({ orden, propina, guardarOrden }: OrdenTotalProps) => {
  // subtotal a pagar
  const subtotalPagar = useMemo(
    () => orden.reduce((total, item) => total + item.cantidad * item.price, 0),
    [orden]
  );
  const propinaAmount = useMemo ( () => subtotalPagar * propina, [propina, orden])
  const totalAmount = useMemo(() => subtotalPagar + propinaAmount ,[propina, orden])

  return (
    <>
      <div className="space-y-3 flex justify-between items-center md:gap-2">
        <h2 className="font-black text-2xl text-start">Totales y Propinas</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subtotalPagar)}</span>
        </p>

        <p>
          Propina: <span className="font-bold"> { formatCurrency(propinaAmount) }</span>
        </p>

        <p>
          Total a pagar: <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button className="btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-full before:bg-red-300 before:left-0 before:top-0 before:-translate-y-full hover:before:translate-y-0 before:transition-transform disabled:opacity-10" disabled={totalAmount === 0} onClick={guardarOrden}>
      <span className="relative">Guardar ORden</span>
    </button>
    </>
  );
};

export default OrdenTotal;
