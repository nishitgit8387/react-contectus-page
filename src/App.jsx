import "./App.css";
import ContectFrom from "./components/ContectFrom/ContectFrom";
import ContectHeader from "./components/ContectHeader/ContectHeader";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContectHeader />
        <ContectFrom />
      </main>
    </div>
  );
}

export default App;
