let htmlString = ""

customers.results.forEach(function(customer){
  htmlString += `
<div id = "employee">
  <img src="${customer.picture.large}"/>
  <h2>${customer.name.first} ${customer.name.last}
  <hr>
  <h3>${customer.email}
  <p>${customer.location.street}
  <p>${customer.location.city}, ${customer.location.state}  ${customer.location.postcode}
  <p>${customer.phone}
  <div>${customer.id.value}</div>
</div>
`
})
document.querySelector('#container').innerHTML = htmlString
