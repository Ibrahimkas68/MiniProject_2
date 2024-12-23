//DataTable.tsx :
import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';

interface DataTableProps {
  title: string;
  columns: { key: string; label: string }[];
  data: { [key: string]: any }[];
  onAdd: (newItem: any) => void;
  onEdit: (item: any) => void;
  onDelete: (item: any) => void;
}

export default function DataTable({
  title,
  columns,
  onAdd,
  onEdit,
  onDelete,
}: DataTableProps) {
  const [data, setData] = useState<any[]>([]); // Manage the table data state
  const [showForm, setShowForm] = useState(false); // State to toggle the form visibility
  const [newItem, setNewItem] = useState<any>(
    columns.reduce((acc, column) => ({ ...acc, [column.key]: '' }), {}) // Initialize form fields based on columns
  );

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setNewItem({ ...newItem, [key]: e.target.value });
  };

  // Handle add item
  const handleAddItem = () => {
    // Ensure the new item corresponds to the column keys correctly
    onAdd(newItem);
    setData([...data, newItem]); // Add the new item to the data array
    setShowForm(false); // Hide the form after adding
    setNewItem(columns.reduce((acc, column) => ({ ...acc, [column.key]: '' }), {})); // Reset the form
  };

  return (
    <div className="bg-background rounded-xl shadow-lg border border-gray-700">
      <div className="p-6 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-text">{title}</h2>
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
              onClick={() => setShowForm(true)} // Show the form when clicked
              className="flex items-center space-x-2 bg-[#C3423F] text-white px-4 py-2 rounded-lg hover:bg-[#A33935] transition-colors"
            >
              <Plus size={20} />
              <span>Add New</span>
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="p-6 border-t border-gray-700 bg-background">
          <div className="space-y-4">
            {columns.map((column) => (
              <div key={column.key}>
                <label className="block text-sm font-medium text-text-muted">{column.label}</label>
                <input
                  type="text"
                  value={newItem[column.key]} // Ensure the input value corresponds to the column key
                  onChange={(e) => handleInputChange(e, column.key)}
                  className="w-full mt-1 px-4 py-2 bg-background border border-gray-700 rounded-md text-text placeholder-gray-500 focus:outline-none focus:border-primary"
                  placeholder={`Enter ${column.label}`}
                />
              </div>
            ))}
            <button
              onClick={handleAddItem}
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              Add Item
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-background">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-4 text-left text-xs font-medium text-text-muted uppercase tracking-wider"
                >
                  {column.label}
                </th>
              ))}
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-background transition-colors">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-text">
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
