export default data => {
  return new Promise((resolve, reject) => {
    let payload = new FormData()
    data['token'] = window.sessionStorage.getItem('token')
    payload.append('data', JSON.stringify(data))

    fetch('//albinhandig.se/api/v1/images/create', {
      method: 'post',
      body: payload
    })
    .then(response => response.json())
    .then(data => {
      if (data.status) {
        resolve(data)
      } else {
        reject(data.payload)
      }
    }).catch(error => {
      reject(error)
    })
  })
}
