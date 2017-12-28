import fetch from 'isomorphic-fetch'

const api = {
  getTest: 'http://localhost:4000/api/qtest'
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
