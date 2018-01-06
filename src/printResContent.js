export default function (response, div) {
  const contentType = response.headers.get('Content-Type')

  if (contentType.includes('application/json')) {
    response.json().then((data) => {
      div.innerHTML = JSON.stringify(data)
    })
  }
}
