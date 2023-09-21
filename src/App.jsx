const Hello = () => {
  return (
    <section>
      <p>Hello World</p>
    </section>
  );
};

const App = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </>
  );
};

export default App;
