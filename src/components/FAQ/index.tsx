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
      title: 'Non consectetur a erat nam at lectus urna duis?',
      answer:
        'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
    },
    {
      index: 1,
      isOpened: false,
      title: 'Non consectetur a erat nam at lectus urna duis?',
      answer:
        'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
    },
    {
      index: 2,
      isOpened: false,
      title: 'Non consectetur a erat nam at lectus urna duis?',
      answer:
        'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
    },
    {
      index: 3,
      isOpened: false,
      title: 'Non consectetur a erat nam at lectus urna duis?',
      answer:
        'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
    },
    {
      index: 4,
      isOpened: false,
      title: 'Non consectetur a erat nam at lectus urna duis?',
      answer:
        'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
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
