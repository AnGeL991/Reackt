import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import {
  createAction_addCard,
  getCardsBySearch} from '../../redux/cardsRedux';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';
const mapStateToProps = (state) => ({cards: getCardsBySearch(state),
});
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    columnId: props.id,
    title,
  })),
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);