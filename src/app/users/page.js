// 'use client'
import axios from "axios";

async function get() {
  let data = await axios({
    url: "https://dummyjson.com/users",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data.data.users;
}
export default async function Users() {
  let users = await get();
  //   console.log(users);
  // users= await users.json();
  // console.log(users)
  //   const abc=
  return (
    <div>
      <h1>User Name List</h1>
      {users.map((item) => {
        
        return (
            <div>
            <h2>{item.firstName}</h2>
            <h4>{item.lastName}</h4>
            </div>);
      })}
    </div>
  );
}
