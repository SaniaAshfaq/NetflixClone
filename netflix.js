// 

let ques = document.querySelectorAll('.ques');
let ans = document.querySelectorAll('.ansdiv'); 
let plus = document.querySelectorAll('.plus')

ques.forEach((element, index) => {
   
    element.addEventListener('click', function() {
        // console.log(element);
        // console.log(index);
        if (ans[index].style.display === 'none') {
            ans[index].style.display = 'block';
            plus[index].innerHTML = 'X'
        } else {
            ans[index].style.display = 'none';
            plus[index].innerHTML = '+';
        }
    });
});
 let option;
let mybtn = document.querySelector('.mybtn');
let btnicon = document.querySelector('.btn-icon');
let click = true;
btnicon.addEventListener('click', function(){
   if(click === true){
     option = document.createElement('option');
    option.innerHTML = 'English';
    mybtn.appendChild(option);
    option.classList.add('select')

    click = false;
   }
   else{
   mybtn.removeChild(option);
   click = true;
   }
})