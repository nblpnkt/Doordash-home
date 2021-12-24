jQuery.validator.addMethod('mypassword', function(value, element) 
{
   return this.optional(element) || (value.match(/[a-zA-Z]/) && value.match(/[0-9]/));
});

jQuery.validator.addMethod('email1', function(value, element) 
{
   return this.optional(element) || (value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));
});



jQuery("#Sign-upform").validate({





    rules:{
fname:{
    required:true,
    minlength:4
},
sname:{
    required:true,
    minlength:3
},
area65:{
    required:true,
    email1:true
},
secret:{
    required:true,
    minlength:8,
    mypassword:true

},


},



messages:{

    secret:{
        required:"Enter the password",
        minlength:"Enter atleast 8 characters",
        mypassword: "Enter the numbers",
    },

    area65:{

        email1:"Check (.) symbol",
        required:"Enter valid email address"
      
    },
}
})




    