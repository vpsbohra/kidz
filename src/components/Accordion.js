import React, { useState } from 'react';

function AccordionItem({ title, content, isOpen, toggleItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="accordion-item">
      <button className={isExpanded ? "accordion-button active" : "accordion-button"} onClick={()=>{ toggleAccordion(); toggleItem()}}>
        {title}
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

function Accordion({ items }) {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const toggleItem = (index) => {
    if (openItemIndex === index) {
      setOpenItemIndex(null);
    } else {
      setOpenItemIndex(index);
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openItemIndex === index}
          toggleItem={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
