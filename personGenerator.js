const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Евгения",
            "id_3": "Екатерина",
            "id_4": "Антонина",
            "id_5": "Ольга",
            "id_6": "Прасковья",
            "id_7": "Валентина",
            "id_8": "Дарья",
            "id_9": "Мария",
            "id_10": "Ирина"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитриев",
            "id_6": "Абдуразаков",
            "id_7": "Михайлов",
            "id_8": "Леонидов",
            "id_9": "Егоров",
            "id_10": "Андреев"
        }
    }`,
    professionJson: `{
        "count": 10,
        "list": {     
            "id_1": "слесарь",
            "id_2": "военный",
            "id_3": "шахтер",
            "id_4": "охранник",
            "id_5": "лесник",
            "id_6": "учительница",
            "id_7": "стилистка",
            "id_8": "журналистка",
            "id_9": "домохозяйка",
            "id_10": "медсестра"        
        }
    }`,

    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"        
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 2005, min = 1960) => Math.floor(Math.random() * (max - min + 1) + min),

    randomBirthDay: function () {
        let maxDay, minDay = 1;
        switch (this.randomBirthMonth()) {
            case "февраля":
                maxDay = 28;
                break;
            case "апреля":
                maxDay = 30;
                break;
            case "июня":
                maxDay = 30;
                break;
            case "сентября":
                maxDay = 30;
                break;
            case "ноября":
                maxDay = 30;
                break;
            default:
                maxDay = 31;
        }
        return Math.floor(Math.random() * (maxDay - minDay + 1) + minDay)
    },


    randomBirthMonth: function() {
            return this.randomValue(this.monthJson);
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender === 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        }
            return this.randomValue(this.firstNameFemaleJson);

    },

     randomSurname: function() {
         if (this.person.gender === 'Мужчина') {
             return this.randomValue(this.surnameJson);
         }
            return (this.randomValue(this.surnameJson) + JSON.parse(JSON.stringify('a')));
    },

    randomPatronymic: function() {
        if (this.person.gender === 'Мужчина') {
            return (this.randomValue(this.patronymicJson) + JSON.parse(JSON.stringify('ич')));
        }
            return (this.randomValue(this.patronymicJson) + JSON.parse(JSON.stringify('нa')));
    },

    randomGender: function() {
       const numberOfGender = Math.round( Math.random());
       return (numberOfGender) ? this.GENDER_MALE : this.GENDER_FEMALE
    },

    randomProfession: function () {
        const profList = JSON.parse(this.professionJson);
        if (this.person.gender === 'Мужчина') {
                const prop = `id_${Math.floor(Math.random()*profList.count/2 + 1)}`;
                return profList.list[prop];
        }
            const prop = `id_${Math.floor(Math.random()*(profList.count-profList.count/2)+profList.count/2+1)}`;
            return profList.list[prop];
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.birthDay = this.randomBirthDay();
        this.person.birthMonth = this.randomBirthMonth();
        this.person.birthYear = this.randomIntNumber();
        return this.person;
    },

    getPatronymic: function () {
        this.patronymic = {};
        this.patronymic.definition = this.randomPatronymic();
        return this.patronymic.definition;
    }
};
