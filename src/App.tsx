import Home from './components/card';

export default function App() {
  return (
    <main className="flex min-h-screen w-[100vw] flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold mb-8">User Card</h1>
      <Home />
    </main>
  );
}