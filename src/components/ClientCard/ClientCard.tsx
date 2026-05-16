import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Client } from '@/helpers/clients';

interface ClientCardProps {
  client: Client;
  onClick: (client: Client) => void;
  isSelected?: boolean;
}

const ClientCard: React.FC<ClientCardProps> = ({ client, onClick, isSelected }) => {
  return (
    <div 
      onClick={() => onClick(client)}
      className={`bg-white p-5 border rounded-xl hover:shadow-md transition-all cursor-pointer group relative overflow-hidden ${isSelected ? 'border-blue-500 shadow-md ring-1 ring-blue-500' : 'border-slate-100 hover:border-blue-300'}`}
    >
      <div className={`absolute top-0 left-0 w-1 h-full bg-blue-500 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
      
      <h3 className={`font-bold text-lg transition-colors mb-2 ${isSelected ? 'text-blue-600' : 'text-slate-800 group-hover:text-blue-600'}`}>
        {client.nombre}
      </h3>
      
      <div className="text-sm text-slate-500 space-y-2">
        <p className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">CUIT</span> 
          <span className="font-medium text-slate-700">{client.cuit}</span>
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={15} className="text-slate-400" /> 
          {client.localidad}, {client.provincia}
        </p>
        <p className="flex items-center gap-2">
          <Phone size={15} className="text-slate-400" /> 
          {client.telefono}
        </p>
      </div>
    </div>
  );
};

export default ClientCard;
