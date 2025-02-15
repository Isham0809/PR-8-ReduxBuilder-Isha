import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import { store } from "./store/store";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 transition-colors duration-300">
            <div className="fixed top-4 right-4">
              <ThemeToggle />
            </div>
            <Counter />
          </div>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
