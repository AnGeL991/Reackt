import {connect} from 'react-redux';
import Column from './Column';
export const getcardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
const mapStateToProps = (state, props) => ({
  cards: getcardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);