import React from "react";



function DataCard({ status, from, to, st_date, en_date, payment }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-4 border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800">Shipment Details</h2>
        <span
          className={`px-3 py-1 text-sm rounded-full ${
            status === 'Delivered'
              ? 'bg-green-100 text-green-700'
              : status === 'Pending'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-blue-100 text-blue-700'
          }`}
        >
          {status}
        </span>
      </div>
      <div className="text-sm text-gray-700 space-y-1">
        <p><strong>From:</strong> {from}</p>
        <p><strong>To:</strong> {to}</p>
        <p><strong>Start Date:</strong> {st_date}</p>
        <p><strong>End Date:</strong> {en_date}</p>
        <p><strong>Payment:</strong> ₹{payment}</p>
      </div>
    </div>
  );
}

export  {DataCard};
