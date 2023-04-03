// 1bf3d54d69d345d38fa008521c6a071c
// console.log("Hi");

const inputText = document.querySelector('#inputText');
const selectLanguage = document.querySelector('#selectLanguage')
const section = document.querySelector('section')


function search() {
    console.log(inputText.value);
    console.log(selectLanguage.value);

    fetch(`https://newsapi.org/v2/everything?q=${inputText.value}&language=${selectLanguage.value}&apiKey=1bf3d54d69d345d38fa008521c6a071c`)
        .then(response => response.json())
        .then(data => {
            // console.log(data.articles);
            data.articles.forEach((element) => {
                console.log(element);
                section.innerHTML += `
                <div>
                <h1>${element.title}</h1>
                <img src="${element.urlToImage}" alt="image">
                <p>${element.description}</p>
                <a href="${element.url}">link to original title</a>
                <p>______________________________________________________________</p>
                </div>`
            })
        })
}

