import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import previewImage from '../../assets/preview.webp';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side - Form Section */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col">
        <div className="flex-1 px-6 lg:px-12 py-8 lg:py-16 flex items-center">
          <div className="w-full max-w-md mx-auto">
            {/* Header */}
            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
                Welcome Back
              </h2>
              <p className="text-gray-600">
                Sign in to access your automated loan processing system
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border-l-4 border-blue-500 bg-gray-50 focus:outline-none focus:bg-white focus:border-blue-600 text-gray-700 font-medium placeholder-gray-400"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Password</label>
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full px-4 py-3 border-l-4 border-blue-500 bg-gray-50 focus:outline-none focus:bg-white focus:border-blue-600 text-gray-700 font-medium placeholder-gray-400"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
                  >
                    {loading ? 'Signing in...' : 'Sign In'}
                  </button>
                  <Link
                    to="/register"
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded font-medium hover:bg-gray-50 transition-colors text-center"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side - Preview Image Section */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-200/30 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-purple-200/40 rounded-lg transform rotate-45"></div>
        
        {/* Main preview image */}
        <div className="relative z-10 max-w-sm lg:max-w-lg w-full px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-4 lg:p-6">
            <img 
              src={previewImage} 
              alt="Platform Preview" 
              className="w-full h-auto rounded-xl object-cover"
            />
            <div className="mt-4 text-center">
              <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-2">SaaS Base Platform</h3>
              <p className="text-xs lg:text-sm text-gray-600">Streamline your loan processing workflow</p>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 right-10 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-16 w-6 h-6 bg-purple-500 rounded-full opacity-40 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Login;