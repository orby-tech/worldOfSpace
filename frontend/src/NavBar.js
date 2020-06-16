import React, { Component }  from 'react';

import  { connect } from 'react-redux'

import  rocket from "./img/rocket.png";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
          <nav>
            
            <Link to="/">
            <img  
                  className="exit"
                  title="Вернуться на космодром!"
                  to="/"
                  alt="exit IMG"
                  src={rocket}/>
            </Link>
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
