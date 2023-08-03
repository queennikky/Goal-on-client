import React, { useState, useEffect } from "react";
import GoalHeader from "../components/GoalHeader";
import step from "../assets/amico.png";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [progress, setprogress] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const redirect = useNavigate();

  const { goalId } = useParams();
  const url = `http://localhost:8000/api/goals/${goalId}`;
  const getGoal = async () => {
    const res = await fetch(url);
    const { goal } = await res.json();
    console.log(goal);
    setIsLoading(false);
    setTitle(goal.title);
    setdescription(goal.description);
    setprogress(goal.Progress);
  };

  useEffect(() => {
    getGoal();
  }, [goalId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, progress, description }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Goal Update Successful");
        redirect("/all");
      } else {
        toast.error("Error while updating, Retry");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <GoalHeader heading="Progress" />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container d-flex justify-content-between align-items-center mt-3 pb-3 gap-lg-2">
          <div className="main-form py-5 px-1 ps-lg-2 ps-xl-3 pe-xl-3 rounded-2">
            <ToastContainer />
            <form className="create-form" onSubmit={handleUpdate}>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Goal Title"
                  className="bg-transparent"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mt-5">
                <textarea
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Goal Description"
                  className="bg-transparent"
                ></textarea>
              </div>
              <div>
                <p>Update Progress</p>
                <input
                  value={progress}
                  onChange={(e) => setprogress(e.target.value)}
                  type="number"
                  min="0"
                  max="100"
                  className="bg-transparent mt-2"
                />
              </div>
              <div className="mt-2">
                <button className="blue-bg p-2">Update</button>
              </div>
            </form>
          </div>
          <div className="d-none d-lg-block main-img">
            <img src={step} alt="image of a step" />
          </div>
        </div>
      )}
    </>
  );
};

export default Update;
