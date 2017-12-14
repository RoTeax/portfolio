//Some Data to work with.
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

buildTable(inventors, document.getElementById('inventors'));

// Array.prototype.filter()
// Filter the list of inventors for those who were born in the 1500's
buildTable(inventors.filter((inventor) => {
    return inventor.year >= 1500 && inventor.year <= 1599;
}), document.getElementById('filtered'));



// Array.prototype.map()
// Give us an array of the inventors' first and last names

buildTable(inventors.map((inventor) => 
{
    return {first:inventor.first, last:inventor.last}
}), document.getElementById('maped'));

// Array.prototype.sort()
// Sort the inventors by birthdate, oldest to youngest
buildTable(inventors.sort((inventor1, inventor2) =>
{
    return inventor1.year - inventor2.year;
}), document.getElementById('sorted'));

// Array.prototype.reduce()
// How many years did all the inventors live?
buildTable(inventors, document.getElementById('reduced'));

// sort Exercise
// Sort the inventors alphabetically by last name
buildTable(inventors.sort((inventor1, inventor2) => {
    var last1 = inventor1.last.toUpperCase();
    var last2 = inventor2.last.toUpperCase();
    if (last1 <  last2){
        return -1;
    }
    else if (last2 < last1){
        return 1;
    }
    return 0;
}), document.getElementById('peopleSorted'));

// Array.prototype.some() // is at least one inventor 60 or older?
console.log(inventors.some((inventor) => {
    return inventor.passed - inventor.year >= 60;
}));

// Array.prototype.every() // is everyone 60 or older?
console.log(inventors.every((inventor) => {
    return inventor.passed - inventor.year >= 60;
}));

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for.
console.log(inventors.find((inventor) => {
    return inventor.last === 'Einstein';
}));


function buildTable(arr, container) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    var headers = Object.keys(arr[0]);

    var theadTr = document.createElement('tr');
    
    for (var i = 0; i < headers.length; i++) {
        var theadTh = document.createElement('th');
        theadTh.innerHTML = headers[i];
        theadTr.appendChild(theadTh);
    }
    
    thead.appendChild(theadTr);
    table.appendChild(thead);

    for (j = 0; j < arr.length; j++) {
        var tbodyTr = document.createElement('tr');
        for (k = 0; k < headers.length; k++) {
            var tbodyTd = document.createElement('td');
            tbodyTd.innerHTML = arr[j][headers[k].toLowerCase()];
            tbodyTr.appendChild(tbodyTd);
        }
        tbody.appendChild(tbodyTr);
    }
    table.appendChild(tbody);

    container.appendChild(table);
}