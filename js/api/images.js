export default () => {
  return new Promise((resolve, reject) => {
    fetch('https://albinhandig.se/api/v1/images/read')
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  })
}
