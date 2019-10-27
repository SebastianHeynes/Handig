export default () => {
  return new Promise((resolve, reject) => {
    fetch('//albinhandig.se/api/v1/images/read')
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          resolve(data.payload.data)
        } else {
          reject(data.payload)
        }
      }).catch(error => {
        reject(error)
      })
  })
}
