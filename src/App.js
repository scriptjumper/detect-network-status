import { useNetwork } from "./hooks/useNetwork";

import "./App.css";

function App() {
  let [isOnline, connection] = useNetwork();

  return (
    <main>
      <span className={isOnline ? "online" : "offline"}>
        Status: {isOnline ? "Online" : "Offline"}
      </span>
      <span>Down Link: {connection.downlink}</span>
      <span>Effective Type: {connection.effectiveType}</span>
      <span>Latency: {connection.rtt}</span>
      <span>Data Saver?: {connection.saveData ? "Yes" : "No"}</span>
    </main>
  );
}

export default App;
