import { useNavigate } from 'react-router-dom';
import { routePaths } from '../routes/routePaths';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-5 text-center">
      <svg 
        className="w-72 h-72 mb-8" 
        viewBox="0 0 100 100"
        style={{
          animation: 'float 3s ease-in-out infinite'
        }}
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
        />
        <text
          x="50"
          y="65"
          fontSize="40"
          fill="#3b82f6"
          textAnchor="middle"
          style={{
            animation: 'bounce 2s ease-in-out infinite'
          }}
        >
          ?
        </text>
      </svg>
      
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      
      <p className="text-xl text-gray-600 mb-8">
        Oops! Looks like you've ventured into uncharted territory.
        <br />
        The page you're looking for doesn't exist or has been moved.
      </p>

      <button
        onClick={() => navigate(routePaths.home)}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition-colors"
      >
        Return Home
      </button>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.1); }
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;

