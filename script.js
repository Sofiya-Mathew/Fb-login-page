$(document).ready(function(){
    $('#validate-form').validate({
        rules:{
        fname:{
        required: true,
        minlength:4
        },
        emailAddress:{
            required:true,
            email:true
        }
    }
    })
})