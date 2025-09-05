// https://openapi.programming-hero.com/api/levels/all
const loaddata =()=>{

    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res=> res.json())
    .then(json => displaydata(json))

}
const loadlevelword = (id) =>
{
const url = `https://openapi.programming-hero.com/api/level/${id}`
fetch(url)
.then(res =>res.json())
.then(data =>(displayLevelword(data.data)))
}


// {
//     "id": 5,
//     "level": 1,
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার"
// }
const displayLevelword =(words)=>
{
const wordlevelcontainer = document.getElementById('word-container')
wordlevelcontainer.innerHTML ="";
words.forEach(word => {
    console.log(word)
    const card= document.createElement('div')
   card.innerHTML = `
   
   
    <div class=" bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">

       <h2 class="font-bold text-2xl">${word.word}</h2>
        <p class="font-semibold ">${word.meaning}</p>
        <div class="font-bangla text-medium ">${word.pronunciation}</div>
       <div class="flex justify-between items-center">
            <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn"><i class=" bg-[#1A91FF10] hover:bg-[#1A91FF80] fa-solid fa-volume-low "></i></button>
       </div>
  </div>

     
    
    `;
    wordlevelcontainer.appendChild(card)
})


};
const displaydata = lesson =>{
   
    
    const container = document.getElementById("container")
    container.innerHTML = "";

for (const lessons of lesson.data) {
  const divContainer = document.createElement('div')
  divContainer.innerHTML = `
    <button onclick="loadlevelword(${lessons.level_no})" class="btn btn-outline btn-primary m-2">
      <i class="fa-solid fa-book-open"></i> Lessons- ${lessons.level_no}
    </button>
  `
  container.appendChild(divContainer)
}


    
//   const div = document.createElement('div')
//   div.innerHTML = 

}

loaddata();