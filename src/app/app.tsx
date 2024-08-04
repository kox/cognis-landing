import ScrollUp from "components/atoms/scrollUp";
import Header from "components/organisms/header";
import Hero from "components/organisms/hero";

function App() {
  return (
    <main>
      <Header />
      <ScrollUp />
      <Hero />

      <header className="pt-16 z-10 relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h3 className="text-2xl sm:text-4xl leading-none font-bold tracking-tight text-purple-200">
          <span className="text-[gold] opacity-75">Cognis</span>
        </h3>
        <h1 className="text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 text-purple-400">
          Landing
        </h1>
      </header>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto"></section>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4"></section>
      <footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold">
        <a href="https://github.com/kox">kox @ {new Date().getFullYear()}</a>
      </footer>
    </main>
  );
}

export default App;
