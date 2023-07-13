import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle'
import Nav from "./components/Nav";
import List from "./components/List";
function App() {
  
  return (
    <div className="App">
      <div className="bgc">
        <div className="container pt-4 d-flex flex-column justify-content-between align-items-center page">
              <div className="w-100">
              <Nav />
              </div>
              <div className="col-md-7" >
              <List/>
              </div>
              <div>
                <h3 className="text-warning">
                  some text
                </h3>
              </div>
            </div>
            
      </div>
    </div>
  );
}

export default App;
