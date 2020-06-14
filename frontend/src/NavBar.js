import React, { Component }  from 'react';

import  { connect } from 'react-redux'


class PRENavBar extends Component{
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: true
    };
  }


  componentDidMount(){
    const { match: { params } } = this.props;
    this.setState({opend: params.id});
  }


  componentDidUpdate(prevProps) {
    const { match: { params } } = this.props;
    if (params.id !== this.state.opend) {
      this.setState({opend: params.id});
    }
  }
  toggleNavbar(){
    this.setState({collapsed: !this.state.collapsed})
  }


  render() {
    return(   
          <nav className="navbar navbar-light transparent-nav" id="navBar">
            
        </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return { 
  };
}

const NavBar = connect(mapStateToProps)(PRENavBar);
export default NavBar;
