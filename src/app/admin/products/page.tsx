'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/sidebar';
import { mockProducts, Product } from '@/helpers/products';
import { ChevronDown, Upload, Save, EyeOff, Download, Search } from 'lucide-react';

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Set initial product when component mounts
  useEffect(() => {
    setSelectedProduct(mockProducts[0]);
  }, []);

  // Filter products based on search query
  const filteredProducts = mockProducts.filter(prod => {
    const query = searchQuery.toLowerCase();
    return prod.descripcion.toLowerCase().includes(query) ||
           prod.codigoBarra.includes(query) ||
           prod.codigoBarraSecundario.includes(query) ||
           prod.codigoBarraBox.includes(query);
  });

  return (
    <div className="flex h-screen bg-[#c9d0e1] text-slate-800 font-sans">
      <Sidebar />

      <main className="flex-1 flex overflow-hidden">
        {/* Left Column: Form & Images */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col items-center">
          
          <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-5 md:p-6 mb-4">
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-lg font-bold text-slate-800">
                  {selectedProduct ? `Editando: ${selectedProduct.descripcion}` : 'Nuevo Producto'}
                </h2>
                {selectedProduct && (
                  <p className="text-xs text-slate-500 mt-0.5">ID: {selectedProduct.id} • Modificado: {selectedProduct.fechaModificacion}</p>
                )}
              </div>
              
              <div className="flex gap-2">
                <button type="button" className="p-1.5 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors" title="Exportar a Excel">
                  <Download size={16} />
                </button>
                <button type="button" className="p-1.5 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors" title="Ver ocultos en catálogo">
                  <EyeOff size={16} />
                </button>
              </div>
            </div>

            {/* key prop forces form reset when selectedProduct changes */}
            <form key={selectedProduct?.id || 'new'} className="space-y-4">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-slate-700 mb-1">Descripción</label>
                  <input 
                    type="text" 
                    defaultValue={selectedProduct?.descripcion}
                    className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Código de barra</label>
                  <input type="text" defaultValue={selectedProduct?.codigoBarra} className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Código de barra Secundario</label>
                  <input type="text" defaultValue={selectedProduct?.codigoBarraSecundario} className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Código de barra (Caja)</label>
                  <input type="text" defaultValue={selectedProduct?.codigoBarraBox} className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Stock</label>
                  <input type="text" defaultValue={selectedProduct?.stock} className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-3 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Costo</label>
                  <input type="text" defaultValue={selectedProduct?.costo} className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Precio #1</label>
                  <input type="text" defaultValue={selectedProduct?.precio1} className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Precio #2</label>
                  <input type="text" defaultValue={selectedProduct?.precio2} className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Precio #3</label>
                  <input type="text" defaultValue={selectedProduct?.precio3} className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Precio #4</label>
                  <input type="text" defaultValue={selectedProduct?.precio4} className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Precio #5</label>
                  <input type="text" defaultValue={selectedProduct?.precio5} className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                </div>
              </div>

              {/* Categorization & Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Rubro</label>
                  <div className="relative">
                    <select defaultValue={selectedProduct?.rubro} className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white">
                      <option value="Electrónica">Electrónica</option>
                      <option value="Hogar">Hogar</option>
                      <option value="Ferretería">Ferretería</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Proveedor</label>
                  <div className="relative">
                    <select defaultValue={selectedProduct?.proveedor} className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white">
                      <option value="Distribuidora Norte">Distribuidora Norte</option>
                      <option value="Tech Solutions S.A.">Tech Solutions S.A.</option>
                      <option value="Global Imports">Global Imports</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <input type="checkbox" id="ocultar" defaultChecked={selectedProduct?.ocultarCatalogo} className="w-3.5 h-3.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                  <label htmlFor="ocultar" className="text-xs font-medium text-slate-700">Ocultar en catálogo</label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap justify-between items-center gap-3">
                <div className="flex gap-3">
                  <button type="button" className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                    <Upload size={14} /> Subir Imágenes
                  </button>
                </div>
                
                <div className="flex gap-3">
                  <button type="button" onClick={() => setSelectedProduct(null)} className="px-6 py-2 border border-slate-200 rounded-full text-xs font-medium text-slate-500 hover:bg-slate-50 transition-colors">
                    Limpiar
                  </button>
                  <button type="button" className="flex items-center gap-1.5 px-6 py-2 bg-[#8bb4f6] text-white rounded-full text-xs font-medium hover:bg-blue-400 transition-colors shadow-sm">
                    <Save size={14} /> Guardar
                  </button>
                </div>
              </div>

            </form>
          </div>

          {/* Images Card */}
          {selectedProduct && selectedProduct.imagenes.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 w-full max-w-4xl p-5 mb-4">
              <h3 className="text-xs font-semibold text-slate-700 mb-3">Imágenes del Producto</h3>
              <div className="flex gap-3 overflow-x-auto pb-1">
                {selectedProduct.imagenes.map((img, idx) => (
                  <div key={idx} className="w-24 h-24 rounded-lg border border-slate-200 overflow-hidden shrink-0 bg-slate-100 flex items-center justify-center">
                    {/* Fallback pattern if images from picsum fail */}
                    <img src={img} alt={`Img ${idx}`} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Column: List of Products */}
        <div className="w-80 bg-white border-l border-slate-200 flex flex-col h-full shadow-xl z-10">
          <div className="p-4 border-b border-slate-100 bg-slate-50">
            <h3 className="font-bold text-slate-800 text-sm">Catálogo ({filteredProducts.length})</h3>
            <div className="mt-3 relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar producto..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
            {filteredProducts.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                  selectedProduct?.id === prod.id 
                    ? 'bg-blue-50 border-blue-200 shadow-sm' 
                    : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
                }`}
              >
                <div className="font-medium text-xs text-slate-800 truncate">{prod.descripcion}</div>
                <div className="text-[11px] text-slate-500 mt-0.5 flex justify-between">
                  <span>{prod.codigoBarra}</span>
                  <span className="font-semibold text-slate-700">${prod.precio1}</span>
                </div>
              </button>
            ))}
            
            {filteredProducts.length === 0 && (
              <div className="text-center p-4 text-slate-500 text-sm">
                No se encontraron productos
              </div>
            )}
          </div>
        </div>

      </main>
    </div>
  );
};

export default ProductsPage;