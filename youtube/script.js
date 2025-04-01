function fnSearch(){
    var searchTxt = document.getElementById('searchinput').value;

    var items = document.querySelectorAll('.video-preview');

    items.forEach(video => {
        var title = video.querySelector('.video-title').textContent;
        
        if(title.includes(searchTxt)){
            video.style.display='';
        }else{
            video.style.display='none';
        }
    });
}