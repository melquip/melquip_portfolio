import React from 'react';
import TableDashboard from './TableDashboard';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const initialAboutState = {
  id: 0,
  line: "",
  priority: 0
}
const initialProjectsState = {
  id: 0,
  title: "",
  summary: "",
  description: "",
  urlLive: "",
  urlRepo: "",
  priority: 0
}
const initialQuestionsState = {
  id: 0,
  question: "",
  answer: "",
  priority: 0
}

const Dashboard = (props) => {
  const { logout, history } = props;
  const onLogout = () => {
    logout();
    history.push('/');
  }
  return (
    <section className="dashboard">
      <div className="inner">
        <Button variant="contained" color="primary" onClick={onLogout}>Logout</Button>
        <br />
        <br />
        <h1>About</h1>
        <TableDashboard
          table="about"
          initialState={initialAboutState}
          fieldTypes={[null, 'string', 'number']}
        />
        <br /><br />
        <h1>Projects</h1>
        <TableDashboard
          table="projects"
          initialState={initialProjectsState}
          fieldTypes={[null, 'string', 'string', 'text', 'string', 'string', 'number']}
        />
        <br /><br />
        <h1>Questions</h1>
        <TableDashboard
          table="questions"
          initialState={initialQuestionsState}
          fieldTypes={[null, 'string', 'string', 'number']}
        />
      </div>
    </section>
  )
}

export default connect(state => state, actionCreators)(Dashboard);