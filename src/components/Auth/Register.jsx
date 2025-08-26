import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import previewImage from '../../assets/preview.webp';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    role: 'DSA',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password) {
      alert('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setLoading(false);
      
      // Show success confirmation
      const confirmed = window.confirm(
        `Registration Successful!\n\nUser Details:\nName: ${formData.name}\nEmail: ${formData.email}\nRole: ${formData.role}\n\nClick OK to proceed to login page.`
      );
      
      if (confirmed) {
        navigate('/login');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Left Side - Form Section */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col">
        {/* Main Content */}
        <div className="flex-1 px-6 lg:px-12 py-8 lg:py-12 flex items-center">
          <div className="w-full max-w-md mx-auto">
            {/* Header */}
            <div className="mb-8 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
                Create Account
              </h2>
              
              <p className="text-gray-600">
                Join our platform to get started.
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border-l-4 border-blue-500 bg-gray-50 focus:outline-none focus:bg-white focus:border-blue-600 text-gray-700 font-medium placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border-l-4 border-blue-500 bg-gray-50 focus:outline-none focus:bg-white focus:border-blue-600 text-gray-700 font-medium placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Mobile Number</label>
                  <input
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                  >
                    <option value="DSA">DSA</option>
                    <option value="NBFC">NBFC</option>
                    <option value="Co-op">Co-op Bank</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Password</label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-400"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">Confirm Password</label>
                  <div className="relative">
                    <input
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-blue-500 placeholder-gray-400"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4 text-gray-400" /> : <Eye className="h-4 w-4 text-gray-400" />}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-6 pb-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
                  >
                    {loading ? 'Registering...' : 'Register'}
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/login')}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded font-medium hover:bg-gray-50 transition-colors"
                  >
                    Back to Login
                  </button>
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
              <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-2">Join Our Platform</h3>
              <p className="text-xs lg:text-sm text-gray-600">Start your journey with us today</p>
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

export default Register;