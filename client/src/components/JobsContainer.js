import React, { useEffect } from "react";
import Loading from "./Loading";
import { useAppContext } from "../context/appContext";
import Wrapper from '../assets/wrappers/JobsContainer'
const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext();
  useEffect(() => {
    getJobs();
  }, [])

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return <Wrapper>
      <h2>No Jobs to display....</h2>
    </Wrapper>;
  }
  
  return <Wrapper>
    <h5>{totalJobs} job{jobs.length > 1 && 's'} found</h5>
  </Wrapper>;
};

export default JobsContainer;
