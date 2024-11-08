
let hari=0 ;

switch (hari) {
    case 1:
      console.log("Senin");
      break;
    case 2:
      console.log("Selasa");
      break;
    case 3:
      console.log("Rabu");
      break;
    case 4:
      console.log("Kamis");
      break;
    case 5:
      console.log("Jumat");
      break;
    case 6:
      console.log("Sabtu");
      break;
    case 7:
      console.log("Minggu");
      break;
    default:
      console.log("Tidak Ada Hari Ke " + hari);
      break;
  }
// 

// let hari = 9;

switch (hari) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  case 7:
    console.log("Minggu");
    break;
  default:
    console.log("Tidak Ada Hari Ke " + hari);
    break;
}


// Do while 
let d= 0;
do{
    console.log(d);

    d++;
}  while ( d < 10) ;

// function 
function myfunction() {
    alert ( "Hello!") ;    
}

//  Dom
    document.getElementById ("nama").innerHTML =
    "Tubagus Sidqi";

    let  myImage = document.getElementById("image");
    myImage.setAttribute('src' , './asset/parang.jpg');

    let css = document.getElementById("nama");
    css.style.textAlign = 'center'; 