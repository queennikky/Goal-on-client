import React, { useState, useEffect } from "react";
import goals from "../data/goals";
import Completed from "../components/Completed";
import GoalHeader from "../components/GoalHeader";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

const Complete = () => {
  const {
    isLoading,
    data: { goals },
  } = useFetch("https://goalapitest.onrender.com/api/goals");
  const Goals = isLoading ? [] : goals.filter((g) => g.progress === 100);

  return (
    <div className="container mt-2">
      <GoalHeader heading="Completed" />
      {isLoading && <Loading />}
      <div>
        {Goals && Goals.map((g) => {
          return <Completed key={g._id} {...g} />;
        })}
      </div>
    </div>
  );
};

export default Complete;
