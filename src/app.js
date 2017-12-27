import makeRequest from './makeRequest'
import printResHeaders from './printResHeaders'

const txtfURL = document.getElementById('input_url')
const selMethod = document.getElementById('select_method')
const txtareaBody = document.getElementById('textarea_request_body')
const divResHeaders = document.getElementById('response_headers')

document.getElementById('btn_send').addEventListener('click', () => {
  makeRequest(txtfURL.value, selMethod.value, txtareaBody.value)
  .then((response) => {
    // return response.json()
    // console.log(response.headers.entries())
    /*
    for(let value of response.headers.entries()){
      console.log(JSON.stringify(value))
    }
    */
    printResHeaders(response.headers, divResHeaders)
  })
  /*
  .then((obj) => {
    //console.log(JSON.stringify(obj))
  })
  */
})
