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
}

export const mockProducts: Product[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `PROD-100${i}`,
  codigoBarra: `779123456789${i}`,
  codigoBarraSecundario: `779123456780${i}`,
  codigoBarraBox: `779123456781${i}`,
  descripcion: `Producto de Prueba ${i + 1} - Excelente Calidad`,
  costo: `${1000 + i * 150}`,
  precio1: `${1500 + i * 200}`,
  precio2: `${1450 + i * 200}`,
  precio3: `${1400 + i * 200}`,
  precio4: `${1350 + i * 200}`,
  precio5: `${1300 + i * 200}`,
  fechaCreacion: new Date(2025, 10, i + 1).toISOString().split('T')[0],
  fechaModificacion: new Date().toISOString().split('T')[0],
  stock: `${50 + i * 15}`,
  ocultarCatalogo: i % 4 === 0,
  rubro: i % 2 === 0 ? 'Electrónica' : 'Hogar',
  proveedor: i % 3 === 0 ? 'Distribuidora Norte' : 'Tech Solutions S.A.',
  imagenes: [
    `https://picsum.photos/seed/${i + 10}1/400/400`,
    `https://picsum.photos/seed/${i + 10}2/400/400`,
  ]
}));
