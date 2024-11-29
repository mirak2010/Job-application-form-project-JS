
    $("#ajaxForm").submit(function(e){
        e.preventDefault();
        var action = $(this).attr("action");
        $.ajax({
        type: "POST",
        url: action,
        crossDomain: true,
        data: new FormData(this),
        dataType: "json",
        processData: false,
        contentType: false,
        headers: {
        "Accept": "application/json"
        }
    }).done(function() {
        alert('Ваша анкета была успешно отправлена.')
    }).fail(function() {
        alert('Ошибкаб Попробуте чуть позже!!!.')
    });
    });

