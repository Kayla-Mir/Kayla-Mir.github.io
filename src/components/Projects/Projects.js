import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Button from '../../styles/GlobalComponents/Button';

const Projects = () => (
  <Section  id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit, deployed}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div style={{marginTop: '20px'}}>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            {deployed !== '' && <ExternalLinks href={deployed}>Live Version</ExternalLinks>}
            {source !== '' && <ExternalLinks href={source}>Demo</ExternalLinks>}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <div style={{margin: 'auto'}}>
      <Button 
        style={{padding: '20px'}}
        onClick={() => window.location = 'https://www.github.com/Kayla-Mir'}
      >
        More of my work!
      </Button>
    </div>
  </Section>
);

export default Projects;