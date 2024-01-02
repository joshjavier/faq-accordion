import { useState } from 'react';
import { FAQ } from '../definitions';
import './Accordion.css';

function Accordion({ faq, open = false }: { faq: FAQ; open?: boolean }) {
  const [isOpen, setOpen] = useState(open);
  const { question, answer } = faq;

  return (
    <article className="accordion">
      <div className="trigger">
        <h3 className="title">
          <button aria-expanded={isOpen} onClick={() => setOpen((o) => !o)}>
            {question}
          </button>
        </h3>
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
