import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { FaSortDown, FaSortUp } from 'react-icons/fa';
import { FiHelpCircle } from 'react-icons/fi';

import { Container, SectionTitleWhite } from '../../styles/styles';
import {
  Section,
  FaqList,
  HelpIcon,
  Question,
  ArrowIcon,
  CollapseContent,
} from './styles';

const FAQ = () => {
  const [questions, setQuestions] = useState([
    {
      index: 0,
      isOpened: true,
      title: 'What is FAQ?',
      answer:
        'A list of questions and answers relating to a particular subject, especially one giving basic information for users of a website.',
    },
    {
      index: 1,
      isOpened: false,
      title: 'What is Styled Components?',
      answer:
        'React Library that help you to create styles with javascript files. In Style Components you will create React Components to style your page.',
    },
    {
      index: 2,
      isOpened: false,
      title: 'What is Context API?',
      answer:
        'The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application.',
    },
    {
      index: 3,
      isOpened: false,
      title: 'what is lorem ipsum?',
      answer:
        'The expression Lorem ipsum in graphic design and publishing is a standard Latin text used in graphic production to fill the text spaces in publications to test and adjust visual aspects before using real content.',
    },
    {
      index: 4,
      isOpened: false,
      title: 'How to Contact the Developer?',
      answer: 'Follow me in Social Media (GitHub, Linkedin)',
    },
  ]);

  function handleCollapseClick(index: number) {
    questions[index].isOpened = !questions[index].isOpened;
    setQuestions([...questions]);
  }

  return (
    <Section>
      <Container>
        <SectionTitleWhite>
          <h2>FAQ</h2>
          <p>Frequently Asked Questions</p>
        </SectionTitleWhite>
        <FaqList>
          <ul>
            {questions.map(question => (
              <li key={question.index}>
                <HelpIcon>
                  <FiHelpCircle size={24} color="#8577fb" />
                </HelpIcon>
                <Question onClick={() => handleCollapseClick(question.index)}>
                  {question.title}
                  <ArrowIcon>
                    {question.isOpened ? <FaSortUp /> : <FaSortDown />}
                  </ArrowIcon>
                </Question>
                <Collapse isOpened={question.isOpened}>
                  <CollapseContent>{question.answer}</CollapseContent>
                </Collapse>
              </li>
            ))}
          </ul>
        </FaqList>
      </Container>
    </Section>
  );
};

export default FAQ;
