import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source & Proprietary Projects'},
  { number: 100, text: 'Cups of Coffee', },
  { number: 1000, text: 'Lines of Code', },
  
];

const Accomplishments = () => (
 <Section>
  <SectionTitle>Personal Accomplishments</SectionTitle>
  <Boxes>
    {data.map((card,index)=>(
      <Box key={index}>
        <BoxNum>{card.number}+</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
          
    ))}
  </Boxes>
 </Section>
);

export default Accomplishments;
