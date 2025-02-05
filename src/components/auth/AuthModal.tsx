import { X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { ForgotPassword } from './ForgotPassword';

export function AuthModal() {
  const { isOpen, mode, closeAuth } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeAuth}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-800 w-full max-w-md rounded-2xl shadow-xl">
          {/* Close button */}
          <button
            aria-label="Close authentication modal"
            onClick={closeAuth}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="p-8">
            {mode === 'login' && <Login />}
            {mode === 'signup' && <SignUp />}
            {mode === 'forgot-password' && <ForgotPassword />}
          </div>
        </div>
      </div>
    </div>
  );
}