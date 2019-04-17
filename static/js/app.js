$(function() {
    var form = $('#contact');
    var formMessageSuccess = $('#contact .form-message.success');
    var formMessageError = $('#contact .form-message.error');
    $(form).submit(function(event) {
        event.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            $(formMessageSuccess).show();
            $(formMessageError).hide();
        })
        .fail(function(data) {
            $(formMessageSuccess).hide();
            $(formMessageError).show();
        });
    });
});
