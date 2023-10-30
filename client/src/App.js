import { foo } from './API';

function App()
{

  const getFoo = async () =>
  {
    const res = await foo();
    console.log({ res });
  }

  getFoo();
  return (
    <div className="App">
      Hello world
    </div>
  );
}

export default App;
