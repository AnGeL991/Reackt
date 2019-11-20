import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {infoFAQ} from '../../data/dataStore';
const FAQ = props => (
  <Container>
    <Hero titleText={props.title} image={props.imageUrl}></Hero>
    <h2>{props.titleText}</h2>
    <p>{props.description}</p>
  </Container>
);
FAQ.propTypes ={
  titleText: PropTypes.node,
  description:PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.node,
};
FAQ.defaultProps ={
  titleText: infoFAQ.title,
  description: infoFAQ.desription,
  imageUrl:infoFAQ.imageUrl,
};

export default FAQ;