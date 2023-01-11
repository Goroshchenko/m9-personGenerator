
document.querySelector('#buttonGenerate').addEventListener('click', function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = personGenerator.getPatronymic();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('g-r').innerText = 'года рождения';
    document.getElementById('professionOutput').innerText = personGenerator.randomProfession().toString();
});
document.querySelector('#buttonClear').addEventListener('click', function()
{
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthDayOutput').innerText = '';
    document.getElementById('birthMonthOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('g-r').innerText = '';
    document.getElementById('professionOutput').innerText = '';
});
