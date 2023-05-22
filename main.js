
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  //Coloque o link do teachable machine
    classifier = ml5.soundClassifier('???', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}
// Passo 1:Crie uma função que se chama 'gotResults', com os parametros (error. results)
//Passo 2: Programe que: Se acontecer um error, esse error será mostrado no console.error
//Passo 3: senãooooo... será mostrado no console log (results)
???
    console.log(results);
    //O código abaixo deixa as cores aleatórias utilizando as cores RBG, porém apenas a leta 'R', está sendo programada. Tente programar a letra 'B' e 'G' com as mesmas configurações
    RGB_color_R = Math.floor(Math.random() * 255) + 1;
    ???
    ???

 //No código abaixo, a variável 'results' precisa ser mostrada na tela, para que assim os resultados sejam mostrados
//Para que isso aconteça, utilize o código que altera o HTML utilizando JavaScrit

    document.getElementById("result_label").??? = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").??? = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    
    //Utilize o código 'style.color' para mostrar as cores que você programou aciima
//Além disso, coloque o nome das variáveis quem guardam as cores RBG
    
    document.getElementById("result_label").??? = "rgb("+RGB_color_R+","+???","+???+")";
    document.getElementById("result_confidence").???= "rgb(???)";

   
  }
}
    img = document.getElementById('alien1') 
    ??? = document.getElementById('???')
    ??? = document.getElementById('???')
    ??? = document.getElementById('???')

    if (results[0].label == "Palmas") {
      img.src = 'aliens-01.gif';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "Sino") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.gif';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "Estalos") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.gif';
      img3.src = 'aliens-04.png';
    }else{
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.gif';
    }
  }
}
