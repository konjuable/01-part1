const Hello = (props) => {
  console.log(props);
  return (
    <section>
      <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
    </section>
  );
};

const Friends = (props) => {
  console.log(props);
  return (
    <section>
      <p>
        My dear friend {props.nimi} is {props.ika} years old.
      </p>
    </section>
  );
};

const Footer = (props) => {
  console.log(props);
  return (
    <footer>
      <hr />
      <p>Greetings app created by {props.nimi}</p>
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
      <Footer nimi={author} />
    </>
  );
};

export default App;
