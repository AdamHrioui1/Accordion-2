const accordion_header = document.querySelectorAll(".accordion_header");
const accordion_content = document.querySelectorAll(".accordion_content");

accordion_header.forEach(header => {
    header.addEventListener("click", e => {

        accordion_content.forEach( content => {
            if(content.classList.contains("active") && e.target.nextElementSibling !== content){
                content.classList.remove("active");
                accordion_header.forEach(header => header.classList.remove("active"));
            };    
        });

        header.classList.toggle("active");
        let accordion_body = header.nextElementSibling;
        accordion_body.classList.toggle("active");
    });
});