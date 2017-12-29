import fetch from 'isomorphic-fetch'

// const host = 'localhost'
const host = '192.168.69.110'
const api = {
  getTest: `http://${host}:4000/api/qtest`
}

export const fetchTestService = (id) => {
  return fetch(`${api.getTest}/${id}`, {
    // credentials: 'same-origin'
    credentials: 'include'
  })
    .then(response => response.json())
    .then(json =>
      json.data.questions
    ).catch(err => {
      console.log(err)
    })
}

// export const submitTestService = (test)
