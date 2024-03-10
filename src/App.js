import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Intro } from './components/Intro';
import { info } from './components/data';

export default function App() {
  return (
    <div>
      <Intro 
        name={info.name}
        designation={info.designation}
        description={info.description}
      />
    </div>
  );
}
