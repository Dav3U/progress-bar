var myBtn=  document.getElementById('myBtn');

var clrBtn=  document.getElementById('clrBtn');


var progressBar = document.getElementById('progressBar');

var progText = document.getElementById('progText')

var notif = document.getElementById('notif');

var closeNotifBtn =document.getElementById('closeNotifBtn');

var notifMsg =document.getElementById('notifMsg')

var progressAmt=0;
var progstate=0;

// var btnstatus = myBtn.clicked()
// console.log(btnstatus)

// notif.hide();



myBtn.addEventListener('click',function(){
    increaseProg();
})

// function closeNotifBtnFunct(){
//     closeNotifBtn.click();

// }

// var setT = setTimeout(closeNotifBtn.click(),3000)


function clrProgress(){
    progressAmt = 0;
    progressBar.style.width = Number(progressAmt) + '%'
    progstate=0;

    
    notifMsg.innerHTML="Success! Progress Completed";
                
                

    // if (progstate==0){

    // }
    
    
    console.log(progressAmt)
}

function increaseProg(){
    
    // for(progressAmt=0;progressAmt<=100;progressAmt+=25)

    if(progressAmt!=100)
    {

    progressAmt+= Number(25);

    progressBar.style.width = Number(progressAmt) + '%'
    
    
    console.log(progressAmt);
    }

    if (progressAmt==25){
        progText.innerHTML='25%'
    }
    
    else if (progressAmt==50){
        progText.innerHTML='50%'
    }
    
    else if (progressAmt==75){
        progText.innerHTML='75%'
    }


    
    else if (progressAmt===100){
        progText.innerHTML='100%'
    
        $(".alert-dismissible").fadeTo(2000, 500).slideUp(500)
         progstate = "max"


        myBtn.addEventListener('click',function(){

            if (progstate==="max" && myBtn.click &&  notifMsg.innerHTML=="Success! Progress Completed" )
            {
                notifMsg.innerHTML="Your progress is already complete";
    
                $(".alert-dismissible").fadeTo(2000, 500).slideUp(500);
                console.log(progstate)

                // notifMsg.innerHTML="Success! Progress Completed";


                

    }
    // notifMsg.innerHTML="Success! Progress Completed";

    
   
        })
    }
        // ,function(){
            // $(".alert-dismissible").alert('close');

            
       
        

   
    clrBtn.addEventListener('click',function(){
        clrProgress();
    })
    
    


        
    }
   

    

//     else
//     {
        
// //       var alert=  document.createElement('div');

// //       var pText= document.createTextNode(' <strong>Success!</strong>')

// //       progText.appendChild(pText)

// //      var dismissBtn = document.createElement('button')



// //       <div class="alert alert-success alert-dismissible">
// //   <button type="button" class="close" data-dismiss="alert">&times;</button>
// //   Indicates a successful or positive action.
// // </div>
// //       alert.classList.add("alert alert-danger alert-dismissible fade show")
//     }

    