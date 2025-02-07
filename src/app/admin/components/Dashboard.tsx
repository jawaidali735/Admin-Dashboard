// app/admin/components/Dashboard.tsx
export default function Dashboard() {
    return (
      <div className="p-6">
        <h2 className="text-2xl mb-4">Order Analytics</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-500 text-white p-4 rounded-lg">Total Orders: 350</div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg">Pending Orders: 50</div>
          <div className="bg-blue-500 text-white p-4 rounded-lg">Completed Orders: 300</div>
        </div>
      </div>
    );
  }
  