export default function (headers, div) {
  let str = ''
  for (let value of headers.entries()) {
    str += '<span class="header_key">' + value[0] + ':</span> ' + value[1] + '<br>'
  }
  div.innerHTML = str
}
