const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  //what's listening (document.body)
  let Input = document.body
  
  Input.addEventListener('keydown', function(e)) {
  
    let index = 0
  
    const key = parseInt(e.detail || e.which)
  
    if (key === code[index]) {
    index++
    
      if (index === code.length) {
      aler("Hurray!")
      index = 0
      }
    } else {
      index = 0
    }  
  }