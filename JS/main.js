const buttons =document.querySelectorAll('.buttons .btn');
const notifications = document.querySelector(".notifications");
const ToastDetails ={
    timer:6000,
    success:{
        icon: "fa-circle-check",
        data:"Success : This is a Success Toast",

    }
    ,
    warning:{
        icon:"fa-exclamation-circle",
        data:"Warning : This is a warning toast",
    }
    ,
    error:{
        icon:"fa-solid fa-circle-xmark",
        data:"Error : This is an error toast",
    }
    ,
    info:{
        icon:"fa-circle-info",
        data:"INFO : This is an info toast",
    }
}
const removeToast= (toast) =>{
    toast.classList.add('hide');
    setTimeout(()=>toast.remove(),500); // remove toast itself as a node

}
const createToast =(id)=>{
    //get the icon and data based on toast id
    const {icon, data} = ToastDetails[id];
  const toast = document.createElement("li");
   toast.className =` toast ${id}`;
   toast.innerHTML =`<div class="column">
                        <i class="fa-solid ${icon}"></i>
                        <span>${data}</span>
                      </div>
                    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;

  notifications.appendChild(toast);       
  setTimeout(()=>removeToast(toast) , ToastDetails.timer);           

};
buttons.forEach(el=>{
    el.addEventListener('click',() =>createToast(el.id));
});