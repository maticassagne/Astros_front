import { LayoutDashboard, FolderKanban, CheckSquare, BarChart3, CircleDollarSign, Receipt, ShieldAlert, Users, ClipboardList, Package, LineChart, Settings, Search } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex-col h-full overflow-y-auto hidden md:flex">
      <div className="p-4 flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
          <LayoutDashboard size={18} />
        </div>
        <span className="font-bold text-lg">Distribuidora Astros</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-6">
        <div>
          <h3 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Overview</h3>
          <ul className="space-y-1 text-sm font-medium">
            <li>
              <a href="/clients" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-50">
                <LayoutDashboard size={18} />
                Clientes
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-900 bg-slate-100 py-2 px-2 rounded-md">
                <FolderKanban size={18} />
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-50">
                <CheckSquare size={18} />
                Tasks
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-50">
                <BarChart3 size={18} />
                Sales Flow
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Finance</h3>
          <ul className="space-y-1 text-sm font-medium">
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-50">
                <CircleDollarSign size={18} />
                Revenue & Cost
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-50">
                <Receipt size={18} />
                Invoices & Refunds
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Operations</h3>
          <ul className="space-y-1 text-sm font-medium">
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-50">
                <ShieldAlert size={18} />
                Security
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-50">
                <Users size={18} />
                Customers
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-50">
                <ClipboardList size={18} />
                Activity Log
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Inventory</h3>
          <ul className="space-y-1 text-sm font-medium">
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-50">
                <Package size={18} />
                Products
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-50">
                <FolderKanban size={18} />
                Stock Dashboard
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Insights</h3>
          <ul className="space-y-1 text-sm font-medium">
            <li>
              <a href="#" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-50">
                <LineChart size={18} />
                Reports
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-4 mt-auto">
        <a href="#" className="flex items-center gap-3 text-sm font-medium text-slate-600 hover:text-slate-900 py-2 px-2 rounded-md hover:bg-slate-50">
          <Settings size={18} />
          Settings
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
