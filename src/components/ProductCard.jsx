import React from "react";

export default function ProductCard({ title, price, desc }) {
  return (
    <article className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition">
      <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">Image</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-indigo-600 font-bold">{price}</div>
        <button className="text-sm px-3 py-1 border rounded">View</button>
      </div>
    </article>
  );
}
