function a() {
    let myImage= document.getElementById("Image")
    myImage.setAttribute('src', './tugas/lampu nyala.gif')
}

function b() {
    let myImage=document.getElementById("Image")
    myImage.setAttribute('src', './tugas/lampu is dead.gif' )
}

for (let i = 1; i <30.; i++) {
    if ((i % 3==0)&& i % 5==0) {
        console.log("fizz buzz");
        
        
    }
    if (i % 3==0) {
        console.log("fizz");
    }
    else if (i % 5 ==0   ) {
        console.log("buzz");
    }
    else

    console.log(i);
}



function segitiga1(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga1(5));

function segitiga2(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = panjang; j > i; j--) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga2(5));




