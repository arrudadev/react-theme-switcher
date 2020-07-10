import React from 'react';

import Client1 from '../../assets/clients/client-1.png';
import Client2 from '../../assets/clients/client-2.png';
import Client3 from '../../assets/clients/client-3.png';
import Client4 from '../../assets/clients/client-4.png';
import Client5 from '../../assets/clients/client-5.png';
import Client6 from '../../assets/clients/client-6.png';

import { Container, Row } from '../../styles/styles';
import { Section, ClientContent } from './styles';

const Clients = () => {
  return (
    <Section>
      <Container>
        <Row>
          <ClientContent>
            <img src={Client1} alt="Client 1" />
          </ClientContent>
          <ClientContent>
            <img src={Client2} alt="Client 2" />
          </ClientContent>
          <ClientContent>
            <img src={Client3} alt="Client 3" />
          </ClientContent>
          <ClientContent>
            <img src={Client4} alt="Client 4" />
          </ClientContent>
          <ClientContent>
            <img src={Client5} alt="Client 5" />
          </ClientContent>
          <ClientContent>
            <img src={Client6} alt="Client 6" />
          </ClientContent>
        </Row>
      </Container>
    </Section>
  );
};

export default Clients;
