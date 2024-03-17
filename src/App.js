import './App.css';

function App() {
  return (
    <main>
      <h1>$400<spam>.00</spam></h1>
      <div>
        <form>
          <div className = "basic">
            <input type = "text" placeholder = {'+200 samsung TV'}></input>
            <input type = "datetime-local"></input>
          </div>
          <div className = "description">
            <input type = "text" placeholder = {'Description'}></input>
          </div>
          <button type = "submit"> Add new transaction</button>
        </form>

        <div className = "transactions">
          <div className = "transaction">
            <div className = "left">
              <div className = "name">New Samsung TV</div>
              <div className = "description">It was time for a new TV</div>
            </div>
            <div className = "right">
              <div className = "price red">-$500</div>
              <div className = "dateTime">25-05-2024 18:30</div>
            </div>
          </div>

          <div className = "transaction">
            <div className = "left">
              <div className = "name">Freelance project</div>
              <div className = "description">It was time for a new TV</div>
            </div>
            <div className = "right">
              <div className = "price green">+$700</div>
              <div className = "dateTime">25-05-2024 18:30</div>
            </div>
          </div>

          <div className = "transaction">
            <div className = "left">
              <div className = "name">IPhone</div>
              <div className = "description">It was time for a new TV</div>
            </div>
            <div className = "right">
              <div className = "price red">-$900</div>
              <div className = "dateTime">25-05-2024 18:30</div>
            </div>
          </div>

          <div className = "transaction">
            <div className = "left">
              <div className = "name">New Samsung TV</div>
              <div className = "description">It was time for a new TV</div>
            </div>
            <div className = "right">
              <div className = "price green">$500</div>
              <div className = "dateTime">25-05-2024 18:30</div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  );
}

export default App;
