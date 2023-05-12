import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection> 
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>

      <SectionText>
        My vision is to develop modern , effective and efficient digital solutions using indurstry standard best practises, fueled by a tenacious drive,an eye for detail and observation.
      </SectionText>

      
    </LeftSection>

  </Section>
);

export default Hero;