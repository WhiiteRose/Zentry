import Hero from './components/Hero';

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className="min-h-screen z-0 bg-blue-500"></section>
    </main>
  );
}
