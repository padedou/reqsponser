export default function (response, div) {
  switch (response.headers.get('Content-Type')) {
    case 'application/json':
      response.json().then((data) => {
        div.innerHTML = JSON.stringify(data)
      })
      break
    default:
      console.log('Could not read the "Content-Type" header')
  }
}
