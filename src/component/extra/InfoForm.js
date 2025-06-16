import React, { useState } from 'react';

export default function InfoForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    info: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    console.log(name,'====>', value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log(formData);
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">User Form</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Info</label>
          <textarea
            name="info"
            value={formData.info}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">Submitted Info:</h3>
          <p><strong>Username:</strong> {submittedData.username}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Info:</strong> {submittedData.info}</p>
        </div>
      )}
    </div>
  );
}
