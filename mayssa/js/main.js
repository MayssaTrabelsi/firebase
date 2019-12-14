function BeBolt(){
    if( document.getElementById("area-text").style.fontWeight!="bold")
   document.getElementById("area-text").style.fontWeight="bold";
   else 
   document.getElementById("area-text").style.fontWeight="normal";
    }
function BeItalic(){
     if(document.getElementById("area-text").style.fontStyle !="italic") {
         document.getElementById("area-text").style.fontStyle="italic";}
    else 
    document.getElementById("area-text").style.fontStyle="normal";
        }
function Underline(){

            document.getElementById("area-text").style.textDecorationLine="underline";
            document.getElementById("area-text").style.textDecorationStyle="solid";
          
          
              }

function sizes(){
    document.getElementById("area-text").style.fontSize=document.getElementById("mySelect").value;
}
function changeFamily(){
    document.getElementById("area-text").style.fontFamily=document.getElementById("mySelectPolice").value;
}

$(".open").on("click", function(){
  $(".popup, .popup-content").addClass("active");
  });

  $(".close, .popup").on("click", function(){
      $(".popup, .popup-content").removeClass("active");
      });

$(".picture1").hover(function(){
  $(".btn1").toggleClass('btn1Hover')
});
$(".picture2").hover(function(){
  $(".btn2").toggleClass('btn1Hover')
});
$(".picture3").hover(function(){
  $(".btn3").toggleClass('btn1Hover')
});

$(".picture2").click(function(){
  $("#fade").modal({
      fadeDuration: 100
    });
  })
  $(".picture1").hover(function(){
    $(".btn1").toggleClass('btn1Hover')
  });
  
  $(".picture1").click(function(){
    $("#fade").modal({
        fadeDuration: 100
      });
    })
    $(".picture3").hover(function(){
      $(".btn3").toggleClass('btn3Hover')
    });
    
    $(".picture3").click(function(){
      $("#fade").modal({
          fadeDuration: 100
        });
      })
      $(".picture4").hover(function(){
        $(".btn4").toggleClass('btn4Hover')
      });
      
      $(".picture4").click(function(){
        $("#fade").modal({
            fadeDuration: 100
          });
        })
        $(".picture5").hover(function(){
          $(".btn5").toggleClass('btn5Hover')
        });
        
        $(".picture5").click(function(){
          $("#fade").modal({
              fadeDuration: 100
            });
          })
          $(".picture6").hover(function(){
            $(".btn6").toggleClass('btn6Hover')
          });
          
          $(".picture6").click(function(){
            $("#fade").modal({
                fadeDuration: 100
              });
            })
            $(".picture7").hover(function(){
              $(".btn7").toggleClass('btn7Hover')
            });
            
            $(".picture7").click(function(){
              $("#fade").modal({
                  fadeDuration: 100
                });
              })
              $(".picture8").hover(function(){
                $(".btn8").toggleClass('btn8Hover')
              });
              
              $(".picture8").click(function(){
                $("#fade").modal({
                    fadeDuration: 100
                  });
                })
                $(".picture9").hover(function(){
                  $(".btn9").toggleClass('btn9Hover')
                });
                
                $(".picture9").click(function(){
                  $("#fade").modal({
                      fadeDuration: 100
                    });
                  })


 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB77jFBunyhqCaSx6kFQBG8tzJ18jGKb1M",
    authDomain: "bankroll-99f61.firebaseapp.com",
    databaseURL: "https://bankroll-99f61.firebaseio.com",
    projectId: "bankroll-99f61",
    storageBucket: "bankroll-99f61.appspot.com",
    messagingSenderId: "315599240453",
    appId: "1:315599240453:web:a4f6a373ceb6fed31e0b6c",
    measurementId: "G-ZLGSP9QEMT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messageref=firebase.database().ref('Mayssa');//setting the name of your database
  function submitform(){
event.preventDefault();
    //get values
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var message=document.getElementById('message').value; 
    saveMessage(name,email,password,message);
  } 
  

   document.getElementById('contactForm').addEventListener('submit', submitform);
  //save message to our base
  function saveMessage(name,email,password,message){
  var newmesgref=messageref.push();
  newmesgref.set({
    name:name, 
    email:email,
    password : password,
  message : message 
});
  }