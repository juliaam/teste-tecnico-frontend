import Header from './components/Header/Header';
import Main from './components/Main/Main';

export default function Home() {
  return (
    <div className=" h-dvh py-5 flex flex-col gap-5">
      <Header />
      <main className="mx-auto">
        <Main />
      </main>
    </div>
  );
}
