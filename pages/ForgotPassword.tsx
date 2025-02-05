import React from 'react';
import { AuthInput } from '../components/auth/AuthInput';

export function ForgotPassword() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Reset Password</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
          <a href="/login" className="text-blue-500 hover:text-blue-400">Sign in</a>
        </p>
      </div>
    </div>
  );
}