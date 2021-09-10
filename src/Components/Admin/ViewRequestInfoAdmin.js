import React, {Component} from 'react'
import AdminNavBar from './AdminNavBar';

export default function AdminViewRequestDetails(props) {
  let { id } = useParams();
  return (
    <div>
      <UpdateForm id={id} />
    </div>
  );
}

class UpdateForm extends Component {
  render() {
    return (
      <div>
        <AdminNavBar history={this.props.history} />
      </div>
    );
  }
}
