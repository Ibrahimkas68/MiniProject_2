import React from 'react';
import { Users, Plane, Building2, MapPin } from 'lucide-react';
import StatCard from './StatCard';

export default function Overview() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Welcome Back, Admin</h2>
          <p className="text-gray-400">Here's what's happening with Atlas Airways today.</p>
        </div>
        <div className="text-right">
          <p className="text-white">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p className="text-gray-400">Casablanca Time (GMT+1)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Passengers"
          value={12543}
          icon={<Users size={24} />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Active Flights"
          value={42}
          icon={<Plane size={24} />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Aircraft Fleet"
          value={86}
          icon={<Building2 size={24} />}
          trend={{ value: 2, isPositive: true }}
        />
        <StatCard
          title="Destinations"
          value={128}
          icon={<MapPin size={24} />}
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b border-dark-600 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-200">Flight AT{100 + i} Departed</p>
                  <p className="text-sm text-gray-400">
                    {new Date(Date.now() - i * 3600000).toLocaleTimeString()}
                  </p>
                </div>
                <span className="text-[#28666E] text-sm cursor-pointer hover:text-[#1D4B52]">
                  View Details
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-6 border border-dark-700">
          <h3 className="text-xl font-semibold text-white mb-4">Popular Routes</h3>
          <div className="space-y-4">
            {[
              { route: 'CMN → CDG', flights: 24 },
              { route: 'CMN → JFK', flights: 18 },
              { route: 'CMN → DXB', flights: 15 },
              { route: 'CMN → RAK', flights: 12 },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b border-dark-600 last:border-0"
              >
                <div className="flex items-center space-x-3">
                  <Plane size={20} className="text-[#C3423F]" />
                  <span className="text-gray-200">{item.route}</span>
                </div>
                <span className="text-gray-400">{item.flights} flights/day</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}