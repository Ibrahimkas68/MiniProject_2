import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import DataTable from './components/DataTable';

const mockUsers = [
  { id: '1', fullName: 'Mohammed Alami', email: 'mohammed@atlasair.ma', role: 'Admin' },
  { id: '2', fullName: 'Fatima Zahra', email: 'fatima@atlasair.ma', role: 'Manager' },
];

const mockFlights = [
  {
    id: '1',
    flightNumber: 'AT202',
    origin: 'CMN',
    destination: 'CDG',
    status: 'scheduled',
  },
  {
    id: '2',
    flightNumber: 'AT305',
    origin: 'CMN',
    destination: 'JFK',
    status: 'in-air',
  },
];

const mockAircraft = [
  { id: '1', type: 'Boeing', model: '787-8', capacity: 274, status: 'active' },
  { id: '2', type: 'Airbus', model: 'A320neo', capacity: 180, status: 'active' },
];

const mockAirports = [
  {
    id: '1',
    code: 'CMN',
    name: 'Mohammed V International',
    city: 'Casablanca',
    country: 'Morocco',
  },
  {
    id: '2',
    code: 'RAK',
    name: 'Marrakesh Menara',
    city: 'Marrakesh',
    country: 'Morocco',
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const handleAdd = () => {
    console.log('Add new item');
  };

  const handleEdit = (item: any) => {
    console.log('Edit item:', item);
  };

  const handleDelete = (item: any) => {
    console.log('Delete item:', item);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'users':
        return (
          <DataTable
            title="User Management"
            columns={[
              { key: 'fullName', label: 'Full Name' },
              { key: 'email', label: 'Email' },
              { key: 'role', label: 'Role' },
            ]}
            data={mockUsers}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        );
      case 'flights':
        return (
          <DataTable
            title="Flight Management"
            columns={[
              { key: 'flightNumber', label: 'Flight Number' },
              { key: 'origin', label: 'Origin' },
              { key: 'destination', label: 'Destination' },
              { key: 'status', label: 'Status' },
            ]}
            data={mockFlights}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        );
      case 'aircraft':
        return (
          <DataTable
            title="Aircraft Management"
            columns={[
              { key: 'type', label: 'Type' },
              { key: 'model', label: 'Model' },
              { key: 'capacity', label: 'Capacity' },
              { key: 'status', label: 'Status' },
            ]}
            data={mockAircraft}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        );
      case 'airports':
        return (
          <DataTable
            title="Airport Management"
            columns={[
              { key: 'code', label: 'Code' },
              { key: 'name', label: 'Name' },
              { key: 'city', label: 'City' },
              { key: 'country', label: 'Country' },
            ]}
            data={mockAirports}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        );
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-dark-900">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1">{renderContent()}</main>
    </div>
  );
}
export default App