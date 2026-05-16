"use client";

import React, { useState } from 'react';
import { Users, Search } from 'lucide-react';
import { mockClients, Client } from '@/helpers/clients';
import ClientCard from '@/components/ClientCard/ClientCard';

const ClientsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    cuit: '',
    telefono: '',
    domicilio: '',
    localidad: '',
    provincia: '',
    codigoPostal: ''
  });

  const handleSelectClient = (client: Client) => {
    setSelectedClient(client);
    setFormData({
      nombre: client.nombre,
      cuit: client.cuit,
      telefono: client.telefono,
      domicilio: client.domicilio,
      localidad: client.localidad,
      provincia: client.provincia,
      codigoPostal: client.codigoPostal
    });
  };

  const handleClearForm = () => {
    setSelectedClient(null);
    setFormData({
      nombre: '', cuit: '', telefono: '', domicilio: '', localidad: '', provincia: '', codigoPostal: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const filteredClients = mockClients.filter(c => 
    c.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex-1 overflow-y-auto p-8 bg-[#c9d0e1]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8 h-full">
          
          {/* Form Container (Left) */}
          <div className="xl:col-span-7 bg-white rounded-xl shadow-lg p-10 relative">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                {selectedClient ? 'Editar Cliente' : 'Nuevo Cliente'}
              </h2>
              {selectedClient && (
                <span className="bg-amber-100 text-amber-700 py-1 px-3 rounded-full text-xs font-semibold">
                  Modo Edición
                </span>
              )}
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                <input id="nombre" value={formData.nombre} onChange={handleInputChange} type="text" placeholder="Nombre" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
              </div>

              <div>
                <label htmlFor="cuit" className="block text-sm font-medium text-slate-700 mb-2">C.U.I.T</label>
                <input id="cuit" value={formData.cuit} onChange={handleInputChange} type="text" placeholder="CUIT" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
                <input id="telefono" value={formData.telefono} onChange={handleInputChange} type="text" placeholder="Telefono" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
              </div>

              <div>
                <label htmlFor="domicilio" className="block text-sm font-medium text-slate-700 mb-2">Domicilio</label>
                <input id="domicilio" value={formData.domicilio} onChange={handleInputChange} type="text" placeholder="Domicilio" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="localidad" className="block text-sm font-medium text-slate-700 mb-2">Localidad</label>
                  <input id="localidad" value={formData.localidad} onChange={handleInputChange} type="text" placeholder="Localidad" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="provincia" className="block text-sm font-medium text-slate-700 mb-2">Provincia</label>
                  <input id="provincia" value={formData.provincia} onChange={handleInputChange} type="text" placeholder="Provincia" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
                </div>
              </div>

              <div>
                <label htmlFor="codigoPostal" className="block text-sm font-medium text-slate-700 mb-2">Código postal</label>
                <input id="codigoPostal" value={formData.codigoPostal} onChange={handleInputChange} type="text" placeholder="Codigo postal" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors" />
              </div>

              <div className="pt-6 flex justify-center gap-4">
                <button 
                  type="button" 
                  onClick={handleClearForm}
                  className="px-10 py-2.5 border border-slate-200 rounded-full text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors min-w-[120px]"
                >
                  {selectedClient ? 'Cancelar' : 'Limpiar'}
                </button>
                <button 
                  type="submit" 
                  className={`px-10 py-2.5 text-white rounded-full text-sm font-medium transition-colors shadow-sm min-w-[120px] ${selectedClient ? 'bg-amber-500 hover:bg-amber-600' : 'bg-[#8bb4f6] hover:bg-blue-400'}`}
                >
                  {selectedClient ? 'Modificar' : 'Guardar'}
                </button>
              </div>
            </form>
          </div>

          {/* List Container (Right) */}
          <div className="xl:col-span-5 flex flex-col h-[calc(100vh-4rem)]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <Users className="text-blue-500" />
                Directorio
              </h2>
              <span className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm font-semibold">
                {filteredClients.length} Clientes
              </span>
            </div>

            {/* Search Bar */}
            <div className="mb-4 relative bg-white rounded-2xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Buscar por nombre..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl shadow-sm border-none focus:ring-2 focus:ring-blue-500/50 transition-all outline-none"
              />
            </div>
            
            {/* Scrollable list area */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 flex-1 overflow-y-auto space-y-4 border border-white/50">
              {filteredClients.length > 0 ? (
                filteredClients.map((client) => (
                  <ClientCard 
                    key={client.id} 
                    client={client} 
                    onClick={handleSelectClient} 
                    isSelected={selectedClient?.id === client.id}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-slate-500">
                  No se encontraron clientes con "{searchQuery}"
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
  );
};

export default ClientsPage;
