import React from 'react';
import logo from './react.svg';
import './Home.css';
import './custom.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Table from './Table';
import { Card, CardBlock } from 'reactstrap';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
          <Card>
              <CardBlock>
                  <Table />
              </CardBlock>
          </Card>
      </div>
    );
  }
}

export default Home;
