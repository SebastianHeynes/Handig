import Http from './../assets/http.js'

export default data => {
  return new Promise((resolve, reject) => {
    new Http({
      method: 'POST',
      url: 'https://albinhandig.se/admin/api/signout.php',
      data: {
        signout: true
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(data => {
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
