import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';



const Hero = props => ( 
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.imageUrl}/>
  </header>
);
Hero.propTypes = {
  titleText: PropTypes.node,
  imageUrl: PropTypes.string,
};
Hero.defaultProps = {
  titleText: 'Things to do soon',
  imageUrl: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};  
export default Hero;