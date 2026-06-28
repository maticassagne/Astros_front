import { Moon, Bell, ArrowLeft, MapPin, Calendar, Image as ImageIcon, ClipboardList, Users, CircleDollarSign, ShieldAlert, Package } from "lucide-react";

const AdminDashboard = () => {
  return (
    <main className="flex-1 flex flex-col h-full overflow-y-auto bg-[#f5f6f8]">
        {/* Content Body */}
        <div className="p-8 pt-2 max-w-7xl mx-auto w-full flex-1">
          {/* Banner Section */}
          <div className="w-full rounded-2xl overflow-hidden bg-linear-to-r from-indigo-100 via-purple-100 to-pink-100 mb-6 border border-slate-200 shadow-sm relative">
            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-md mb-4 flex items-center justify-center text-indigo-600">
                <Package size={32} />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">Distribuidora Astros</h1>
              <p className="text-sm font-medium text-slate-500 mb-3">Panel de Administración General</p>
              <p className="text-sm text-slate-600 max-w-lg mb-6">Plataforma centralizada para la gestión de stock, administración de clientes, configuración de precios multidivisa y flujo de facturación mayorista.</p>

              <div className="flex items-center gap-3 mb-8">
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold flex items-center gap-1">Sistema Activo</span>
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold flex items-center gap-1">Venta Mayorista</span>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold flex items-center gap-1">Multidivisa (USD/ARS)</span>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-md border-t border-white/40 p-4 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-slate-400" />
                Córdoba, Argentina
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-slate-400" />
                Inicio: Ene 2026
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-slate-400" />
                Última sincronización: Hoy
              </div>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <ClipboardList size={16} />
              </div>
              <div className="flex items-end justify-between mb-1">
                <span className="text-2xl font-bold text-slate-900">80%</span>
              </div>
              <div className="text-sm text-slate-500 mb-4">4 / 5 despachados hoy</div>
              <div className="text-sm font-medium text-slate-700">Entregas del Día</div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
                <Users size={16} />
              </div>
              <div className="flex items-end justify-between mb-1">
                <span className="text-2xl font-bold text-slate-900">10</span>
              </div>
              <div className="text-sm text-slate-500 mb-4">Todos en el directorio</div>
              <div className="text-sm font-medium text-slate-700">Clientes Registrados</div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Package size={16} />
              </div>
              <div className="flex items-end justify-between mb-1">
                <span className="text-2xl font-bold text-slate-900">10</span>
              </div>
              <div className="text-sm text-slate-500 mb-4">5 con precios en dólar</div>
              <div className="text-sm font-medium text-slate-700">Productos en Catálogo</div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <CircleDollarSign size={16} />
              </div>
              <div className="flex items-end justify-between mb-1">
                <span className="text-2xl font-bold text-slate-900">$1.200</span>
              </div>
              <div className="text-sm text-slate-500 mb-4">Valor de referencia (ARS)</div>
              <div className="text-sm font-medium text-slate-700">Cotización del Dólar</div>
            </div>
          </div>

          {/* Tabs & Table Section */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col mb-10">
            {/* Tabs */}
            <div className="flex items-center gap-1 p-2 border-b border-slate-100 bg-slate-50/50 overflow-x-auto">
              <button className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-semibold text-slate-900 whitespace-nowrap">Pedidos (3)</button>
              <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg whitespace-nowrap transition-colors">Facturas (2)</button>
              <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg whitespace-nowrap transition-colors">Clientes (10)</button>
              <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg whitespace-nowrap transition-colors">Productos (10)</button>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400">
                    <th className="font-medium py-4 px-6">ID de Pedido / Detalle</th>
                    <th className="font-medium py-4 px-6">Estado</th>
                    <th className="font-medium py-4 px-6">Prioridad</th>
                    <th className="font-medium py-4 px-6">Cliente</th>
                    <th className="font-medium py-4 px-6 text-right">Fecha</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-900">#ORD-092 - Pedido de Artículos Varios</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">Entregado</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-red-500 font-medium text-xs">
                        <ShieldAlert size={12} /> Alta
                      </span>
                    </td>
                    <td className="py-4 px-6">Tech Solutions S.A.</td>
                    <td className="py-4 px-6 text-right">Jun 26</td>
                  </tr>
                  <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-900">#ORD-093 - Compra de Electrónicos en USD</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">En progreso</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-red-500 font-medium text-xs">
                        <ShieldAlert size={12} /> Alta
                      </span>
                    </td>
                    <td className="py-4 px-6">Distribuidora Norte</td>
                    <td className="py-4 px-6 text-right">Jun 27</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-900">#ORD-094 - Reposición de Stock Ferretería</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">Pendiente</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-yellow-500 font-medium text-xs">
                        <ShieldAlert size={12} /> Media
                      </span>
                    </td>
                    <td className="py-4 px-6">Construcciones Modernas</td>
                    <td className="py-4 px-6 text-right">Hoy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </main>
  );
};

export default AdminDashboard;
