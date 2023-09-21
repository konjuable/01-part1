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

const App = () => {
  const nimi = "Pekka";
  const ika = 37;
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maija" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <Hello name="Matti" age="38" />
    </>
  );
};

export default App;
