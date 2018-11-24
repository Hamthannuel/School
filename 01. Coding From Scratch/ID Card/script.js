function idCard() {
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let age = parseInt(document.getElementById("age").value);
    let phoneNum = parseInt(document.getElementById("age").value);
    let address = document.getElementById("address").value;
    let fullName = firstName + " " + lastName;

    document.getElementById("postFullName").innerHTML = "Name:" + " " + fullName;
    document.getElementById("postAge").innerHTML = "Age:" + " " + age;
    document.getElementById("postPhoneNumber").innerHTML = "Phone Number:" + " " + phoneNum;
    document.getElementById("postAddress").innerHTML = "Address:" + " " + address;

    let numberArray = [];
    numberArray.push(age, phoneNum);

    for(i=0; i < numberArray.length; i++) {
        if(numberArray[i] < 100) {
            document.getElementById("postAge").innerHTML = "Age:" + " " + age;
        } else if (numberArray[i] >= 100){
            document.getElementById("postAge").innerHTML = "Age:" + " " + age;
        }
    }
}
