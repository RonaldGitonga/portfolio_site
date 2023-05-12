import React from 'react';
import { DiFirebase, DiRasberryPi, DiReact, DiZend } from 'react-icons/di';
import {SiSolidity} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id='technologies'>
  <SectionDivider />
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
    I've worked with a range of technologies in the web development world.
   </SectionText>
   <List>
    <ListItem>
      <DiReact size='3rem' />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          React.js , Next.js 
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiFirebase size='3rem' />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          PHP, MySQL and Sanity.io
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiZend size='3rem' />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Figma
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiRasberryPi size='3rem' />
      <ListContainer>
        <ListTitle>IoT</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Arduino , RaspeberryPI and HomeAssistant
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <SiSolidity size='3rem' />
      <ListContainer>
        <ListTitle>Web 3.0</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Solidity Web 3.0 development
        </ListParagraph>
      </ListContainer>
    </ListItem>
   </List>
</Section>

);

export default Technologies;
