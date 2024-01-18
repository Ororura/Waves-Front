import './App.css';
import {useEffect, useState} from "react";
import Service from "./Service";

function App() {
  const [suppData, setSuppData] = useState({});
  const [distData, setDistData] = useState({});
  useEffect(() => {
    (async () => {
      // console.log(Service.getData());
      await Service.getSupp().then((el) => {
        setSuppData(el.data)
        console.log(el.data)
      });
      await Service.getDist().then((el) => {
        console.log(el.data)
        setDistData(JSON.parse(el.data.value))
      })


    })()
  }, []);
  return (
    <div className="App">
      <p> {distData.companyName} </p>
      <p> {distData.suppDesc} </p>
      <p> {distData.firstName} </p>
      <p> {distData.lastName} </p>
      <p> {distData.phone} </p>
      <p> {distData.key} </p>
    </div>
  );
}

export default App;
