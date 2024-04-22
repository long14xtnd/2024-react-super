// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        // Typical action to be performed when the document is ready:
//        let html=""
//        let res=JSON.parse(this.responseText)
//        res.data.forEach((item) => {
//         html+=`<div>${item.first_name} ${item.last_name}</div>`
//        });
//        document.getElementById("demo").innerHTML = html;
//     }
// };
// xhttp.open("GET", "https://reqres.in/api/users", true);
// xhttp.send();

// fetch('https://reqres.in/api/users?page=2333').then(function(response) {
//     console.log(response);
//     if(response.ok === true) {
//     return response.json();
// }
//     else {
//         throw new Error('Loi cmnr')
//     }
// }).then(function(response) {
//     console.log('data chinh thuc',response);
// }).catch(function(err) {
//     console.log(err);
// });

// axios.get('https://reqres.in/api/users/23')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.warn(error.response.status);
//   })
//   .finally(function () {
//     // always executed
//   });


const http=axios.create({
    baseURL:"https://reqres.in/api/"
})

http.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('config',config);
    config.headers.Timeout = 300;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

      
http.get('https://reqres.in/api/users/6')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
      // handle error
      console.warn(error.response.status);
    })