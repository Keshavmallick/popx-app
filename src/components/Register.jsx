import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
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
    if (formData.fullName && formData.phoneNumber && formData.email && formData.password) {
      navigate('/profile');
    }
  };

  return (
    <div className="max-w-xs w-full bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">Create your PopX account</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-purple-600 mb-1">Full Name*</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Marry Doe"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-purple-600 mb-1">Phone number*</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Marry Doe"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-purple-600 mb-1">Email address*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Marry Doe"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-purple-600 mb-1">Password*</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Marry Doe"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-purple-600 mb-1">Company name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Marry Doe"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 outline-none"
          />
        </div>

        <div className="py-1">
          <p className="text-xs font-medium text-gray-700 mb-2">Are you an Agency?*</p>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
                className="w-3 h-3 text-purple-600 border-gray-300"
              />
              <span className="ml-1 text-xs text-gray-700">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
                className="w-3 h-3 text-purple-600 border-gray-300"
              />
              <span className="ml-1 text-xs text-gray-700">No</span>
            </label>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2.5 rounded-md text-sm font-medium"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}