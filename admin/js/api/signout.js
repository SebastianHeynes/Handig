export default data => {
  return new Promise((resolve, reject) => {
    fetch('//albinhandig.se/api/v1/auth/signout', {
      method: 'post',
      body: JSON.stringify({ signout: true })
    })
    .then(response => response.json())
    .then(data => {
      if (data.status) {
        sessionStorage.removeItem('token')
        resolve(data)
      } else {
        reject(data.payload)
      }
    }).catch(error => {
      reject(error)
    })
  })
}
