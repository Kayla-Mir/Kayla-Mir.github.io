import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Kayla Mir
      </SectionTitle>
      <SectionText>
        Engineering solutions to real world business needs through thoughtful development and lateral thinking.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/kayla-mir/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;