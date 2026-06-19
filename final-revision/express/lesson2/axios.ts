// differnce in axios and fetch
// it give back json and response object

import express from 'express';
import axios from 'axios'

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then(data => console.log(data))

axios.get("https://jsonplaceholder.typicode.com/users")
.then(response => console.log(response.data))


// Why axios?
// axios give back response object like res.data,.status and headers


async function fetchUser() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response.data);
}
fetchUser();

//fudamental of data manipulation

async function createUser(){
    const newUser = {
        name : "Soarbh",
        user : "soarbh123"
    }
    
    const res = await axios.post('https://jsonplaceholder.typicode.com/users',newUser);
    console.log("status: ",res.status);
    console.log("Created User:",res.data)
}

createUser();


// try catch 

async function fetchData() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
  } catch (error) {
    console.log("error something went wrong!!");

    if (axios.isAxiosError(error)) {
      console.log("status code:", error.response?.status); // may be undefined for network errors
      console.log("error data:", error.response?.data);
    } else {
      console.log("non-axios error:", error);
    }
  }
}

fetchData()

// Custom instance for axios

const apiClient  = axios.create({
  baseURL:"https:localhost/v1",
  timeout: 5000,
  headers: {
    'Content-Type' : 'application/json',
    'Authorization': 'Bearer '
  }
})

async function getProduct() {
  const res = await apiClient.get("/product");
    console.log(res.data);
}

// reponse header

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if(token){
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
(error)=>{
  return Promise.reject(error)
}
)
apiClient.interceptors.response.use(
  (response) =>{
    return response;
  },
  (error)=>{
    if(error.response && error.response.status ===  401){
      console.log('session expired. Redirecting to login...');
      localStorage.removeItem('usertoken');
      window.location.href = '/login';
      return  Promise.reject(error);
    }
  }
)

// PUT

const api = axios.create({baseURL: "https://jsonplaceholder.typicode.com/users"})

async function updateAndRemoveDate(){
  try{
    const putRes = await api.put('/1',{
      name: 'Sam',
      userName : 'falcon',
      email: 'sam@avenger.com'
    });
    console.log('PUT (replace):',putRes.data);

    const PatchRes = await api.patch('/1',{
      email: 'captainsam@avenger.com'
    });
    console.log('Patch (modified)',PatchRes.data);
    const deleteRes = await api.delete('/1');
    console.log('Delete Status:', deleteRes.status);
  }catch(error){
    console.log('Operation failed:',error)
  }
}

updateAndRemoveDate();

