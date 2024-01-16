import TitleList from "@/components/TitleList";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="App container my-5">
      <header className="bg-primary text-white text-center py-4 mb-4 rounded">
        <h1 className="display-4">Microblog</h1>
        <p className="lead">Get in the Rithm of blogging!</p>
        <Navbar />
      </header>
      <main>
        <div className="alert alert-secondary" role="alert">
          Welcome to <strong>Microblog</strong>, our innovative site for communicating
          on the information superhighway.
        </div>
        <TitleList />
      </main>


    </div>
  );
}