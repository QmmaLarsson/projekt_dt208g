# Projekt i kursen DT208G, Programmering i TypeScript
**Namn:** Emma Larsson\
**Student-ID:** emla2309

### Beskrivning av webbplats
Detta är en webbplats för ett fiktivt universitet. På webbplatsen finns en tabell som visar kurser som finns tilgängliga på universitetet. Det går att filtrera kurserna genom att skriva in en sökfras i input-fältet alternativt genom att välja ett ämne i den utfällbara menyn. Det går även att sortera kurserna i bokstavsordning genom att klicka på rubrikerna i tabellen. Det finns möjlighet att skapa ett eget ramschema genom att lägga till kurser från de kurser som finns tillgängliga i tabellen. Dessa hamnar då på en separat sida där man kan se hur många kurser man har valt samt hur många högskolepoäng kurserna har sammanlagt. Det går även att ta bort kurser som man har lagt till i sitt ramschema.

Projektet skapades med hjälp av Angular CLI (https://github.com/angular/angular-cli) version 17.3.5.

### Beskrivning av lösning
**Skapa interface**\
Ett interface skapas med kommandot "ng generate interface model/course". Det fungerar som en mall för hur kurs-objektet ska se ut och vilka egenskaper det bör ha.

**Hämta data**\
För att kunna göra AJAX anrop till en server måste HttpClient-modulen installeras. Detta görs i app.module.ts. Därefter skapas en service skapas med kommandot "ng generate service service/course". HttpClient för att göra ett GET-anrop till URL:en https://matdah.github.io/DT208G---Programmering-i-TypeScript/Moment%205%20-%20Projekt/miun_courses.json. Svaret returneras som en array.

**Skapa tabell för tillgängliga kurser**\
En komponent skapas med kommandot "ng generate component courses". I denna skapas i sin tur en tabell. En *ng-loop används för att skriva ut alla kurser i tabellen. Kursena hämtas från det externa APIet. Interpolation används för att binda datan från komponentklassen till HTML-koden. Detta görs med hjälp av dubbla måsvingar. För varje kurs finns en knapp för att spara kursen till localStorage, detta görs med hjälp av eventbinding. Vid klick på knappen så körs metoden addCourse().

**Filtrera data**\
Two-way binding(ngModel) används för att binda värdet på det användaren skriver in i input-fältet till variabeln filterValue som finns i komponentklassen. Detta innebär att ändringar i inputfältet uppdaterar värdet på variabeln. Även eventbinding används, när en användare skriver i input-fältet så körs metoden applyFilter(). Metoden jämför filterValue med de kurser som finns i listan. Innan jämförelsen utförs användes också .toLowerCase() för att konvertera filtervärdet och kurskoderna/kursnamnen till små bokstäver.

Något liknande händer när man använder sig av select-menyn. Two-way binding(ngModel) används för att binda värdet på det användaren väljer i select-menyn till variabeln selectedSubject som finns i komponentklassen. Detta innebär att ändringar i select-menyn uppdaterar värdet på variabeln. Även eventbinding används, när en användare väljer ett alternativ i select-manyn så körs metoden filterBySubject(). Metoden använder sig av metoden applyFilter() för att filtrera kurserna utifrån det ämne som har valts.

**Sortera data**\
Eventbinding används för att binda klickhändelserna på rubrikerna i tabellen till funktionen sortCourse() som finns i komponentklassen. Vid klick på en rubrik så körs en metod som sorterar kurserna i bokstavsorning, vid dubbla klick så vänds ordningen i listan.

**Spara till localStorage**\
För att kunna spara kurser till localStorage skapas en till service. Denna service hanterar att spara data till localStorage samt att hämta data från localStorage.

**Skapa tabell för ramschema**\
En komponent skapas med kommandot "ng generate component mycourses". I denna skapas i sin tur en tabell. En *ng-loop används för att skriva ut alla kurser i tabellen. Kursena hämtas från localStorage. Interpolation används för att binda datan från komponentklassen till HTML-koden. Detta görs med hjälp av dubbla måsvingar. För varje kurs finns en knapp för att ta bort kursen från localStorage, detta görs med hjälp av eventbinding. Vid klick på knappen så körs metoden deleteCourse().

### Installera projekt

För att installera och börja använda projektet, följ nedanstående steg:
* Klona projektet från Github. För att göra detta, nagivera till den mapp där du vill spara projektet, skriv in "git clone" följt av Github-repots URL.
* Installera beroenden. För att göra detta använd kommandot "npm install".
* Kör projektet. För att göra detta använd kommandot "ng serve".
* Kommandot för att bygga projektet är "ng build".
