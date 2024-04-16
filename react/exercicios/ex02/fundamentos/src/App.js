import FistComponents from './components/FirstComponent';

import MyComponent from './components/MyComponent';
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FistComponents/> 
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
