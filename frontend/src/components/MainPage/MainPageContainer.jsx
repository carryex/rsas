import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

const MainPageContainer = (props) => {

  return (
      <div>
        <h2>Main page</h2>
        <ul>
          <li><button>Open day</button></li>
          <li><button>Close day</button></li>
          <li><button>Create Order</button></li>
          <li><button>Sign out</button></li>
        </ul>
      </div>
  );
};

const mapStateToProps = (state) => ({});


export default compose(
  connect(mapStateToProps, {}),
  withAuthRedirect
)(MainPageContainer);