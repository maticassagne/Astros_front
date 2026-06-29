export interface Product {
  id: string;
  codigoBarra: string;
  codigoBarraSecundario: string;
  codigoBarraBox: string;
  descripcion: string;
  costo: string;
  precio1: string;
  precio2: string;
  precio3: string;
  precio4: string;
  precio5: string;
  fechaCreacion: string;
  fechaModificacion: string;
  stock: string;
  ocultarCatalogo: boolean;
  rubro: string;
  proveedor: string;
  imagenes: string[];
  precioEnDolar?: boolean;
  costoDolar?: string;
  precio1Dolar?: string;
  precio2Dolar?: string;
  precio3Dolar?: string;
  precio4Dolar?: string;
  precio5Dolar?: string;
  tieneVencimiento?: boolean;
  lotes?: { id: string; fechaVencimiento: string; cantidad: number }[];
}

export const mockProducts: Product[] = Array.from({ length: 10 }).map((_, i) => {
  const isDolar = i % 2 === 0;
  const tieneVencimiento = i % 2 === 1;
  const baseCosto = 1000 + i * 150;
  const basePrecio1 = 1500 + i * 200;
  const basePrecio2 = 1450 + i * 200;
  const basePrecio3 = 1400 + i * 200;
  const basePrecio4 = 1350 + i * 200;
  const basePrecio5 = 1300 + i * 200;
  const exchangeRate = 1200; // Cotización mock inicial

  return {
    id: `PROD-100${i}`,
    codigoBarra: `779123456789${i}`,
    codigoBarraSecundario: `779123456780${i}`,
    codigoBarraBox: `779123456781${i}`,
    descripcion: `Producto de Prueba ${i + 1} - Excelente Calidad`,
    costo: isDolar ? (baseCosto).toString() : `${baseCosto}`,
    precio1: isDolar ? (basePrecio1).toString() : `${basePrecio1}`,
    precio2: isDolar ? (basePrecio2).toString() : `${basePrecio2}`,
    precio3: isDolar ? (basePrecio3).toString() : `${basePrecio3}`,
    precio4: isDolar ? (basePrecio4).toString() : `${basePrecio4}`,
    precio5: isDolar ? (basePrecio5).toString() : `${basePrecio5}`,
    fechaCreacion: new Date(2025, 10, i + 1).toISOString().split('T')[0],
    fechaModificacion: new Date().toISOString().split('T')[0],
    stock: `${50 + i * 15}`,
    ocultarCatalogo: i % 4 === 0,
    rubro: i % 2 === 0 ? 'Electrónica' : 'Hogar',
    proveedor: i % 3 === 0 ? 'Distribuidora Norte' : 'Tech Solutions S.A.',
    imagenes: [
      `https://picsum.photos/seed/${i + 10}1/400/400`,
      `https://picsum.photos/seed/${i + 10}2/400/400`,
    ],
    precioEnDolar: isDolar,
    costoDolar: isDolar ? (baseCosto / exchangeRate).toFixed(2) : undefined,
    precio1Dolar: isDolar ? (basePrecio1 / exchangeRate).toFixed(2) : undefined,
    precio2Dolar: isDolar ? (basePrecio2 / exchangeRate).toFixed(2) : undefined,
    precio3Dolar: isDolar ? (basePrecio3 / exchangeRate).toFixed(2) : undefined,
    precio4Dolar: isDolar ? (basePrecio4 / exchangeRate).toFixed(2) : undefined,
    precio5Dolar: isDolar ? (basePrecio5 / exchangeRate).toFixed(2) : undefined,
    tieneVencimiento,
    lotes: tieneVencimiento ? [
      { id: `LOTE-${i}-1`, fechaVencimiento: new Date(2026, 7, 10 + i).toISOString().split('T')[0], cantidad: 20 + i * 5 },
      { id: `LOTE-${i}-2`, fechaVencimiento: new Date(2026, 11, 15 + i).toISOString().split('T')[0], cantidad: 30 + i * 10 }
    ] : undefined
  };
});


