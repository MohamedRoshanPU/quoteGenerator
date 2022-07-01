import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import axios from "axios";

function App() {
  const [quotes, setQuotes] = useState("");

  useEffect(() => {
    axios.get("https://type.fit/api/quotes").then((res) => {
      let numbers = Math.floor(Math.random() * res.data.length - 1);
      setQuotes(res.data[numbers]);
      console.log(res.data);
    });
  }, []);

  const generateQuote = () => {
    axios.get("https://type.fit/api/quotes").then((res) => {
      let numbers = Math.floor(Math.random() * res.data.length - 1);
      console.log(numbers);
      setQuotes(res.data[numbers]);
    });
  };

  console.log(quotes);

  return (
    <div className="App">
      <Home click={generateQuote} quotes={quotes} />
    </div>
  );
}

export default App;
