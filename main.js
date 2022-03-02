

// start with input and search btn 

const searchPhone = ()=>{
    const searchField = document.getElementById("search-field");
   const searchText = searchField.value ;
//    console.log(searchText);
//    clear field 
searchField.value= '';


const url= `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
fetch(url)
.then(res => res.json())
.then(data => displaySearchResult(data))


}

// searchPhone()

const displaySearchResult = collector =>{
  // console.log(collector.data.length);
  
  
   
  console.log(collector.data)
  
    const searchresult = document.getElementById('search-result');
    const divRelease = document.getElementById('diver')
    divRelease.textContent = ''
    searchresult.textContent = '';
    const {status} = collector;
  
   
    if(status == false ){
    const diver = document.createElement('div');
   
 
  
    diver.innerHTML = `<h3 class="text-center text-danger mt-5"> there was something going to wrong</h3>`
    divRelease.appendChild(diver)
    }

    else if(status==true){
    
 
  
   collector.data.forEach(info =>{  
  console.log(info)
  // for(const or in info){
  //   // console.log(or)
  // }
      const idConverter =JSON.stringify(info.slug);
    
       const div = document.createElement('div');
       div.classList.add('col');
    
       div.innerHTML=`
       
          <div class="card w-75 h-100 mx-auto">
            <img src="${info.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">${info.phone_name}</h3>
              <h4 class= "card-title"> ${info.brand}</h4>
              <button onclick='loadPhoneDeatails(${idConverter})' type="button" class="btn btn-secondary">Buy Now</button>

            </div>
          </div>
     
       `
       searchresult.appendChild(div)
     
   })
 
}
}

// btn to search

const loadPhoneDeatails = phoneId =>{
    // console.log(phoneId)

    const url =`https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>loadDisplayDetails(data.data))
     
   
   }

  
  //  display deats part 
   const loadDisplayDetails =(detals) =>{
     
    
    // console.log(detals);
    const {chipSet,displaySize,memory,storage} = detals.mainFeatures;
    const{sensors} = detals.mainFeatures;
    const {Bluetooth,GPS,NFC,Radio,USB,WLAN} = detals.others;
    // console.log(Bluetooth)
    const relase = detals.releaseDate;
    // console.log(relase)
  

  
    const searchDetails = document.getElementById('search-details');
    searchDetails.textContent =''
    const div = document.createElement('div');
    div.classList.add('card');
    

div.innerHTML =  `
<div class="d-flex main-contianer justify-content-center align-items-center mb-5 w-75 mx-auto">
<div class = w-100>
<img class="w-75 h-75" src="${detals.image}" class="card-img-top" style="width: 400px">
</div>
<div class="card-body w-100 mx-auto">
<h2 class="card-title">${detals.name}</h2>
<p class="bold"> it's is the increadable price to by this devise. it's mostly value able futures is it have an ${sensors[0]},or ${sensors[1]}. it is the powerfull battery beside it's have ${sensors[3]}. Most value able is ${sensors[4]} or ${sensors[5]} so you need by this devise</p>

 <div class = "d-flex table-flex w-100">
 <h1 class ="text-center ">information and feuturs</h1>
 <div>
  <table class="table w-50  ">
  <thead>
    <tr>
      <th class="bg-primary text-white rounded" scope="row">display</th>
      <th class="bg-secondary text-white rounded" scope="col">${displaySize} </th>
     
    </tr>
</thead>
  <tbody>
    <tr>
      <th class="bg-primary text-white rounded" scope="row">Capacity</th>
      <td class="bg-secondary text-white rounded">${memory}</td>
     
    </tr>
    <tr>
      <th class="bg-primary text-white rounded" scope="row">Storage</th>
      <td class="bg-secondary text-white rounded">${storage}</td>
    
    </tr>
    <tr>
      <th class="bg-primary text-white rounded" scope="row">processor</th>
      <td class="bg-secondary text-white rounded">${chipSet}</td>
     
    </tr>
    <tr>
      <th class="bg-primary text-white rounded" scope="row">WLAN</th>
      <td class="bg-secondary text-white rounded">${WLAN}</td>
     
    </tr>
    <tr>
      <th class="bg-primary text-white rounded" scope="row">Bluetooth</th>
      <td class="bg-secondary text-white rounded">${Bluetooth}</td>
     
    </tr>
    <tr>
      <th class="bg-primary text-white rounded" scope="row">GPS</th>
      <td class="bg-secondary text-white rounded">${GPS}</td>
     
    </tr>
  </thead>
</table>
</div>
<div>
<h3 class="text-center">about more</h3>
<table class="table w-50 b ">
  <thead>
    <tr>
      <th class="bg-primary text-white rounded" scope="row">USB</th>
      <th class="bg-secondary text-white rounded relese-with " scope="col">${USB} </th>
     
    </tr>
</thead>
  <tbody id = "relese-added">
    <tr>
      <th class="bg-primary text-white rounded " scope="row">NFC</th>
      <td class="bg-secondary text-white rounded relese-with ">${NFC}</td>
     
    </tr>
    <tr>
      <th class="bg-primary text-white rounded" scope="row">Radio</th>
        <td class="bg-secondary text-white rounded">${Radio}</td>
    
    </tr>
   
    

  </thead>
</table>

</div>
</div>

` 
searchDetails.appendChild(div);
const relseer = document.getElementById('relese-added')
if(relase==''){
  const div = document.createElement('div')
  div.classList.add('released-date')
  div.innerHTML = `  
  <h5 class="text-white bg-primary w-50" >Relese date</h5>
  <h5 class="bg-danger  text-white rounded w-100">no relese date found</h5>

`
relseer.appendChild(div)

}
else{
  const div = document.createElement('div')
  div.classList.add('released-date')
  
  div.innerHTML = ` 
  <h5 class="text-white bg-primary w-50" >Relese date</h5>
    <h5 class="bg-secondary  text-white rounded w-100">${detals.releaseDate}</h5>

`
relseer.appendChild(div)
}




   }
   