function clearform()
{document.getElementById('survey form').reset();}

$(function(){
    var pages = ['index','about','survey','contact']
    var pathname = window.location.pathname;

        $('.nav-link').each(function(item){
            if(pathname.includes(pages[item])){
                $(this).addClass('active');
                $(this).attr('aria-current', 'page');
            }
        })
});

// javascript test code comentted for referance linked to index

// function hideptags(){
//     let ptags = document.getElementsByTagName ('p');
//     for(let item of ptags){
//         item.style.display = 'none';
//     }}

// $('#jquaryclear').click(function(){
//     $('p').hide();})

