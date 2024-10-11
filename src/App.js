import "./App.css";

export default function App() {
  return (
    <main className="w-screen h-screen flex">
      <nav className="h-full w-40 mr-5 bg-yellow-50">메뉴</nav>
      <section className="w-full h-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
        <div className="min-w-32 max-w-96 max-h-96 bg-red-50">1번</div>
        <div className="min-w-32 max-w-96 max-h-96 bg-blue-50">2번</div>
        <div className="min-w-32 max-w-96 max-h-96 bg-green-50">3번</div>
      </section>
    </main>
  );
}
