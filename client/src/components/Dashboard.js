import React from 'react';
import TableDashboard from './TableDashboard';

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
// number, string, text, url
const Dashboard = (props) => {
  return (
    <section className="dashboard">
      <div className="inner">
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

export default Dashboard;