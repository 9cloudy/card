import { useState } from 'react';
import Home from './components/card';
import CodeSnippet from './components/snippet';

export default function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <main className="flex min-h-screen w-[100vw] flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold mb-8 mt-5">User Card</h1>
      <button
        onClick={() => setToggle(!toggle)}
        className="px-4 py-2 mb-5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
      >
        {toggle ? "see code" : "see card"}
      </button>
      {toggle ? <Home></Home> : <CodeSnippet></CodeSnippet>}
    </main>
  );
}