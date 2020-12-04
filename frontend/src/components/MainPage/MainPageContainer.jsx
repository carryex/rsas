import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getRestoranIsOpen} from '../../redux/restoran-reducer';

const MainPageContainer = ({isOpen}) => {
      let message;
      if (isOpen) {
        message = <div>open</div>;
      } else {
        message = <div>close</div>;
      }
  return (
      <div>
        <h2>Main page</h2>
        <div>
          {message }
        </div>
      </div>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.restoran.isOpen,
});

export default compose(
    connect(mapStateToProps, {
      getRestoranIsOpen,
    }),
    withAuthRedirect,
)(MainPageContainer);