import Accordion from './components/Accordion';
import IconStar from './icons/IconStar';
import { faqs } from './data.json';
import './App.css';

function App() {
  return (
    <main>
      <div className="container">
        <h1>
          <IconStar />
          <abbr title="Frequently Asked Questions">FAQs</abbr>
        </h1>
        <ul role="list">
          {faqs.map((faq) => (
            <li key={faq.id}>
              <Accordion faq={faq} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
