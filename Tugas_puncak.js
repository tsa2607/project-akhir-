let array = ['Kucing' , 'Anjing' , 'Burung' , 'Ikan' , 'Kelinci']
        console.log(array)
        console.log("array buah hewan:");
        let Array = [10 , 20 , 30 , 40 , 50]
        console.log(Array)
        let Erray = ['Merah' , 'Biru' , 'Hijau']
        console.log(Erray)
        function pembungkus1() {
            setTimeout(() => {
                document.getElementById("urip").setAttribute('src' , './aset/lampu hidup.gif')
            }, 3000);
            document.getElementById("mati").setAttribute('src' , './aset/lampu mati.gif')
        }
        function convertTemperature() { 
  const value = parseFloat(document.getElementById("tempValue").value); 
  const unit = document.getElementById("tempUnit").value; 
  let result; 
 
  if (unit === "C") { 
    result = (value * 9) / 5 + 32 + " °F"; 
  } else if (unit === "F") { 
    result = ((value - 32) * 5) / 9 + " °C"; 
  } else if (unit === "R") { 
    result = (value * 4) / 5 + "°R"; 
  } else if (unit === "RC") { 
    result = (value * 5) / 4 + "°C"; 
  } else if (unit === "K") { 
    result = value + 273 + "°K"; 
  } else if (unit === "KC") { 
    result = value - 273 + "°C"; 
  } else { 
    result = "Invalid unit"; 
  } 
  document.getElementById("tempResult").textContent = 'Converted: ${result}'; 
}