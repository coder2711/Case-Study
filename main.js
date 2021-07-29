Webcam.set({
    width : 300,
    height : 315,
    image_format : 'jpeg',
    jpeg_quality : 100,
  
    constraints:{
        facingMode : "environment"
    }
  });
  
  camera = document.getElementById("camera");
  
  Webcam.attach(camera);
  
  function Take_pic(){
      Webcam.snap(function(hello){
          document.getElementById("result").innerHTML = '<img id="image" src="'+hello+'"/>';
      });
  }
  
  console.log("ml5 version : " , ml5.version );
  
  Vedant = ml5.imageClassifier('MobileNet' , loaded);

  Radhika = ml5.imageClassifier('MicrosoftAzure' , loaded2);

  function loaded(){
    console.log("Model of MobileNet Loaded!!!!!😃😃😃😃");
}

function loaded2(){
    console.log("Model of Microsoft Azure Loaded!!!!!😃😃😃😃");
}

function check(){
    img = document.getElementById("image");
    Vedant.classify(img , bello);

    Radhika.classify(img, dance);
}

function bello(error, result1){
    if(error){
        console.error(error);
    }
    else{
        console.log(result1);
        document.getElementById("object_names_1").innerHTML= result1[0].label;
    }
}

function dance(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object_names_2").innerHTML= result[0].label;
    }
}