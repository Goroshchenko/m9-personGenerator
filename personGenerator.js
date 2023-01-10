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

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 2023, min = 1900) => Math.floor(Math.random() * (max - min + 1) + min),

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

    randomGender: function() {
       const numberOfGender = Math.round( Math.random());
       return (numberOfGender) ? this.GENDER_MALE : this.GENDER_FEMALE
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.birthYear = this.randomIntNumber();
        return this.person;
    }
};
