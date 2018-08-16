/**
 *
 * AboutPage
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Container, Header, Divider, Icon } from 'semantic-ui-react';

import Button from 'components/Button';

const AboutWrapper = styled.div`
  p {
    margin-bottom: 2em;
    font-family: monospace;
  }
`;

function goToPage(link) {
  return window.open(link, '_blank');
}

function AboutPage() {
  return (
    <AboutWrapper>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Description of AboutPage" />
      </Helmet>
      <Container text textAlign="center" style={{ marginTop: '7em' }}>
        <Header as="h3">Author</Header>
        <Divider />
        <p>Rudy Ondolan</p>
        <Button
          onClick={() => goToPage('https://facebook.com/rudyondolan')}
          color="facebook"
        >
          <Icon name="facebook" /> Facebook
        </Button>
        <Button
          onClick={() => goToPage('https://twitter.com/rudyondolan')}
          color="twitter"
        >
          <Icon name="twitter" /> Twitter
        </Button>
        <Button
          onClick={() => goToPage('https://linkedin.com/in/rudyondolan')}
          color="linkedin"
        >
          <Icon name="linkedin" /> LinkedIn
        </Button>
        <Button
          onClick={() => goToPage('https://github.com/rudyondolan')}
          color="black"
        >
          <Icon name="github" /> GitHub
        </Button>
      </Container>
    </AboutWrapper>
  );
}

export default AboutPage;
