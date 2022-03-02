

// start with search btn 

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

const displaySearchResult = collector =>{
  console.log(collector.length)
    const searchresult = document.getElementById('search-result');
    const dii = document.getElementById('diver')
    dii.textContent = ''
    searchresult.textContent = '';
    const {status} = collector;
   
    if(status == false ){
    const diver = document.createElement('div');
    diver.innerHTML = `<h3 class="text-center text-danger mt-5"> there was something going to wrong</h3>`
    dii.appendChild(diver)
    }

    else{
   collector.data.forEach(info =>{  
   
      const n =JSON.stringify(info.slug);
    
       const div = document.createElement('div');
       div.classList.add('col');
     
       div.innerHTML=`
       
          <div class="card w-75 h-100 mx-auto">
            <img src="${info.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">${info.phone_name}</h3>
              <h4 class= "card-title"> ${info.brand}</h4>
              <button onclick='loadPhoneDeatails(${n})' type="button" class="btn btn-secondary">click me</button>

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


   const loadDisplayDetails =(detals) =>{
    
    // console.log(detals);
    const {chipSet,displaySize,memory,storage} = detals.mainFeatures;
    const{sensors} = detals.mainFeatures;
    const {Bluetooth,GPS,NFC,Radio,USB,WLAN} = detals.others;
    // console.log(Bluetooth)
  
  
    const searchDetails = document.getElementById('search-details');
    searchDetails.textContent =''
    const div = document.createElement('div');
    div.classList.add('card');
/* With the Lenovo Phab 2, every commute is like a trip to the cinema. Experience true immersive multimedia with the stunning 6.4" HD screen and incredible Dolby Atmos® audio. Record amazing 360-degree multichannel sound with Dolby 5.1 Audio™ Capture. Or simply enhance any video or photo with the 13 MP fast-focus camera and augmented reality effects. */

div.innerHTML =  `
<div class="d-flex hell justify-content-center align-items-center mb-5">
<div class = w-100>
<img class="w-100 h-75" src="${detals.image}" class="card-img-top" style="width: 400px">
</div>
<div class="card-body">
<h2 class="card-title">${detals.name}</h2>
<p class="bold"> With the ${detals.name}.every commute is like a trip to the cinema. Experieance true immersive multimedia with stunning <b>${displaySize} </b> and  faster working for <b>${memory} </b>or we bring most value able thing that <b> ${chipSet}</b> chpip   </p>
  <p class="card-text">${detals.releaseDate}</p>

 <div class = "d-flex table-flex">
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
<table class="table w-50 b ">
  <thead>
    <tr>
      <th class="bg-primary text-white rounded" scope="row">USB</th>
      <th class="bg-secondary text-white rounded" scope="col">${USB} </th>
     
    </tr>
</thead>
  <tbody>
    <tr>
      <th class="bg-primary text-white rounded" scope="row">NFC</th>
      <td class="bg-secondary text-white rounded">${NFC}</td>
     
    </tr>
    <tr>
      <th class="bg-primary text-white rounded" scope="row">Radio</th>
        <td class="bg-secondary text-white rounded">${Radio}</td>
    
    </tr>
    <tr>
      <th class="bg-primary text-white rounded" scope="row">Sensors</th>
      <td class="bg-secondary text-white rounded">${sensors[0]} ${sensors[1]} ${sensors[2]} ${sensors[3]},${sensors[4]},${sensors[5]}</td>
     
    </tr>
    

  </thead>
</table>

</div>
</div>

` 
      searchDetails.appendChild(div);
   

   }
   