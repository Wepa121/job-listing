import {useState} from "react"
import {fetchApi} from "../../services/api";
import {queryJobs, insertJobsOne} from "../../data/query";
import { deleteJobsOne } from "../../data/query";

function useJobsState() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async() => {
    const data = await fetchApi(queryJobs)
    setJobs(data.Jobs)
  }

  const insertJob = async(payload) => {
    const data = await fetchApi(insertJobsOne(payload))
    setJobs(jobs.concat([data.insert_Jobs_one]))
  }

  const deleteJob = async(id) => {
    const data = await fetchApi(deleteJobsOne(id))
    setJobs(jobs.filter(item => item.id !== data.delete_Jobs_by_pk.id ))
  }
  return {
    jobs,
    fetchJobs,
    insertJob,
    deleteJob
  }
}

export default useJobsState