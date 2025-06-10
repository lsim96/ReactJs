import "./App.css";
import "./Layout/Header/Header";
import "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import ProductList from "./Components/ProductList/ProductList";
import PersonInfo from "./Components/PersonInfo/PersonInfo";
import Button from "./Components/Button/Button";

function App() {
  const firstName = "Leon";
  const lastName = "Simonoski";

  const person = {
    firstName: "John",
    lastName: "Doe",
  };

  const isParagraphShown = false;

  const isFinished = false;

  const colors: string[] = [
    "lightgreen",
    "lightgray",
    "lightblue",
    "lightyellow",
    "lightcoral",
    "aliceblue",
  ];

  return (
    <div>
      <Header />

      <main className="main">
        {/* {Rendering dynamic variables in JSX} */}
        <h2>Content</h2>

        <h3>Normal Variables</h3>
        <h4>{firstName}</h4>
        <h4>{lastName}</h4>

        <h3>Object properties</h3>
        <h4>{person.firstName}</h4>
        <h4>{person.lastName}</h4>
        <button disabled={true}>Test</button>
        {/* {Conditional rendering in React} */}
        {isParagraphShown && (
          <p className="hide-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nostrum
            pariatur distinctio nisi illum voluptates corrupti non, laborum unde
            autem.
          </p>
        )}
        <div
          className="todo"
          style={{ backgroundColor: isFinished ? "lightgreen" : "lightpink" }}
        >
          Do the dishes
        </div>
        {/* {Rendering lists in React} */}
        <ul className="list">
          {colors.map((color, i) => (
            <li key={i} style={{ backgroundColor: color }}>
              {color}
            </li>
          ))}
        </ul>

        <ProductList />

        <PersonInfo firstName="John" lastName="Doe" />
        <PersonInfo firstName="Jane" lastName="Doe" bgColor="lightpink" />
        <PersonInfo
          firstName="Risto"
          lastName="Bombata"
          bgColor="lightyellow"
        />

        <Button text="Click Me" />
        <Button text="Success" style={{ backgroundColor: "lightgreen" }} />
        <Button text="I am disabled" disabled={true} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
