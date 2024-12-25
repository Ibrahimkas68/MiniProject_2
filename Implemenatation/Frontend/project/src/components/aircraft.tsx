import React, { useEffect, useState } from 'react';
import DataTable from './DataTable'; // Assuming you saved the DataTable component in a separate file

// Define the type for an Aircraft
interface AircraftType {
    id_avion: number;
    type_avion: string;
    capacite: number;
    annee_fab: number;
    model: string;
}

const Aircraft = () => {
    const [aircrafts, setAircrafts] = useState<AircraftType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch aircrafts from the backend
    const fetchAircrafts = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('http://localhost:8080/api/admin/avions');
            if (!response.ok) {
                throw new Error('Failed to fetch aircrafts');
            }
            const data: AircraftType[] = await response.json();

            if (Array.isArray(data)) {
                setAircrafts(data); // Ensure `id_avion` is part of the fetched data
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
        fetchAircrafts();
    }, []);

    // Handle add aircraft
    const handleAddAircraft = async (newAircraft: AircraftType) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('http://localhost:8081/api/admin/avions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAircraft),
            });

            if (!response.ok) {
                throw new Error('Failed to add aircraft');
            }

            await fetchAircrafts();
        } catch (error) {
            setError('Failed to add aircraft');
        } finally {
            setLoading(false);
        }
    };

    // Handle edit aircraft
    const handleEditAircraft = async (updatedAircraft: AircraftType) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`http://localhost:8081/api/admin/avions/${updatedAircraft.id_avion}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedAircraft),
            });

            if (!response.ok) {
                throw new Error('Failed to edit aircraft');
            }

            await fetchAircrafts();
        } catch (error) {
            setError('Failed to edit aircraft');
        } finally {
            setLoading(false);
        }
    };

    // Handle delete aircraft
    const handleDeleteAircraft = async (id_avion: number) => {
        console.log(`Deleting aircraft with id: ${id_avion}`);
        setLoading(true);
        setError('');

        // Optimistically update the state
        setAircrafts((prevAircrafts) => prevAircrafts.filter((aircraft) => aircraft.id_avion !== id_avion));

        try {
            const response = await fetch(`http://localhost:8081/api/admin/avions/${id_avion}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete aircraft from the backend');
            }

            console.log('Deleted successfully from backend');
        } catch (error) {
            setError('Failed to delete aircraft');
            console.error(error);

            // Rollback the optimistic update if backend fails
            await fetchAircrafts();
        } finally {
            setLoading(false);
        }
    };

    const columns = [
        { key: 'id_avion', label: 'ID' }, // Include the ID column
        { key: 'type_avion', label: 'Aircraft Type' },
        { key: 'capacite', label: 'Capacity' },
        { key: 'annee_fab', label: 'Year of Manufacture' },
        { key: 'model', label: 'Model' },
        {
            key: 'actions',
            label: 'Actions',
            render: (aircraft: AircraftType) => (
                <div>
                    <button onClick={() => handleEditAircraft(aircraft)}>Edit</button>
                    <button onClick={() => handleDeleteAircraft(aircraft.id_avion)}>Delete</button>
                </div>
            ),
        },
    ];

    return (
        <div className="overflow-hidden rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-white">Aircraft Management</h2>
            {error && <p className="text-red-500">{error}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <DataTable
                    title="Aircrafts"
                    columns={columns}
                    data={aircrafts}
                    onAdd={handleAddAircraft}
                    onEdit={handleEditAircraft}
                    onDelete={handleDeleteAircraft}
                />
            )}
        </div>
    );
};

export default Aircraft;