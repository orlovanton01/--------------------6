let mas=[];
const btn=document.createElement('button');
document.body.append(btn);
btn.textContent='Добавить студента';
btn.className='add';
btn.addEventListener('click', ()=>{
    let elem1=document.getElementsByClassName('name')[0];
    let elem2=document.getElementsByClassName('surname')[0];
    let elem3=document.getElementsByClassName('patronymic')[0];
    let elem4=document.getElementsByClassName('date')[0];
    let elem5=document.getElementsByClassName('year')[0];
    let elem6=document.getElementsByClassName('faculty')[0];
    let obj={
        name: elem1.value,
        surname: elem2.value,
        patronymic: elem3.value,
        date: elem4.value,
        year: elem5.value,
        faculty: elem6.value
    }
    mas.push(obj);
    let student=document.createElement('div');
    let p=document.createElement('p');
    document.body.append(p);
    document.body.append(student);
    student.textContent=obj.name+' '+obj.surname+' '+obj.patronymic+' '+obj.date+' '+obj.year+' '+obj.faculty;
    localStorage.setItem('students', JSON.stringify(mas));
});   
let mas1 = JSON.parse(localStorage.getItem('students'));
for (const item of mas1) {
    let student=document.createElement('div');
    let p=document.createElement('p');
    document.body.append(p);
    document.body.append(student);
    mas.push(item);
    student.textContent=item.name+' '+item.surname+' '+item.patronymic+' '+item.date+' '+item.year+' '+item.faculty;
}