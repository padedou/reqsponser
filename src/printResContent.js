export default function (response, div) {
  const contentType = response.headers.get('Content-Type')

  if (contentType.includes('application/json')) {
    response.json().then((data) => {
      const strData = JSON.stringify(data, null, 4)
      const elemPre = document.createElement('pre')

      elemPre.innerHTML = syntaxHighlight(strData)
      div.innerHTML = ''
      div.appendChild(elemPre)
    })
  }
}

// https://stackoverflow.com/a/7220510/3721535
function syntaxHighlight (json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number'
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key'
      } else {
        cls = 'string'
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean'
    } else if (/null/.test(match)) {
      cls = 'null'
    }
    return '<span class="' + cls + '">' + match + '</span>'
  })
}
