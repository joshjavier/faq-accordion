import Accordion from './components/Accordion';
import { faqs } from './data.json';
import './App.css';

function App() {
  return (
    <main>
      <h1 className="visually-hidden">FAQ accordion</h1>
      <ul role="list">
        {faqs.map((faq) => (
          <li key={faq.id}>
            <Accordion faq={faq} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
