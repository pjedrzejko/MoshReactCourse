

import ListGroup from "./components/ListGroup";

function App() {
    let items = ["New York", "Jane N Finch", "Regent Park", "Southside Jane"]
    return <div>
        <ListGroup items={items} heading="Cities"/>
    </div>
}



export default App;

