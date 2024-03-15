import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Intro } from './components/intro/Intro';
import { info } from './components/data';
import { Header } from './components/header';
import iconOne from './assets/images/bootstrap-icon.png';
import iconTwo from './assets/images/react-icon.png';
import iconThree from './assets/images/html-icon.png';
import iconFour from './assets/images/css-icon.png';

export default function App() {
  return (
    <div>
      <Header 
        iconOne={iconOne}
        iconTwo={iconTwo}
        iconThree={iconThree}
        iconFour={iconFour}
      />
      <Intro 
        name={info.name}
        designation={info.designation}
        description={info.description}
      />
    </div>
  );
}
