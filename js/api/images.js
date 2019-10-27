export default () => {
  return new Promise((resolve, reject) => {
    fetch('https://albinhandig.se/api/images.php')
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  })
}
