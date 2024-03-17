import "./App.css";
import {useState} from "react"

function App() {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");

  function addNewTransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    // console.log(url);
    fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({name, dateTime, description})
    }).then(response => {
      response.json().then(json => {
        console.log('result', json);
      });
    });
  }

  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <div>
        <form onSubmit={addNewTransaction}>
          <div className="basic">
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              placeholder={"+200 samsung TV"}
            ></input>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(ev) => setDateTime(ev.target.value)}
            ></input>
          </div>
          <div className="description">
            <input
              type="text"
              placeholder={"Description"}
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            ></input>
          </div>
          <button type="submit"> Add new transaction</button>
        </form>

        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">New Samsung TV</div>
              <div className="description">It was time for a new TV</div>
            </div>
            <div className="right">
              <div className="price red">-$500</div>
              <div className="dateTime">25-05-2024 18:30</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">Freelance project</div>
              <div className="description">It was time for a new TV</div>
            </div>
            <div className="right">
              <div className="price green">+$700</div>
              <div className="dateTime">25-05-2024 18:30</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">IPhone</div>
              <div className="description">It was time for a new TV</div>
            </div>
            <div className="right">
              <div className="price red">-$900</div>
              <div className="dateTime">25-05-2024 18:30</div>
            </div>
          </div>

          <div className="transaction">
            <div className="left">
              <div className="name">New Samsung TV</div>
              <div className="description">It was time for a new TV</div>
            </div>
            <div className="right">
              <div className="price green">$500</div>
              <div className="dateTime">25-05-2024 18:30</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
