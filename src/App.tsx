// Removed unused import; React is automatically imported when using JSX in modern setups.
import Header from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { AuthModal } from './components/auth/AuthModal';
import { InboxModal } from './components/inbox/InboxModal';
import { SubmitModal } from './components/submit/SubmitModal';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <div className="pt-16 flex">
        <Sidebar />
        <main className="flex-1 ml-48">
          <Feed />
        </main>
      </div>
      <AuthModal />
      <InboxModal />
      <SubmitModal />
    </div>
  );
}