'use client'

import { useState } from 'react'

type Bill = {
  id: number
  title: string
  status: string
  summary: string
}

export default function LegislativeTracker() {
  const [bills, setBills] = useState<Bill[]>([
    { id: 1, title: 'Education Reform Bill', status: 'In Committee', summary: 'This bill aims to improve the quality of education...' },
    { id: 2, title: 'Healthcare Access Act', status: 'Passed', summary: 'This act expands healthcare access to rural areas...' },
    // Add more bills as needed
  ])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Legislative Tracker</h2>
      {bills.map((bill) => (
        <div key={bill.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold">{bill.title}</h3>
          <p className="text-gray-600">Status: {bill.status}</p>
          <p className="mt-2">{bill.summary}</p>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Follow This Bill
          </button>
        </div>
      ))}
    </div>
  )
}