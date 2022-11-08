import { useState } from "react"
import { useNavigate } from "react-router-dom"

import RadioForm from "./RadioForm"
import TextForm from "./TextForm"
import CheckForm from "./CheckForm"

function JobForm() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    company: "",
    logo: "",
    location: "",
    position: "",
  })

  const [formRadio, setFormRadio] = useState({
    new: "",
    featured: "",
    role: "",
    level: "",
    contract: "",
  })

  const [formCheck, setFormCheck] = useState({
    languages: [],
    tools: []
  }) 

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({ company: "", logo: "", location: "", position: "" })
    setFormRadio({ new: "", featured: "", role: "", level: "", contract: "" })
    setFormCheck({languages: [], tools: []})
    console.log({...formData, ...formRadio, ...formCheck})
    navigate("/")
  }


  return (
    <div className="form-card">
      <form className="form" onSubmit={handleSubmit}>
        <TextForm formData = {formData} setData = {(x) => setFormData(x)}/>
        <RadioForm formRadio = {formRadio} setRadio = {(x) => setFormRadio(x)}/>
        <CheckForm formCheck = {formCheck} setCheck = {(x) => setFormCheck(x)}/>
        <button type= "submit" className="btn-submit">Add Job </button>
      </form>
    </div>
  )
}

export default JobForm