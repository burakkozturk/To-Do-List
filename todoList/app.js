let taskDOM = document.querySelector("#task") 
let btnDOM = document.querySelector("#liveToastBtn") 
let listDOM = document.querySelector("#list")


btnDOM.addEventListener('click', elemanEkle)  

function elemanEkle() {
 
    if (taskDOM.value == "")  { 
    $(".error").toast("show");
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement('li') 
    listDOM.appendChild(liDOM); 
    liDOM.innerHTML = task.value; 
    taskDOM.value = "";
  }
}
