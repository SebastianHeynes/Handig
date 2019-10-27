export default () => {
  return new Promise((resolve, reject) => {
    let payload = new FormData()
    data['token'] = window.sessionStorage.getItem('token')
    payload.append('data', JSON.stringify({ signout: true }))

    fetch('//albinhandig.se/api/v1/auth/signout', {
      method: 'post',
      body: payload
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
