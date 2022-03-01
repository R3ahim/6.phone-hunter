

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
    const searchresult = document.getElementById('search-result');
    searchresult.textContent = '';
    // console.log(collector);
   collector.data.forEach(info =>{
    //    console.log(info);
      const n =JSON.stringify(info.slug);
    //   const b = JSON.parse(n)
    //   console.log(n)
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

// btn to search

const loadPhoneDeatails = phoneId =>{
    // console.log(phoneId)

    const url =`https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>loadDisplayDetails(data.data))
     
   
   }


   const loadDisplayDetails =(detals) =>{
    //    console.log(detals.image,detals.phone_name,detals.brand);
    console.log(detals);
    const searchDetails = document.getElementById('search-details');
    searchDetails.textContent =''
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =  `
    <img class="w-100" src="${detals.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h3 class="card-title">${detals.name}</h3>
      <p class="card-text">${detals.releaseDate}</p>
    </div>
    ` ;
    searchDetails.appendChild(div)

   }