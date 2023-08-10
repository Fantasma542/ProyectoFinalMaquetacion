class Professional {
    constructor(name, age, genre, photo) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.photo = photo;
    }
    ////metodods////
     printProfessional(){
        return `NAME: ${this.name}<br>
        AGE: ${this.age}<br>
        GENRE: ${this.genre}<br>
        <img src="${this.photo}" alt="Professional Photo" width="200" height="160"><br>`
    }
}
const professionalData = new Professional(
    "BRAD PITT",
    59,
    "MALE",
    "data:image/jpeg;base64,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"
);
const professionalData2 = new Professional(
    "SCARLETT JOHANSSON",
    33,
    "FEMALE",
    "https://imagenes.elpais.com/resizer/yy8JsixPx0WLS1a_jB5-dG4wY9Q=/1960x1470/filters:focal(1078x573:1088x583)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/YPTIH45VOVAKZLZZW67TWFSBC4.jpg"
);
const professionalData3 = new Professional(
    "ROBERT DE NIRO",
    79,
    "MALE",
    "data:image/jpeg;base64,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"
);
const professionalData4 = new Professional(
    "PENÉLOPE CRUZ",
    49,
    "FEMALE",
    "https://images.ecestaticos.com/8L0avQ3SmuOiSRklQIKLsXV3dkE=/197x1:1397x901/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fb5e%2Fe44%2F20d%2Fb5ee4420deefb413d6083d4624b6de1e.jpg"
);
const professionalData5 = new Professional(
    "LEONARDO DICAPRIO",
    48,
    "MALE",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIho496-k6EF603SwsU-frFaa5_Hoc0vtQEJ5zXMqeVT3dvERjUpn3fg7onKhrk21nnY&usqp=CAU"
);
const professionalData6 = new Professional(
    "MARGOT ROBBIE",
    48,
    "FEMALE",
    "https://s1.eestatic.com/2023/07/14/actualidad/778932329_234702560_1706x960.jpg"
);


const professionalInfoDiv = document.getElementById("professional-info");
const professionalInfo = document.createElement("p");
professionalInfo.innerHTML = professionalData.printProfessional();
professionalInfoDiv.appendChild(professionalInfo);


const professionalInfoDiv2 = document.getElementById("professional-info2");
const professionalInfo2 = document.createElement("p");
professionalInfo2.innerHTML = professionalData2.printProfessional();
professionalInfoDiv2.appendChild(professionalInfo2);


const professionalInfoDiv3 = document.getElementById("professional-info3");
const professionalInfo3 = document.createElement("p");
professionalInfo3.innerHTML = professionalData3.printProfessional();
professionalInfoDiv3.appendChild(professionalInfo3);


const professionalInfoDiv4 = document.getElementById("professional-info4");
const professionalInfo4 = document.createElement("p");
professionalInfo4.innerHTML = professionalData4.printProfessional();
professionalInfoDiv4.appendChild(professionalInfo4);


const professionalInfoDiv5 = document.getElementById("professional-info5");
const professionalInfo5 = document.createElement("p");
professionalInfo5.innerHTML = professionalData5.printProfessional();
professionalInfoDiv5.appendChild(professionalInfo5);

const professionalInfoDiv6 = document.getElementById("professional-info6");
const professionalInfo6 = document.createElement("p");
professionalInfo6.innerHTML = professionalData6.printProfessional();
professionalInfoDiv6.appendChild(professionalInfo6);