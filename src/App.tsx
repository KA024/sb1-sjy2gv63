import Header from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { AuthModal } from './components/auth/AuthModal';
import { InboxModal } from './components/inbox/InboxModal';
import { SubmitModal } from './components/submit/SubmitModal';
import { useState, useEffect } from 'react'
import supabase from './utils/supabase'

interface Todo {
  id: string;
  name: string;
  // Add other fields as necessary
}

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

export function Page() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos, error } = await supabase
        .from('todos')
        .select('*');

      if (error) {
        console.error('Error fetching todos:', error)
      } else if (todos) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </div>
  )
}