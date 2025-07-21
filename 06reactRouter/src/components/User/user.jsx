import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid}= useParams()
  return (
    <div className="bg-amber-900 text-5xl text-white p-4">User: {userid}</div>
  )
}

export default User;