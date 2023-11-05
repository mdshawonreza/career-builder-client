import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  TabList, TabPanel, Tabs } from "react-tabs";
import Category from "./Category";
import JobCards from "./jobcards";

const Jobs = () => {
    const [categories,setCategories]=useState([])
  //   const [jobs,setJobs]=useState([])

  //   const params=useParams()
  //   console.log(params)

  //   const url=`http://localhost:5000/jobs?jobCategory=${params.jobCategory}`

  //   useEffect(()=>{
  //     fetch(url)
  //     .then(res=>res.json())
  //     .then(data=>setJobs(data))
  // },[url])
    

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <Tabs>
        <TabList className="flex justify-around ">
          
          {
            categories.map(category=><Category key={category._id} category={category}></Category>)
          }
        </TabList>
    
        <TabPanel>
          {/* {
            jobs.map(job=><h2 key={job._id}>ok</h2>)
          } */}
            {/* <JobCards></JobCards> */}
        </TabPanel>
        
      </Tabs>
    );
};

export default Jobs;

