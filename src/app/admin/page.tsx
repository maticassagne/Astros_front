import Sidebar from "@/components/Sidebar/sidebar";
import { Moon, Bell, ArrowLeft, MapPin, Calendar, Image as ImageIcon, ClipboardList, Users, CircleDollarSign, ShieldAlert } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-[#f5f6f8] text-slate-800 font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto">
        {/* Top Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-[#f5f6f8] sticky top-0 z-10">
          <button className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900">
            <ArrowLeft size={16} />
            Back to Dashboard
          </button>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200/50 transition-colors">
              <Moon size={20} />
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200/50 transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-300 overflow-hidden ml-2 border border-slate-200 shadow-sm cursor-pointer">
              <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-8 pt-2 max-w-7xl mx-auto w-full flex-1">
          {/* Banner Section */}
          <div className="w-full rounded-2xl overflow-hidden bg-linear-to-r from-purple-100 via-fuchsia-100 to-pink-100 mb-6 border border-slate-200 shadow-sm relative">
            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-md mb-4 flex items-center justify-center text-indigo-500">
                <ImageIcon size={32} />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">Global Fashion Hub</h1>
              <p className="text-sm font-medium text-slate-500 mb-3">Premium E-commerce Branch</p>
              <p className="text-sm text-slate-600 max-w-lg mb-6">Main online storefront for apparel and accessories. Currently handling high volume seasonal sales.</p>

              <div className="flex items-center gap-3 mb-8">
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold flex items-center gap-1">Active</span>
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold flex items-center gap-1">High Volume</span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1">Apparel</span>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-md border-t border-white/40 p-4 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-slate-400" />
                New York, NY
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-slate-400" />
                Start: Jan 1, 2024
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-slate-400" />
                End: Ongoing
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
                <span className="text-2xl font-bold text-slate-900">33%</span>
              </div>
              <div className="text-sm text-slate-500 mb-4">1,200 / 3,600 done</div>
              <div className="text-sm font-medium text-slate-700">Order Progress</div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
                <Users size={16} />
              </div>
              <div className="flex items-end justify-between mb-1">
                <span className="text-2xl font-bold text-slate-900">12</span>
              </div>
              <div className="text-sm text-slate-500 mb-4">15 total active</div>
              <div className="text-sm font-medium text-slate-700">Online Staff</div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
                <CircleDollarSign size={16} />
              </div>
              <div className="flex items-end justify-between mb-1">
                <span className="text-2xl font-bold text-slate-900">47%</span>
              </div>
              <div className="text-sm text-slate-500 mb-4">$198K of $420K</div>
              <div className="text-sm font-medium text-slate-700">Sales Target</div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center mb-4">
                <ShieldAlert size={16} />
              </div>
              <div className="flex items-end justify-between mb-1">
                <span className="text-2xl font-bold text-slate-900">2</span>
              </div>
              <div className="text-sm text-slate-500 mb-4">5 total pending</div>
              <div className="text-sm font-medium text-slate-700">Open Tickets</div>
            </div>
          </div>

          {/* Tabs & Table Section */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col mb-10">
            {/* Tabs */}
            <div className="flex items-center gap-1 p-2 border-b border-slate-100 bg-slate-50/50 overflow-x-auto">
              <button className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-semibold text-slate-900 whitespace-nowrap">Orders (3)</button>
              <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg whitespace-nowrap transition-colors">Invoices (2)</button>
              <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg whitespace-nowrap transition-colors">Staff (2)</button>
              <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg whitespace-nowrap transition-colors">Documents (2)</button>
              <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg whitespace-nowrap transition-colors">Security (1)</button>
              <button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg whitespace-nowrap transition-colors">Products (3)</button>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400">
                    <th className="font-medium py-4 px-6">Order ID / Title</th>
                    <th className="font-medium py-4 px-6">Status</th>
                    <th className="font-medium py-4 px-6">Priority</th>
                    <th className="font-medium py-4 px-6">Customer</th>
                    <th className="font-medium py-4 px-6 text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-900">#ORD-092 - Summer Collection</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">Completed</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-red-500 font-medium text-xs">
                        <ShieldAlert size={12} /> High
                      </span>
                    </td>
                    <td className="py-4 px-6">Marcus Rivera</td>
                    <td className="py-4 px-6 text-right">Feb 15</td>
                  </tr>
                  <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-900">#ORD-093 - Electronics Restock</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">In progress</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-red-500 font-medium text-xs">
                        <ShieldAlert size={12} /> High
                      </span>
                    </td>
                    <td className="py-4 px-6">Jake Thompson</td>
                    <td className="py-4 px-6 text-right">Apr 30</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-900">#ORD-094 - Winter Clearance</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">Todo</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-yellow-500 font-medium text-xs">
                        <ShieldAlert size={12} /> Medium
                      </span>
                    </td>
                    <td className="py-4 px-6">Elena Cortez</td>
                    <td className="py-4 px-6 text-right">May 20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
