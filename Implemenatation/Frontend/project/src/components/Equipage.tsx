import React, { useEffect, useState } from 'react';
import DataTable from './DataTable'; // Assuming you saved the DataTable component in a separate file

// Define the type for an Equipage
interface EquipageType {
  id: number;
  nom_complet: string;
  fonction: string;
  num_licence: string;
}

const Equipage = () => {
  const [equipages, setEquipages] = useState<EquipageType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch equipages from the backend
  const fetchEquipages = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:8080/api/equipages');
      if (!response.ok) {
        throw new Error('Failed to fetch equipages');
      }
      const data: EquipageType[] = await response.json();

      if (Array.isArray(data)) {
        setEquipages(data); // Ensure `id` is part of the fetched data
      } else {
        setError('Unexpected data format received');
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEquipages();
  }, []);

  // Handle add equipage
  const handleAddEquipage = async (newEquipage: EquipageType) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:8080/api/addEquipage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEquipage),
      });

      if (!response.ok) {
        throw new Error('Failed to add equipage');
      }

      await fetchEquipages();
    } catch (error) {
      setError('Failed to add equipage');
    } finally {
      setLoading(false);
    }
  };

  // Handle edit equipage
  const handleEditEquipage = async (updatedEquipage: EquipageType) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:8080/api/editEquipage/${updatedEquipage.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEquipage),
      });

      if (!response.ok) {
        throw new Error('Failed to edit equipage');
      }

      await fetchEquipages();
    } catch (error) {
      setError('Failed to edit equipage');
    } finally {
      setLoading(false);
    }
  };

  // Handle delete equipage
  const handleDeleteEquipage = async (id: number) => {
    console.log(`Deleting equipage with id: ${id}`);
    setLoading(true);
    setError('');

    // Optimistically update the state
    setEquipages((prevEquipages) => prevEquipages.filter((equipage) => equipage.id !== id));

    try {
      const response = await fetch(`http://localhost:8080/api/deleteEquipage/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete equipage from the backend');
      }

      console.log('Deleted successfully from backend');
    } catch (error) {
      setError('Failed to delete equipage');
      console.error(error);

      // Rollback the optimistic update if backend fails
      await fetchEquipages();
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: 'id', label: 'ID' }, // Include the ID column
    { key: 'nom_complet', label: 'Full Name' },
    { key: 'fonction', label: 'Role' },
    { key: 'num_licence', label: 'Licence Number' },
    {
      key: 'actions',
      label: 'Actions',
      render: (equipage: EquipageType) => (
        <div>
          <button onClick={() => handleEditEquipage(equipage)}>Edit</button>
          <button onClick={() => handleDeleteEquipage(equipage.id)}>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-hidden rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-white">Equipage Management</h2>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable
          title="Equipages"
          columns={columns}
          data={equipages}
          onAdd={handleAddEquipage}
          onEdit={handleEditEquipage}
          onDelete={handleDeleteEquipage}
        />
      )}
    </div>
  );
};

export default Equipage;
