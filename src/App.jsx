import("./App.css");
const Hello = (props) => {
  console.log(props);

  // 2. versio
  const { name, age } = props;
  // 1. versio
  // const name = props.name;
  // const age = props.age;

  // 3. versio
  const bornYear = () => new Date().getFullYear() - age;
  // 1. versio
  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear();
  //   return yearNow - age;
  // };

  // 2. versio
  // const bornYear = () => {
  //   return new Date().getFullYear() - age;
  // };

  return (
    <section>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p className="sisennys">So you are probably born {bornYear()}.</p>
    </section>
  );
};
const Heippa = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <section>
      <p>
        Heippa {name}, sinä olet {age} vuotta vanha.
      </p>
      <p className="sisennys">
        Joten olet todennäköisesti syntynyt vuonna {bornYear()}.
      </p>
    </section>
  );
};

const Friends = ({ nimi, ika }) => {
  console.log(nimi, ika);
  return (
    <section>
      <p>
        My dear friend {nimi} is {ika} years old.
      </p>
    </section>
  );
};

const Footer = ({ nimi }) => {
  console.log(nimi);
  return (
    <footer>
      <hr />
      <p>Greetings app created by {nimi} (c) 2024</p>
    </footer>
  );
};

const App = () => {
  const author = "Juha Konttinen";
  const nimi = "Pekka";
  const ika = 37;
  const friends = [
    { name: "Leevi", age: 4 },
    { name: "Venla", age: 10 },
  ];
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maija" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <Hello name="Matti" age="38" />
      <Friends nimi={friends[0].name} ika={friends[0].age} />
      <Friends nimi={friends[1].name} ika={friends[1].age} />
      <h1>Terveisiä</h1>
      <Heippa name="Maija" age={26 + 10} />
      <Heippa name={nimi} age={ika} />
      <Heippa name="Matti" age="38" />
      <Footer nimi={author} />
    </>
  );
};

export default App;
