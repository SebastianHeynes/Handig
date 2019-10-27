export default data => {
  return new Promise((resolve, reject) => {
    fetch('//albinhandig.se/api/v1/auth/signin', {
      method: 'post',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.status) {
        sessionStorage.setItem('token', data.payload)
        resolve(data)
      } else {
        reject(data.payload)
      }
    }).catch(error => {
      reject(error)
    })
  })
}
