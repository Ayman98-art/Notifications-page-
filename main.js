const unReadedMassage = document.querySelectorAll('.unreaded');
const numMassage = document.getElementById('numMassage');
const allRead = document.getElementById('allRead');

numMassage.innerText = unReadedMassage.length;

unReadedMassage.forEach((element)=>{
    element.addEventListener('click',()=>{
        element.classList.remove('unreaded')
        const reNnReadedMassage = document.querySelectorAll('.unreaded');
        numMassage.innerText = reNnReadedMassage.length;
    })
})

allRead.addEventListener('click', ()=>{
    unReadedMassage.forEach((massage)=>{
        massage.classList.remove('unreaded');
    })
    const reNnReadedMassage = document.querySelectorAll('.unreaded');
    numMassage.innerText = reNnReadedMassage.length;
})