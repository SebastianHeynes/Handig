import Http from './../assets/http.js'

export default data => {
  return new Promise((resolve, reject) => {
    new Http({
      method: 'POST',
      url: 'https://albinhandig.se/admin/api/signin.php',
      data: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(data => {
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
