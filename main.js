let obj={
    name: 'A',
    surmane: 'B',
    patronymic: 'C',
    data: '1',
    year: '2001',
    faculty: 'D'
}

let mas=[];
mas.push(obj);
const btn=document.createElement('button');//создаём кнопку "Начать игру"
document.body.append(btn);
btn.textContent='Добавить студента';
btn.className='add';
let elem;
btn.addEventListener('click', ()=>{
    elem=document.getElementsByClassName('name');
    
    console.log(document.getElementsByClassName('name'));
    console.log(elem.input.name.value);
    let obj={
        name: document.getElementsByClassName('name'),
        // surmane: document.getElementsByClassName('name'),
        // patronymic: document.getElementsByClassName('name'),
        // data: document.getElementsByClassName('name'),
        // year: document.getElementsByClassName('name'),
        // faculty: document.getElementsByClassName('name')
    }

});