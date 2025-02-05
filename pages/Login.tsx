import React from 'react';
import { Apple, Facebook, Github } from 'lucide-react';
import { SocialButton } from '../components/auth/SocialButton';
import { AuthInput } from '../components/auth/AuthInput';

export function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AuthInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <AuthInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
            </label>
            <a href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-400">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors"
          >
            Sign in
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="space-y-4">
          <SocialButton
            icon={<Github className="w-5 h-5" />}
            provider="Google"
            onClick={() => {}}
          />
          <SocialButton
            icon={<Facebook className="w-5 h-5 text-blue-600" />}
            provider="Facebook"
            onClick={() => {}}
          />
          <SocialButton
            icon={<Apple className="w-5 h-5" />}
            provider="Apple"
            onClick={() => {}}
          />
        </div>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:text-blue-400">Sign up</a>
        </p>
      </div>
    </div>
  );
}