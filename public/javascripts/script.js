// NavBar auto close on mobile version
if (screen.width  < 992){
    $('.nav-link').click(() => $('button.navbar-toggler').click());
}

// Pop-up project details

var moreDetails = async (idProject) => {

    $('#section-modal').children().remove();

    var rawResponse = await fetch(`/details?idProject=${idProject}`);
    var response = rawResponse.json();

    response.then(function(result){
        var projectDetails = result;

        $('#section-modal').append(
            `<div class="modal fade" id="id-popup" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-dialog-slideout" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h5 class="modal-title">${projectDetails[0].title}</h5>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row flex">
                                    <video controls="controls" autoplay="true" muted="true" src="${projectDetails[0].videoUrl}" class="col-12 col-lg-8 mb-4">DEMO</video>
                                    <div class="col-12 col-lg-4">
                                            <div class="subtitle-project-modal mb-3">
                                                <h6>${projectDetails[0].type}</h6>
                                                <time>${projectDetails[0].year}</time>
                                            </div>
                                            <ul class="list-skills mb-4" id="pop-up-lang"></ul>
                                            <a href="${projectDetails[0].codeUrl}" target="_blank"role="button" class="btn btn-outline-secondary mb-4">${projectDetails[0].labelButton}</a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <p>${projectDetails[0].description}</p>
                                        <ul id="pop-up-skills"></ul>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        )

        for(var i=0; i<projectDetails[0].languages.length; i++){
            $('#pop-up-lang').append(
                `<li>${projectDetails[0].languages[i]}</li>`
            )
        }

        for(var i=0; i<projectDetails[0].skills.length; i++){
            $('#pop-up-skills').append(
                `<li>${projectDetails[0].skills[i]}</li>`
            )
        }

        $("#id-popup").modal("show");
    })
}




// Filters projects

var updateFilters = async (filter) => {
    var rawResponse = await fetch(`/projects?filter=${filter}`);
    var response = rawResponse.json();

    response.then(function(result){
        var projectsFiltered = result;

        $('#section-projects').children().remove();
    
        for (var i=0; i<projectsFiltered.length; i++){
            
            $('#section-projects').append(
                `<article class="col-11 col-sm-5 col-md-5 col-lg-3">
                    <div class="project" style="background-image: url(${projectsFiltered[i].coverUrl})">
                        <a onclick="moreDetails('${projectsFiltered[i]._id}')" class="overflow-detail" data-toggle="modal" data-target="id-popup">
                            <div class="details-project flex">
                                <img src="images/plus.png"/>
                            </div>
                        </a>
                        <h5 class="name-project">${projectsFiltered[i].title}</h5>
                        <p class="type-project">${projectsFiltered[i].type}</p>
                        <p class="year-project">${projectsFiltered[i].year}</p>
                    </div>
                </article>`
            )
        }
    })
}

$('#javascript').click(
    () => { 
        $('a').removeClass("active");
        $('#javascript').addClass("active");
        $('#project-nav-link').addClass('active');
} 
)

$('#react').click(
    () => { 
        $('a').removeClass("active");
        $('#react').addClass("active");
        $('#project-nav-link').addClass('active');
} 
)

$('#reactnative').click(
    () => { 
        $('a').removeClass("active");
        $('#reactnative').addClass("active");
        $('#project-nav-link').addClass('active');
} 
)

$('#all').click(
    () => { 
        $('a').removeClass("active");
        $('#all').addClass("active");
        $('#project-nav-link').addClass('active');
} 
)