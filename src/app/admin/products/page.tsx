'use client';

import React, { useState, useEffect } from 'react';
import { mockProducts, Product } from '@/helpers/products';
import { ChevronDown, Upload, Save, EyeOff, Download, Search, PlusCircle } from 'lucide-react';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [dolarRate, setDolarRate] = useState<number>(1200);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    descripcion: '',
    codigoBarra: '',
    codigoBarraSecundario: '',
    codigoBarraBox: '',
    stock: '',
    costo: '',
    precio1: '',
    precio2: '',
    precio3: '',
    precio4: '',
    precio5: '',
    rubro: 'Electrónica',
    proveedor: 'Distribuidora Norte',
    ocultarCatalogo: false,
    precioEnDolar: false,
    costoDolar: '',
    precio1Dolar: '',
    precio2Dolar: '',
    precio3Dolar: '',
    precio4Dolar: '',
    precio5Dolar: '',
  });

  // Handle select product
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setFormData({
      descripcion: product.descripcion,
      codigoBarra: product.codigoBarra,
      codigoBarraSecundario: product.codigoBarraSecundario || '',
      codigoBarraBox: product.codigoBarraBox || '',
      stock: product.stock,
      costo: product.costo,
      precio1: product.precio1,
      precio2: product.precio2,
      precio3: product.precio3,
      precio4: product.precio4,
      precio5: product.precio5,
      rubro: product.rubro,
      proveedor: product.proveedor,
      ocultarCatalogo: product.ocultarCatalogo,
      precioEnDolar: product.precioEnDolar || false,
      costoDolar: product.costoDolar || '',
      precio1Dolar: product.precio1Dolar || '',
      precio2Dolar: product.precio2Dolar || '',
      precio3Dolar: product.precio3Dolar || '',
      precio4Dolar: product.precio4Dolar || '',
      precio5Dolar: product.precio5Dolar || '',
    });
  };

  // Clear form
  const handleClearForm = () => {
    setSelectedProduct(null);
    setFormData({
      descripcion: '',
      codigoBarra: '',
      codigoBarraSecundario: '',
      codigoBarraBox: '',
      stock: '',
      costo: '',
      precio1: '',
      precio2: '',
      precio3: '',
      precio4: '',
      precio5: '',
      rubro: 'Electrónica',
      proveedor: 'Distribuidora Norte',
      ocultarCatalogo: false,
      precioEnDolar: false,
      costoDolar: '',
      precio1Dolar: '',
      precio2Dolar: '',
      precio3Dolar: '',
      precio4Dolar: '',
      precio5Dolar: '',
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTogglePrecioDolar = (checked: boolean) => {
    setFormData(prev => {
      const updated = { ...prev, precioEnDolar: checked };
      if (checked) {
        const convertToUsd = (arsVal: string) => {
          const numericArs = parseFloat(arsVal) || 0;
          return numericArs > 0 ? (numericArs / dolarRate).toFixed(2) : '';
        };
        updated.costoDolar = prev.costoDolar || convertToUsd(prev.costo);
        updated.precio1Dolar = prev.precio1Dolar || convertToUsd(prev.precio1);
        updated.precio2Dolar = prev.precio2Dolar || convertToUsd(prev.precio2);
        updated.precio3Dolar = prev.precio3Dolar || convertToUsd(prev.precio3);
        updated.precio4Dolar = prev.precio4Dolar || convertToUsd(prev.precio4);
        updated.precio5Dolar = prev.precio5Dolar || convertToUsd(prev.precio5);
      }
      return updated;
    });
  };

  const handleUsdChange = (field: 'costo' | 'precio1' | 'precio2' | 'precio3' | 'precio4' | 'precio5', usdValue: string) => {
    const numericUsd = parseFloat(usdValue) || 0;
    const arsValue = numericUsd > 0 ? Math.round(numericUsd * dolarRate).toString() : '';
    setFormData(prev => ({
      ...prev,
      [`${field}Dolar`]: usdValue,
      [field]: arsValue
    }));
  };

  // Recalculate ARS prices when dolarRate changes if priceEnDolar is active
  useEffect(() => {
    if (formData.precioEnDolar) {
      setFormData(prev => {
        const updateArs = (field: 'costo' | 'precio1' | 'precio2' | 'precio3' | 'precio4' | 'precio5') => {
          const usdVal = parseFloat(prev[`${field}Dolar` as keyof typeof prev] as string) || 0;
          return usdVal > 0 ? Math.round(usdVal * dolarRate).toString() : '';
        };
        return {
          ...prev,
          costo: updateArs('costo'),
          precio1: updateArs('precio1'),
          precio2: updateArs('precio2'),
          precio3: updateArs('precio3'),
          precio4: updateArs('precio4'),
          precio5: updateArs('precio5'),
        };
      });
    }
  }, [dolarRate, formData.precioEnDolar]);

  // Save product
  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.descripcion) {
      alert('La descripción es obligatoria');
      return;
    }

    if (selectedProduct) {
      // Editing
      const updatedProduct: Product = {
        ...selectedProduct,
        descripcion: formData.descripcion,
        codigoBarra: formData.codigoBarra,
        codigoBarraSecundario: formData.codigoBarraSecundario,
        codigoBarraBox: formData.codigoBarraBox,
        stock: formData.stock,
        costo: formData.costo,
        precio1: formData.precio1,
        precio2: formData.precio2,
        precio3: formData.precio3,
        precio4: formData.precio4,
        precio5: formData.precio5,
        rubro: formData.rubro,
        proveedor: formData.proveedor,
        ocultarCatalogo: formData.ocultarCatalogo,
        precioEnDolar: formData.precioEnDolar,
        costoDolar: formData.precioEnDolar ? formData.costoDolar : undefined,
        precio1Dolar: formData.precioEnDolar ? formData.precio1Dolar : undefined,
        precio2Dolar: formData.precioEnDolar ? formData.precio2Dolar : undefined,
        precio3Dolar: formData.precioEnDolar ? formData.precio3Dolar : undefined,
        precio4Dolar: formData.precioEnDolar ? formData.precio4Dolar : undefined,
        precio5Dolar: formData.precioEnDolar ? formData.precio5Dolar : undefined,
        fechaModificacion: new Date().toISOString().split('T')[0],
      };
      setProducts(prev => prev.map(p => p.id === selectedProduct.id ? updatedProduct : p));
      setSelectedProduct(updatedProduct);
      setSaveStatus('Producto actualizado con éxito');
    } else {
      // Creating
      const newProduct: Product = {
        id: `PROD-${Date.now()}`,
        descripcion: formData.descripcion,
        codigoBarra: formData.codigoBarra,
        codigoBarraSecundario: formData.codigoBarraSecundario,
        codigoBarraBox: formData.codigoBarraBox,
        stock: formData.stock,
        costo: formData.costo,
        precio1: formData.precio1,
        precio2: formData.precio2,
        precio3: formData.precio3,
        precio4: formData.precio4,
        precio5: formData.precio5,
        rubro: formData.rubro,
        proveedor: formData.proveedor,
        ocultarCatalogo: formData.ocultarCatalogo,
        precioEnDolar: formData.precioEnDolar,
        costoDolar: formData.precioEnDolar ? formData.costoDolar : undefined,
        precio1Dolar: formData.precioEnDolar ? formData.precio1Dolar : undefined,
        precio2Dolar: formData.precioEnDolar ? formData.precio2Dolar : undefined,
        precio3Dolar: formData.precioEnDolar ? formData.precio3Dolar : undefined,
        precio4Dolar: formData.precioEnDolar ? formData.precio4Dolar : undefined,
        precio5Dolar: formData.precioEnDolar ? formData.precio5Dolar : undefined,
        imagenes: ['https://picsum.photos/seed/new/400/400'],
        fechaCreacion: new Date().toISOString().split('T')[0],
        fechaModificacion: new Date().toISOString().split('T')[0],
      };
      setProducts(prev => [newProduct, ...prev]);
      handleClearForm();
      setSaveStatus('Producto creado con éxito');
    }

    setTimeout(() => {
      setSaveStatus(null);
    }, 3000);
  };

  // Filter products based on search query
  const filteredProducts = products.filter(prod => {
    const query = searchQuery.toLowerCase();
    return prod.descripcion.toLowerCase().includes(query) ||
           prod.codigoBarra.includes(query) ||
           (prod.codigoBarraSecundario && prod.codigoBarraSecundario.toLowerCase().includes(query)) ||
           (prod.codigoBarraBox && prod.codigoBarraBox.toLowerCase().includes(query));
  });

  const calculateMargin = (priceStr: string, costStr: string) => {
    const price = parseFloat(priceStr) || 0;
    const cost = parseFloat(costStr) || 0;
    if (cost <= 0 || price <= 0) return '0%';
    const margin = ((price - cost) / cost) * 100;
    return `${Math.round(margin)}%`;
  };

  const renderPricingField = (label: string, fieldName: 'costo' | 'precio1' | 'precio2' | 'precio3' | 'precio4' | 'precio5') => {
    const usdFieldName = `${fieldName}Dolar` as 'costoDolar' | 'precio1Dolar' | 'precio2Dolar' | 'precio3Dolar' | 'precio4Dolar' | 'precio5Dolar';
    const marginPercent = fieldName !== 'costo' ? calculateMargin(formData[fieldName], formData.costo) : '';
    
    return (
      <div>
        <label className="block text-[11px] font-semibold text-slate-500 mb-1">{label}</label>
        {formData.precioEnDolar ? (
          <div className="flex gap-2">
            {/* USD Input (Editable) */}
            <div className="relative flex-1">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">USD</span>
              <input 
                type="number" 
                step="any"
                value={formData[usdFieldName]}
                onChange={(e) => handleUsdChange(fieldName, e.target.value)}
                placeholder="0.00"
                className="w-full pl-9 pr-1.5 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white text-slate-800" 
              />
            </div>
            {/* ARS Output (Calculated) */}
            <div className="relative flex-1">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">ARS</span>
              <input 
                type="text" 
                readOnly 
                value={formData[fieldName] ? `$${formData[fieldName]}` : ''}
                placeholder="$0"
                className="w-full pl-9 pr-1.5 py-1.5 border border-slate-100 bg-slate-50 text-slate-500 font-semibold rounded-lg text-xs cursor-not-allowed focus:outline-none" 
              />
            </div>
            {/* % Margin Output */}
            {fieldName !== 'costo' && (
              <div className="relative w-14 shrink-0" title="Margen de ganancia sobre costo">
                <input 
                  type="text" 
                  readOnly 
                  value={marginPercent}
                  className="w-full text-center py-1.5 border border-slate-100 bg-indigo-50 text-indigo-600 font-bold rounded-lg text-[10px] cursor-not-allowed focus:outline-none" 
                />
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-2">
            <div className="relative flex-1">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">$</span>
              <input 
                type="text" 
                value={formData[fieldName]} 
                onChange={(e) => handleInputChange(fieldName, e.target.value)}
                placeholder="0"
                className="w-full pl-5 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white text-slate-800" 
              />
            </div>
            {/* % Margin Output */}
            {fieldName !== 'costo' && (
              <div className="relative w-14 shrink-0" title="Margen de ganancia sobre costo">
                <input 
                  type="text" 
                  readOnly 
                  value={marginPercent}
                  className="w-full text-center py-1.5 border border-slate-100 bg-indigo-50 text-indigo-600 font-bold rounded-lg text-[10px] cursor-not-allowed focus:outline-none" 
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <main className="flex-1 flex overflow-hidden">
        {/* Left Column: Form & Images */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col items-center">
          
          <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-5 md:p-6 mb-4">
            <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  {selectedProduct ? `Editando: ${selectedProduct.descripcion}` : 'Nuevo Producto'}
                  {!selectedProduct && (
                    <span className="bg-green-50 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold border border-green-200">
                      Creación
                    </span>
                  )}
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

            {saveStatus && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 mb-4 animate-fade-in">
                <span className="text-sm">✓</span> {saveStatus}
              </div>
            )}

            <form onSubmit={handleSaveProduct} className="space-y-4">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-slate-700 mb-1">Descripción</label>
                  <input 
                    type="text" 
                    value={formData.descripcion}
                    onChange={(e) => handleInputChange('descripcion', e.target.value)}
                    placeholder="Ingrese el nombre descriptivo del producto"
                    className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white text-slate-800"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Código de barra</label>
                  <input 
                    type="text" 
                    value={formData.codigoBarra} 
                    onChange={(e) => handleInputChange('codigoBarra', e.target.value)}
                    placeholder="Código principal"
                    className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white text-slate-800" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Código de barra Secundario</label>
                  <input 
                    type="text" 
                    value={formData.codigoBarraSecundario} 
                    onChange={(e) => handleInputChange('codigoBarraSecundario', e.target.value)}
                    placeholder="Código alternativo"
                    className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white text-slate-800" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Código de barra (Caja)</label>
                  <input 
                    type="text" 
                    value={formData.codigoBarraBox} 
                    onChange={(e) => handleInputChange('codigoBarraBox', e.target.value)}
                    placeholder="Código de bulto/caja"
                    className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white text-slate-800" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Stock</label>
                  <input 
                    type="text" 
                    value={formData.stock} 
                    onChange={(e) => handleInputChange('stock', e.target.value)}
                    placeholder="Cantidad disponible"
                    className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white text-slate-800" 
                  />
                </div>
              </div>

              {/* Precios y Costos Header with Dólar settings */}
              <div className="flex flex-wrap justify-between items-center pt-3 border-t border-slate-100 mb-2 gap-3">
                <h3 className="text-sm font-semibold text-slate-700">Precios y Costos</h3>
                <div className="flex items-center gap-4 flex-wrap">
                  {/* Cotización Dólar */}
                  <div className="flex items-center gap-2">
                    <label htmlFor="dolarRate" className="text-xs font-semibold text-slate-500">Cotización Dólar:</label>
                    <div className="relative">
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">$</span>
                      <input 
                        type="number" 
                        id="dolarRate" 
                        value={dolarRate} 
                        onChange={(e) => setDolarRate(parseFloat(e.target.value) || 0)} 
                        className="w-24 pl-5 pr-2 py-1 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 font-semibold text-slate-700"
                      />
                    </div>
                  </div>
                  {/* Checkbox Precio en Dólar */}
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="precioEnDolar" 
                      checked={formData.precioEnDolar} 
                      onChange={(e) => handleTogglePrecioDolar(e.target.checked)} 
                      className="w-3.5 h-3.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer" 
                    />
                    <label htmlFor="precioEnDolar" className="text-xs font-semibold text-slate-700 cursor-pointer select-none">Precio en dólar</label>
                  </div>
                </div>
              </div>

              {/* Pricing Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {renderPricingField('Costo', 'costo')}
                {renderPricingField('Precio #1', 'precio1')}
                {renderPricingField('Precio #2', 'precio2')}
                {renderPricingField('Precio #3', 'precio3')}
                {renderPricingField('Precio #4', 'precio4')}
                {renderPricingField('Precio #5', 'precio5')}
              </div>

              {/* Categorization & Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Rubro</label>
                  <div className="relative">
                    <select 
                      value={formData.rubro} 
                      onChange={(e) => handleInputChange('rubro', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white text-slate-800"
                    >
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
                    <select 
                      value={formData.proveedor} 
                      onChange={(e) => handleInputChange('proveedor', e.target.value)}
                      className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white text-slate-800"
                    >
                      <option value="Distribuidora Norte">Distribuidora Norte</option>
                      <option value="Tech Solutions S.A.">Tech Solutions S.A.</option>
                      <option value="Global Imports">Global Imports</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <input 
                    type="checkbox" 
                    id="ocultar" 
                    checked={formData.ocultarCatalogo} 
                    onChange={(e) => handleInputChange('ocultarCatalogo', e.target.checked)}
                    className="w-3.5 h-3.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer" 
                  />
                  <label htmlFor="ocultar" className="text-xs font-medium text-slate-700 cursor-pointer select-none">Ocultar en catálogo</label>
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
                  <button 
                    type="button" 
                    onClick={handleClearForm} 
                    className="px-6 py-2 border border-slate-200 rounded-full text-xs font-medium text-slate-500 hover:bg-slate-50 transition-colors"
                  >
                    Limpiar
                  </button>
                  <button 
                    type="submit" 
                    className="flex items-center gap-1.5 px-6 py-2 bg-[#8bb4f6] hover:bg-blue-500 text-white rounded-full text-xs font-medium transition-colors shadow-sm cursor-pointer"
                  >
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
            <h3 className="font-bold text-slate-800 text-sm flex justify-between items-center">
              <span>Catálogo ({filteredProducts.length})</span>
              <button 
                onClick={handleClearForm} 
                className="text-xs bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 font-semibold"
                title="Crear nuevo producto"
              >
                <PlusCircle size={12} /> Nuevo
              </button>
            </h3>
            <div className="mt-3 relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar producto..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white text-slate-800 font-medium"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5 bg-slate-50/50">
            {filteredProducts.map((prod) => (
              <button
                key={prod.id}
                onClick={() => handleSelectProduct(prod)}
                className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                  selectedProduct?.id === prod.id 
                    ? 'bg-blue-50 border-blue-200 shadow-sm ring-1 ring-blue-200' 
                    : 'bg-white border-slate-100 hover:bg-slate-50 hover:border-slate-200'
                }`}
              >
                <div className="font-semibold text-xs text-slate-800 truncate flex justify-between items-center">
                  <span className="truncate">{prod.descripcion}</span>
                  {prod.precioEnDolar && (
                    <span className="shrink-0 bg-blue-100 text-blue-700 text-[9px] px-1.5 py-0.2 rounded font-bold uppercase ml-1">
                      USD
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 flex justify-between items-center">
                  <span className="font-mono text-[10px]">{prod.codigoBarra}</span>
                  <span className="font-bold text-slate-700 flex flex-col items-end">
                    <span>${prod.precio1} ARS</span>
                    {prod.precioEnDolar && prod.precio1Dolar && (
                      <span className="text-[9px] text-slate-400 font-normal">U$S {prod.precio1Dolar}</span>
                    )}
                  </span>
                </div>
              </button>
            ))}
            
            {filteredProducts.length === 0 && (
              <div className="text-center p-4 text-slate-400 text-xs">
                No se encontraron productos
              </div>
            )}
          </div>
        </div>

      </main>
  );
};

export default ProductsPage;