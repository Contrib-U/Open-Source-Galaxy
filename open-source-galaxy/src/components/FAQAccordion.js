import React, { useState } from 'react';
import './FAQAccordion.css';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-section">
      <div className="accordion-title" onClick={toggleAccordion}>
        {title}
      </div>
      <div className={`accordion-content ${isOpen ? 'show' : ''}`}>
        {content}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="accordion">
      <h1>Frequently Asked Questions</h1>
      <AccordionItem 
        title="What is an open source contribution?" 
        content={
          <p>
            An open source contribution refers to the act of participating in the development or improvement of open source software. Open source software is software with source code that anyone can inspect, modify, and enhance. Contributions can take many forms, including code submissions, bug reports, documentation, translations, and more.
          </p>
        }
      />
      <AccordionItem 
        title="Why are open source contributions important?" 
        content={
          <p>
            Open source contributions are vital because they foster innovation, collaboration, and transparency. They allow developers to share their work, improve existing software, and learn from others. Open source projects can benefit from a diverse set of contributors, leading to more robust, secure, and feature-rich software. Moreover, contributing to open source can enhance a developer's skills, build their portfolio, and grow their professional network.
          </p>
        }
      />
      <AccordionItem 
        title="How to do an open source contribution?" 
        content={
          <div>
            <p>Contributing to open source can be done in several steps:</p>
            <ol>
              <li>
                <strong>Find a Project:</strong> Look for a project that interests you and matches your skill set. GitHub, GitLab, and other platforms host many open source projects.
              </li>
              <li>
                <strong>Understand the Project:</strong> Read the project's documentation, guidelines, and contributing instructions. This will help you understand the project's goals and how you can contribute.
              </li>
              <li>
                <strong>Pick an Issue:</strong> Look for issues labeled as "good first issue" or "help wanted." These are typically beginner-friendly and can be a good starting point.
              </li>
              <li>
                <strong>Fork and Clone the Repository:</strong> Fork the project repository to your GitHub account and clone it to your local machine.
              </li>
              <li>
                <strong>Make Changes:</strong> Create a new branch, make your changes, and test them thoroughly.
              </li>
              <li>
                <strong>Submit a Pull Request (PR):</strong> Push your changes to your forked repository and create a pull request. Describe the changes you made and why they are necessary.
              </li>
            </ol>
            <p>
              Remember to be patient and open to feedback from project maintainers. Contributing to open source is a collaborative effort, and constructive feedback helps everyone improve.
            </p>
          </div>
        }
      />
    </div>
  );
};

export default FAQ;
