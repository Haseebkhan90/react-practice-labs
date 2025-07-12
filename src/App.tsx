import GreetingCard from "./components/GreetingCard";
import Counter from "./components/Counter";


function App() {
  return (
    <>
      <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
        <h1>🚀 React Day 1 Practice</h1>
        <GreetingCard name="M. Haseeb Khan" />
        <Counter />
      </div>
    </>
  )
}
export default App;
