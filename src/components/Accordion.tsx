import { useState } from 'react';
import IconToggle from '../icons/IconToggle';
import { FAQ } from '../definitions';
import './Accordion.css';

function Accordion({ faq, open = false }: { faq: FAQ; open?: boolean }) {
  const [isOpen, setOpen] = useState(open);
  const { question, answer } = faq;

  return (
    <article className="accordion">
      <div className="trigger">
        <h2 className="title">
          <button aria-expanded={isOpen} onClick={() => setOpen((o) => !o)}>
            <span>{question}</span>
            <IconToggle />
          </button>
        </h2>
      </div>
      <div className="panel" aria-hidden={!isOpen}>
        <div style={{ overflow: 'hidden' }}>
          <p>{answer}</p>
        </div>
      </div>
    </article>
  );
}

export default Accordion;
