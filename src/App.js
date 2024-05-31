import './App.css';
import { router } from './router/routes';
import { RouterProvider } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
