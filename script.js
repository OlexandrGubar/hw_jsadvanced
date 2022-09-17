var count = 1;
var url = `https://swapi.dev/api/people/?page=${count}`;
var i = 0;
var list = document.getElementById('list');
var table = document.getElementById('table');
var infoBox = document.getElementById('info');
var infoItem = document.querySelector('.info_item')
var next = document.getElementById('next');
var prev = document.getElementById('prev');
infoBox.style.display = "none";
window.onload = function Start(){
    fetch(url)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        var res = data.results;
        console.log(res);
        console.log(data);
        for (i = 0; i < 10; i++){
            list.children[i].innerHTML = res[i].name;
        }
         for(var j in list){
            list.children[j].addEventListener('click', function showInfo(){
                console.log(res)
                infoBox.style.display = "flex";
                infoItem.innerHTML ="Name: " + res[j].name + 
                                    " Birthday: " + res[j].birth_year + 
                                    " Gender: " + res[j].gender + 
                                    " Films + " + res[j].films  +
                                    " Planet : " + res[j].homeworld +
                                    " Species: " + res[j].species
                console.log(j)
        } )
        }
    

        if (count ==1){
            prev.disabled = true;       
        } else {
            prev.disabled = false;
        }
        if (count ==9){
            next.disabled = true;       
        } else {
            next.disabled = false;
        }


        next.addEventListener('click', function Nextpage(e){
            count++;
            url = `https://swapi.dev/api/people/?page=${count}`
            Start()
        })
        prev.addEventListener('click', function Nextpage(e){

            count++;
            url = `https://swapi.dev/api/people/?page=${count}`
            Start();
            
    
        })
    
    })
    .catch(function (err) {
        console.error(err)
    });
}


