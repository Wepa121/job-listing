import {useEffect} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CardList from "components/CardList"
import JobForm from "components/JobForm"
import useJobsState from "templates/hooks/useJobsState"


function App() {
  const {jobs, fetchJobs, insertJob, deleteJob} = useJobsState();

  useEffect(() => {
    fetchJobs();
  }, []);

  // create new Job

  const handleAdd = (tempObj)=>{
    insertJob(tempObj);
  }

  // Delete job but need id
  const handleDelete = (id)=>{
    deleteJob(id)
  }
  
  return (
    <Router>
      <div className = "container">
        <Routes>
          <Route path="/" element = {<CardList list = {jobs} handleDelete = {handleDelete}/>} />
          <Route path="/add" element = {<JobForm handleAdd = {handleAdd}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
