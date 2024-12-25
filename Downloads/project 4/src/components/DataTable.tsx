import React from 'react';
import { Search, Plus } from 'lucide-react';

interface DataTableProps {
  title: string;
  columns: { key: string; label: string }[];
  data: any[];
  onAdd: () => void;
  onEdit: (item: any) => void;
  onDelete: (item: any) => void;
}

export default function DataTable({
  title,
  columns,
  data,
  onAdd,
  onEdit,
  onDelete,
}: DataTableProps) {
  return (
    <div className="bg-dark-800 rounded-xl shadow-lg border border-dark-700">
      <div className="p-6 border-b border-dark-700">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <div className="flex space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#C3423F] transition-colors"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <button
              onClick={onAdd}
              className="flex items-center space-x-2 bg-[#C3423F] text-white px-4 py-2 rounded-lg hover:bg-[#A33935] transition-colors"
            >
              <Plus size={20} />
              <span>Add New</span>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-dark-700">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {column.label}
                </th>
              ))}
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-700">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-dark-700 transition-colors">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-gray-200">
                    {item[column.key]}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-[#28666E] hover:text-[#1D4B52] mr-4 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item)}
                    className="text-[#C3423F] hover:text-[#A33935] transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}