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
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maija" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <Hello name="Matti" age="38" />
      <Footer nimi={author} />
    </>
  );
};

export default App;
