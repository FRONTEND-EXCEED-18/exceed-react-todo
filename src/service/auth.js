import axios from "axios"

export async function login(user) {
  // const res = await fetch("http://localhost:4000/login", {
  //   method: 'POST',
  //   body: JSON.stringify(user),
  //   headers: {
  //     'content-type' : 'appliction/json'
  //   }
  // })
  // const data = res.json()
  // return data

  const res = await axios.post("http://localhost:4000/login", user)
  return res.data
}

export async function register(user) {
  const res = await axios.post("http://localhost:4000/register", user)
  return res.data
}
