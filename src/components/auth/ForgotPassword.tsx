import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { AuthInput } from './AuthInput';

export function ForgotPassword() {
  const { switchMode } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Reset Password</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Enter your email address and we'll send you a link to reset your password
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <button
          type="submit"
          className="w-full py-3 px-4 border border-transparent rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors"
        >
          Send reset link
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Remember your password?{' '}
        <button
          type="button"
          onClick={() => switchMode('login')}
          className="text-blue-500 hover:text-blue-400"
        >
          Sign in
        </button>
      </p>
    </div>
  );
}