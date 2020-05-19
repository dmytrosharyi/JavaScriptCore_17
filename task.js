function sendData(){
  promiseServerCall().then(
    function(response){
      alert(response);
    },
    function(error){
      alert(error);
    })
}
function promiseServerCall(){
  return new Promise(function(resolve, reject){
    userData = {
      firstName: document.getElementById('userFirstName').value,
      lastName: document.getElementById('userLastName').value
  }
    var xhr = new XMLHttpRequest();
    xhr.open('POST','/user-data',true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function() {
      if(this.status==200){
        resolve(this.response);
      }else{
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.send(JSON.stringify(userData));
  })
}