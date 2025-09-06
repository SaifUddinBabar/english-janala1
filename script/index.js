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


if(words.length == 0)
{
  wordlevelcontainer.innerHTML =

  `
  <div class=" font-bangla text-center col-span-full py-10 rounded-xl space-y-6">
  <img class= "mx-auto" src = "./assets/alert-error.png"/>
    
    <P class=" text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</P>
    <h1 class=" font-bold text-4xl">নেক্সট Lesson এ যান।</h1>
  </div>
  
  
  `
  
 
}
words.forEach(word => {
    console.log(word)
    const card= document.createElement('div')
   card.innerHTML = `
   
   
   <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">

  <h2 class="font-bold text-2xl">
    ${word.word ? word.word : "কোনো word পাওয়া যায়নি"}
  </h2>

  <p class="font-semibold">
    ${word.meaning ? word.meaning : "কোনো meaning পাওয়া যায়নি"}
  </p>

  <div class="font-bangla text-medium">
    ${word.pronunciation ? word.pronunciation : "পাওয়া যায়নি"}
  </div>

  <div class="flex justify-between items-center">
    <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]">
      <i class="fa-solid fa-circle-info"></i>
    </button>
    <button class="btn">
      <i class="fa-solid fa-volume-low bg-[#1A91FF10] hover:bg-[#1A91FF80]"></i>
    </button>
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
    <button id= "lesson-btn-${lessons.level_no} " onclick="loadlevelword(${lessons.level_no})" class="btn btn-outline btn-primary m-2">
      <i class="fa-solid fa-book-open"></i> Lessons- ${lessons.level_no}
    </button>
  `
  container.appendChild(divContainer)
}


    
//   const div = document.createElement('div')
//   div.innerHTML = 

}

loaddata();