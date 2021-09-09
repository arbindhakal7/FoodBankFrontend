import React, { Component } from "react";
import AdminNavBar from "./AdminNavBar";

export default class AdminViewRequests extends Component {
    constructor(props){
    super(props)
        this.state = {
          requestfoods: [],
          requestId:'',
            requestName: '',
            phone: '',
            foodtype:'',
            country: '',
            district: '',
            street: '',
            date:'',
            config: {
                headers: { 'Authorization': localStorage.getItem('token') }
            }
        }
      }
    
      handleDelete = (id) => {
        if(window.confirm('Are you sure to remove this request from the list?'))
        Axios.delete('http://localhost:90/api/RequestFood/' + id, this.state.config)
        .then((res)=> {
            const filteredReqFood = this.state.requestfoods.filter(req => {
                return req._id !== id;
            });
            console.log(filteredReqFood);
            this.setState({
                requestbloods: filteredReqFood
            });
         
        }).catch(err => console.log(err.response));
      }
    
      handleViewClick = (id) => {
          console.log(id)
          this.props.history.push(`/admindashboard/adminviewrequestdetails/${id}`);
      }
    
    
    componentDidMount(){
      Axios.get('http://localhost:90/api/admin/requests', this.state.config)
      .then((res)=> {
        console.log(res.data)
        this.setState({
          requestbloods: res.data
        })
      }).catch(err => console.log(err.response));
    }


  render() {
    return 
    <div>
     <AdminNavBar history = {this.props.history}/>

    </div>;
  }
}
