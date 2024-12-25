import React, { useEffect, useState } from 'react';
import DataTable from './DataTable'; // Assuming you saved the DataTable component in a separate file

// Define the type for an Aeroport
interface AeroportType {
  id: number;
  nom_aeroport: string;
  pays: string;
  ville: string;
  capacite: number;
}

const Aeroport = () => {
  const [aeroports, setAeroports] = useState<AeroportType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch aeroports from the backend
  const fetchAeroports = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:8080/api/admin/aeroports');
      if (!response.ok) {
        throw new Error('Failed to fetch aeroports');
      }
      const data = await response.json();

      if (Array.isArray(data)) {
        setAeroports(data);
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
    fetchAeroports();
  }, []);

  // Handle add aeroport
  const handleAddAeroport = async (newAeroport: AeroportType) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:8080/api/admin/aeroports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAeroport),
      });

      if (!response.ok) {
        throw new Error('Failed to add aeroport');
      }

      await fetchAeroports();
    } catch (error) {
      setError('Failed to add aeroport');
    } finally {
      setLoading(false);
    }
  };

  // Handle edit aeroport
  const handleEditAeroport = async (updatedAeroport: AeroportType) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:8080/api/admin/aeroports/${updatedAeroport.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAeroport),
      });

      if (!response.ok) {
        throw new Error('Failed to edit aeroport');
      }

      await fetchAeroports();
    } catch (error) {
      setError('Failed to edit aeroport');
    } finally {
      setLoading(false);
    }
  };

  // Handle delete aeroport
  const handleDeleteAeroport = async (id: number) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:8080/api/admin/aeroports/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete aeroport');
      }

      await fetchAeroports();
    } catch (error) {
      setError('Failed to delete aeroport');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: 'nom_aeroport', label: 'Airport Name' },
    { key: 'pays', label: 'Country' },
    { key: 'ville', label: 'City' },
    { key: 'capacite', label: 'Capacity' },
    {
      key: 'actions',
      label: 'Actions',
      render: (aeroport: AeroportType) => (
        <div>
          <button onClick={() => handleEditAeroport(aeroport)}>Edit</button>
          <button onClick={() => handleDeleteAeroport(aeroport.id)}>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-hidden rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-white">Aeroport Management</h2>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DataTable
          title="Aeroports"
          columns={columns}
          data={aeroports}
          onAdd={handleAddAeroport}
          onEdit={handleEditAeroport}
          onDelete={handleDeleteAeroport}
        />
      )}
    </div>
  );
};

export default Aeroport;
