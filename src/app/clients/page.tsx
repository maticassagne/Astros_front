import Sidebar from "@/components/Sidebar/sidebar";

const ClientsPage = () => {
  return (
    <div className="flex h-screen bg-[#c9d0e1] text-slate-800 font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto items-center justify-center p-8">
        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-10 relative">
          <form className="space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="Nombre" className="block text-sm font-medium text-slate-700 mb-2">
                Nombre
              </label>
              <input id="Nombre" type="text" placeholder="Nombre" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
            </div>

            {/* C.U.I.T. */}
            <div>
              <label htmlFor="CUIT" className="block text-sm font-medium text-slate-700 mb-2">
                C.U.I.T
              </label>
              <input id="CUIT" type="text" placeholder="CUIT" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
            </div>

            {/* Telefono */}
            <div>
              <label htmlFor="Telefono" className="block text-sm font-medium text-slate-700 mb-2">
                Teléfono
              </label>
              <input id="Telefono" type="text" placeholder="Telefono" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
            </div>

            {/* Domicilio */}
            <div>
              <label htmlFor="Domicilio" className="block text-sm font-medium text-slate-700 mb-2">
                Domicilio
              </label>
              <input id="Domicilio" type="text" placeholder="Domicilio" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
            </div>

            {/* Localidad & Provincia Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="Localidad" className="block text-sm font-medium text-slate-700 mb-2">
                  Localidad
                </label>
                <input id="Localidad" type="text" placeholder="Localidad" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label htmlFor="Provincia" className="block text-sm font-medium text-slate-700 mb-2">
                  Provincia
                </label>
                <input id="Provincia" type="text" placeholder="Provincia" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
              </div>
            </div>

            {/* Codigo postal */}
            <div>
              <label htmlFor="Codigo postal" className="block text-sm font-medium text-slate-700 mb-2">
                Código postal
              </label>
              <input id="Codigo postal" type="text" placeholder="Codigo postal" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
            </div>

            {/* Buttons */}
            <div className="pt-6 flex justify-center gap-4">
              <button type="submit" className="px-10 py-2.5 bg-[#8bb4f6] text-white rounded-full text-sm font-medium hover:bg-blue-400 transition-colors shadow-sm min-w-[120px]">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ClientsPage;
