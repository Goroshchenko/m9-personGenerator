
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = personGenerator.getPatronymic();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthMonth;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = personGenerator.randomProfession().toString();
};

