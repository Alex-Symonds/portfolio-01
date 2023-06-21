document.addEventListener('DOMContentLoaded', () => {
    populateAboutMeText();
});

async function populateAboutMeText(){
    let filename = 'about_me';
    let aboutMeText = await getFileContents(filename);
    let paragraphs = aboutMeText.split("\r\n");
    updateAboutMePage(paragraphs);
}

function updateAboutMePage(paragraphs){

    let mainEle = document.querySelector('.intro');
    let contents = [];
    // contents.push(document.querySelector('.leader'));

    for(var i = 0; i < paragraphs.length; i++){
        if(paragraphs[i].length > 0){
            let new_para = document.createElement('p');
            new_para.innerHTML = paragraphs[i];
            contents.push(new_para);
        }
    }

    mainEle.replaceChildren(...contents);
}

async function getFileContents(file_name){
    let path = `static/content/${file_name}.txt`;

    let data = await fetch(path)
    .then(response => response.text())
    .catch(error => {
        console.log('Error: ', error)
    })

    return data;
}