function splitName() {
    let name = document.getElementById("txtName").value;
    name.split("");
    let arrName = new Array();
    let i;
    name = arrName[i];
    
    //= name.split(""); // empty string separator
    //console.log(arrName); // [ "a", "b", "c", "d", "e", "f", "g" ]

    //document.getElementById("answer01").innerText = arrName;
    let i;
    for (i = 0; i <= arrName.length; i++) {
        arrName.slice(i);
        console.log(arrName);
    }
}