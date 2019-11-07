import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';




class Column extends React.Component {
  state ={
    card: this.props.card || [],
  }  
  static propTypes = {
        title: PropTypes.node.isRequired,
        icon: PropTypes.string,
        cards: PropTypes.array,
        addCard: PropTypes.func,
      }
      static defaultProps = {
        icon: settings.defaultColumnIcon,
      };
      addCard(title){
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key,
                title,
              }
            ]
          }
        ))

      }
    render(){
        return(
          <section className={styles.component}>
              <h3 className={styles.title}><span className={styles.icon}/><Icon name={this.props.icon}/>{this.props.subtitle}</h3>
              <div className ={styles.cards}>
                {this.state.card.map(({key, ...cardProps}) => (
                  <Card key ={key} {...cardProps} />
                ))}
              </div>
              <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
            </div>
          </section>
        )
    }
}
export default Column;