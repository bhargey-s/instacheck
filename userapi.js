let symptoms;
let symptom;
let symptomsUrl;
let symId;
let propSymptomUrl;
let propSymptoms;
let gender;
let age;
let diagnosisUrl;
let diagnosis;
let issue = [];
let specializationUrl;

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

// Display asksym on clicking start button
document.getElementById("startbtn").addEventListener("click", function () {
        document.querySelectorAll(".asksym").forEach(function (ele) {
            ele.style.display = "block";
        });
});

// Accessing the value in Symptoms input
document.querySelector("#sympinput").addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        symptom = this.value;
        symptom = symptom.toLowerCase();
        console.log(symptom);

        // Getting the Symptoms Object
        symptomsUrl = "https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImJoYXJnZXlzQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiOTYzNyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMS0wOS0wMSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjMwNjc5OTM2LCJuYmYiOjE2MzA2NzI3MzZ9.CPj3yeonKnN2DvHJN9ikQfLYiWUBbC5e1lwRg5CuHAA&format=json&language=en-gb";
        symptoms = await getJson(symptomsUrl);
        console.log(symptoms);

        // Searching for the symptom in the symptom object
        // More featured algorithm
        // sym1 = sym1.split(" ") ;
        // console.log(sym1) ;
        let flag = 0;
        for (i = 0; i < symptoms.length; i++) {
            if (symptoms[i].Name.toLowerCase().includes(symptom)) {
                symId = symptoms[i].ID;
                console.log("SymId : " + symId + " " + i + " Symptom : " + symptoms[i].Name);
                flag = 1;
                break;
            }
        }
        // Add a function to display this as a bot text
        if (flag == 0) {
            console.log("Please mention the Symptom more clearly");
        }

        // Getting the proposed symptoms in an object
        console.log("age : " + age);
        console.log("gender : " + gender);
        // gender = "male";
        // age = 20;
        propSymptomUrl = `https://sandbox-healthservice.priaid.ch/symptoms/proposed?symptoms=[${symId}]&gender=${gender}&year_of_birth=${age}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImJoYXJnZXlzQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiOTYzNyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMS0wOS0wMSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjMwNjgwMDgzLCJuYmYiOjE2MzA2NzI4ODN9.7hXa4q21O2Ehqe5iBXKuAwL7AwtJiCgRyrhgKFa_wnQ&format=json&language=en-gb`;
        propSymptoms = await getJson(propSymptomUrl);
        console.log(propSymptoms);

        // Asking the user about the proposed systems
        let propsymcount = 0;
        function propsymp() {
            // Creating bot message
            let div1 = document.createElement("div");
            div1.classList.add("bot");
            let text = document.createElement("p");
            text.classList.add("text");
            text.innerText = `Are you feeling like ${propSymptoms[propsymcount].Name} ?`;
            div1.appendChild(text);
            document.querySelector("#chatbot").appendChild(div1);

            // Creating options for Users
            let div2 = document.createElement("div");
            div2.classList.add("user");
            let ybtn = document.createElement("button");
            ybtn.classList.add("btn", "ynbtn");
            ybtn.innerText = "Yes";
            let nbtn = document.createElement("button");
            nbtn.classList.add("btn", "ynbtn");
            nbtn.innerText = "No";
            div2.appendChild(ybtn);
            div2.appendChild(nbtn);
            document.querySelector("#chatbot").appendChild(div2);
            propsymcount++;

            // Adding eventlisteners to the y/n buttons
            document.querySelectorAll(".ynbtn").forEach(elem => elem.addEventListener("click", function () {
                this.style.backgroundColor = "rgba(255,132,75,0.2)";
                this.style.color = "#FF844B";
                if (propsymcount < propSymptoms.length) {
                    propsymp();
                }
                else {
                    diagno();
                }
            }));
        }
        propsymp();
        //  for(i=0;i<propSymptoms.length;i++){
        //      propsymp() ;
        //  }

        async function diagno() {
            // Getting the Diagnosis
            diagnosisUrl = `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${symId}]&gender=${gender}&year_of_birth=${age}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImJoYXJnZXlzQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiOTYzNyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMS0wOS0wMSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjMwNjgwMTM5LCJuYmYiOjE2MzA2NzI5Mzl9.JA8xWHQCCYUjFWIwP4wqz2fjflqEElwKkYfsiQXVekc&format=json&language=en-gb`;
            // console.log(diagnosisUrl) ;
            diagnosis = await getJson(diagnosisUrl);
            // console.log(diagnosis);

            for (i = 0; i < diagnosis.length; i++) {
                issue[i] = diagnosis[i].Issue;
                console.log(issue[i]);
            }
            // Creating bot message
            let div3 = document.createElement("div");
            div3.classList.add("bot");
            let text = document.createElement("p");
            text.classList.add("text");
            text.innerText = `The Diagnosis of the symptoms you are feeling is : `;
            div3.appendChild(text);
            document.querySelector("#chatbot").appendChild(div3);

            let div4 = document.createElement("div");
            div4.classList.add("user");
            for (i = 0; i < issue.length; i++) {
                var sec = document.createElement("section");
                sec.classList.add("diagtext");
                var p1 = document.createElement("p");
                p1.innerText = `Issue : ${issue[i].Name}`;
                var p2 = document.createElement("p");
                p2.innerText = `Possible Reason : ${issue[i].ProfName}`;
                var p3 = document.createElement("p");
                p3.innerText = `Accuracy : ${issue[i].Accuracy}%`;

                sec.appendChild(p1);
                sec.appendChild(p2);
                sec.appendChild(p3);

                div4.appendChild(sec);
            }
            let conbtn = document.createElement("button");
            conbtn.classList.add("btn", "conbtn");
            conbtn.innerText = "Continue further";
            div4.appendChild(conbtn);
            document.querySelector("#chatbot").appendChild(div4);

            document.querySelector(".conbtn").addEventListener("click", function () {
                special();
            });
        } //End of Diagonalization Function

        async function special() {

            // Getting the Specializations
            specializationUrl = `https://sandbox-healthservice.priaid.ch/diagnosis/specialisations?symptoms=[${symId}]&gender=${gender}&year_of_birth=${age}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImJoYXJnZXlzQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiOTYzNyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMS0wOS0wMSIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjMwNjgwMTkyLCJuYmYiOjE2MzA2NzI5OTJ9.q6YvkBSUUx1zC2Yt27OChUZ_wHoLDNXETj7o7e69PMw&format=json&language=en-gb`;
            specialization = await getJson(specializationUrl);
            console.log(specialization);

            // Creating bot message
            let div5 = document.createElement("div");
            div5.classList.add("bot");
            let text = document.createElement("p");
            text.classList.add("text");
            text.innerText = `We suggest you to consult a : `;
            div5.appendChild(text);
            document.querySelector("#chatbot").appendChild(div5);

            let div6 = document.createElement("div");
            div6.classList.add("user");
            for (i = 0; i < specialization.length; i++) {
                var sec = document.createElement("section");
                sec.classList.add("diagtext");
                var p1 = document.createElement("p");
                p1.innerText = `${specialization[i].Name}`;
                var p2 = document.createElement("p");
                p2.innerText = `Accuracy : ${specialization[i].Accuracy}%`;

                sec.appendChild(p1);
                sec.appendChild(p2);
                div6.appendChild(sec);
            }
            let relbtn = document.createElement("button");
            relbtn.classList.add("btn", "relbtn");

            relbtn.innerText = "Assess again";
            div6.appendChild(relbtn);
            document.querySelector("#chatbot").appendChild(div6);

            document.querySelector(".relbtn").addEventListener("click",function(){
                window.location.href = "guest.html";
            })
        }  //End of Specialization function

    }
});
            // }
            // main();



