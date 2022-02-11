let compliment =   document.getElementById("complimentButton").onclick = function () {
        axios.get("http://localhost:4000/api/compliment/")
            .then(function (response) {
              const data = response.data;
              alert(data);
            });
      };

let fortune =   document.getElementById("fortuneButton").onclick = function () {
        axios.get("http://localhost:4000/api/fortune/")
            .then(function (response) {
              const data = response.data;
              alert(data);
            });
      };


const taskContainer = document.querySelector('#task-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/todo`

const taskCallback = ({ data: todoList }) => displayTasks(todoList)
const errCallback = err => console.log(err.response.data)

const getAllTasks = () => axios.get(baseURL).then(taskCallback).catch(errCallback)
const createtask = body => axios.post(baseURL, body).then(taskCallback).catch(errCallback)
const deleteMovie = id => axios.delete(`${baseURL}/${id}`).then(taskCallback).catch(errCallback)


      

     