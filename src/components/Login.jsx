import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      navigate('/profile');
    }
  };

  return (
    <div className="max-w-xs w-full bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold mb-2 text-gray-900">Signin to your PopX account</h2>
      <p className="text-gray-500 text-xs mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-purple-600 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-purple-600 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none"
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-400 text-white py-2.5 rounded-md text-sm font-medium mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
}