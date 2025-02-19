import React from 'react';
import { auth } from './firebase';
import { useAuthState } from './hooks/useAuthState';
import AuthPage from './AuthPage';
import ChatsPage from './ChatsPage';

function App() {
  const { user, loading } = useAuthState(auth);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    return <AuthPage />;
  }

  return <ChatsPage />;
}

export default App;