export default data => {
  return new Promise((resolve, reject) => {
    let payload = new FormData()
    payload.append('data', JSON.stringify(data))

    fetch('//albinhandig.se/api/v1/auth/signin', {
      method: 'post',
      body: payload
    })
    .then(response => response.json())
    .then(data => {
      if (data.status) {
        sessionStorage.setItem('token', data.payload.token)
        resolve(data)
      } else {
        reject(data.payload)
      }
    }).catch(error => {
      reject(error)
    })
  })
}
