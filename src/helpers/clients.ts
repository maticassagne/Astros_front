export interface Client {
  id: string;
  nombre: string;
  cuit: string;
  telefono: string;
  domicilio: string;
  localidad: string;
  provincia: string;
  codigoPostal: string;
}

export const mockClients: Client[] = [
  {
    id: "1",
    nombre: "Tech Solutions S.A.",
    cuit: "30-71234567-8",
    telefono: "+54 11 4567-8900",
    domicilio: "Av. Corrientes 1234",
    localidad: "CABA",
    provincia: "Buenos Aires",
    codigoPostal: "1043",
  },
  {
    id: "2",
    nombre: "Logística del Sur SRL",
    cuit: "33-65432109-9",
    telefono: "+54 351 432-1122",
    domicilio: "Bv. San Juan 450",
    localidad: "Córdoba",
    provincia: "Córdoba",
    codigoPostal: "5000",
  },
  {
    id: "3",
    nombre: "Agropecuaria Pampeana",
    cuit: "30-55554444-1",
    telefono: "+54 341 555-8899",
    domicilio: "Ruta 9 Km 280",
    localidad: "Rosario",
    provincia: "Santa Fe",
    codigoPostal: "2000",
  },
  {
    id: "4",
    nombre: "Construcciones Modernas",
    cuit: "30-88887777-2",
    telefono: "+54 261 423-4567",
    domicilio: "San Martín 890",
    localidad: "Mendoza",
    provincia: "Mendoza",
    codigoPostal: "5500",
  },
  {
    id: "5",
    nombre: "Distribuidora Norte",
    cuit: "30-11112222-3",
    telefono: "+54 387 431-2233",
    domicilio: "Belgrano 1500",
    localidad: "Salta",
    provincia: "Salta",
    codigoPostal: "4400",
  },
  {
    id: "6",
    nombre: "Servicios IT Globales",
    cuit: "30-99990000-4",
    telefono: "+54 11 5555-4444",
    domicilio: "Alicia Moreau de Justo 550",
    localidad: "CABA",
    provincia: "Buenos Aires",
    codigoPostal: "1107",
  },
  {
    id: "7",
    nombre: "Industrias Metálicas",
    cuit: "33-22223333-5",
    telefono: "+54 221 482-1111",
    domicilio: "Calle 50 y 120",
    localidad: "La Plata",
    provincia: "Buenos Aires",
    codigoPostal: "1900",
  },
  {
    id: "8",
    nombre: "Retail Centro",
    cuit: "30-44445555-6",
    telefono: "+54 343 422-3344",
    domicilio: "Urquiza 800",
    localidad: "Paraná",
    provincia: "Entre Ríos",
    codigoPostal: "3100",
  },
  {
    id: "9",
    nombre: "Farmacéutica Andina",
    cuit: "33-77778888-7",
    telefono: "+54 381 433-5566",
    domicilio: "25 de Mayo 1100",
    localidad: "San Miguel de Tucumán",
    provincia: "Tucumán",
    codigoPostal: "4000",
  },
  {
    id: "10",
    nombre: "Turismo Austral",
    cuit: "30-66667777-8",
    telefono: "+54 2901 42-8899",
    domicilio: "San Martín 400",
    localidad: "Ushuaia",
    provincia: "Tierra del Fuego",
    codigoPostal: "9410",
  }
];
