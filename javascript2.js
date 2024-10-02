function validate()
{
    var fName=document.getElementById("firstName").value;
    var lName=document.getElementById("lastName").value;
    var number=document.getElementById("mobNumber").value;
    var city=document.getElementById("city").value;
    var state=document.getElementById("state").value;
    
    // var result1=/^[a-zA-Z ]+$/.test(fName);
    // var result2=/^[a-zA-Z ]+$/.test(lName);
    // var result3=/^\d{10}$/.test(number);
    // var result4=/^[a-zA-Z]+$/.test(city);
    // var result5=/^[a-zA-Z ]+$/.test(state);

    // if(result1)
    // {
    //     console.log("Valid Name");
    // }
    // else
    // {
    //     alert("Please recheck First Name");
    // }

    if(/^[a-zA-Z ]+$/.test(fName))
    {
        console.log("Valid Name");
    }
    else
    {
        alert("Please recheck First Name");
    }

    
    if(/^[a-zA-Z ]+$/.test(lName))
    {
        console.log("Valid Name");
    }
    else
    {
        alert("Please recheck last Name");
    }


    if(/^\d{10}$/.test(number))
    {
        console.log("valid number");
    }
    else{
        alert("Please recheck mobile number");
    }


    if(/^[a-zA-Z]+$/.test(city)){
        console.log("valid name");
    }
    else{
        alert("Please recheck city name")
    }


    if(/^[a-zA-Z ]+$/.test(state)){
        console.log("valid name");
    }
    else{
        alert("Please recheck state name")
}

}