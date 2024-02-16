
// DRAG AND DROP

// let img = document.querySelector('img');

// let container = document.querySelector('.container');
//  img.addEventListener('dragstart', function(){
//     this.classList.add('selected');
//  })
//   img.addEventListener('dragend', function(){
//     img.classList.remove('selected');
//   })

//   container.addEventListener('dragover', function(e){
//     e.preventDefault()
//     this.classList.add('over')
//   })
//   container.addEventListener('drop', function(e){
//     e.preventDefault()
//     let selected = document.querySelector('.selected');
//         container.appendChild(selected);
//   })



// PROFIL PHOTO CHANGE

let input = document.querySelector('input');
input.addEventListener('change', (e)=>{
   
    
    let blob = e.target.files[0]
    let fileReader = new FileReader()
    fileReader.readAsDataURL(blob)
    fileReader.addEventListener('load', ()=>{
        document.querySelector('.photo').innerHTML = `<img src="${fileReader.result}">`
    })
    console.log(fileReader.result)
})







// DERSIN IZZAHI

// let input = document.querySelector('input');


// input.addEventListener('change', (e) => {

//     let blob = e.target.files[0];
//     let fileReader = new FileReader()
//     fileReader.readAsDataURL(blob)
//     fileReader.addEventListener('load', ()=>{
//         document.querySelector('.text').innerHTML = `<img src="${fileReader.result}" >`
//     })




//     // let blob = e.target.files[0];
//     // let fileReader = new FileReader();


//     // fileReader.readAsText(blob);

//     // fileReader.addEventListener ('load', ()=>{
//     //     document.querySelector('.text').innerHTML = fileReader.result

// })


// let li = document.querySelectorAll('li');
// let second_ul = document.querySelector('.second')
// for (let item of li) {
//     item.addEventListener('dragstart', function () {
//         this.classList.add('selected');
//         item.addEventListener('dragend', function () {
           
//             this.classList.remove('selected');
//         })
//     })
//     second_ul.addEventListener('dragover', function (e) {
//         e.preventDefault()
//         this.classList.add('over')
//     })
//     second_ul.addEventListener('drop', function (e) {
//         e.preventDefault()
//         let selected = document.querySelector('.selected');
//         second_ul.appendChild(selected)
//     })
// }








