import Card from "./card";

function App() {
  return (
    <Card title="User Setting">
      <p>Modify your account prefrence</p>
      <input type="text" placeholder="Change username"/>
      <button>Submit</button>
    </Card>
  );
}

export default App;
