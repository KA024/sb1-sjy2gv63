import React from 'react';
import { Apple, Facebook, Github } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { SocialButton } from './SocialButton';
import { AuthInput } from './AuthInput';

export function SignUp() {
  const { switchMode } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create an account</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Join our community today</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          required
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Create a password"
          required
        />

        <AuthInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          required
        />

        <button
          type="submit"
          className="w-full py-3 px-4 border border-transparent rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors"
        >
          Create account
        </button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="space-y-3">
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
        Already have an account?{' '}
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