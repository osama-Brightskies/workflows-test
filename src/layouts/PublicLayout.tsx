import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/auth/useAuth";
export const PublicLayout: React.FC = () => {
  const navigate = useNavigate();
  const {isAuthenticated} = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(-1);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-indigo-600">
                  Your App
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
