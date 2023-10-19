var UN=document.querySelector("#userName")
var UNI=document.querySelector(".userNameInput")

var UPhone=document.querySelector("#userPhone")
var UPhoneI=document.querySelector(".userPhoneInput")

var UPW=document.querySelector("#userPW")
var UPWI=document.querySelector(".userPWInput")

var chk_box=document.querySelector("#chkBox")
var ek=0;
var hint=document.querySelector("#warnMsg").style.display;
//var hintOff=flase;

//---------------------------------------------------------------------------------------------------------
chk_box.addEventListener("click" , ()=>{
                                        console.log(UNI.type);
                                        console.log(UNI.value);
                                        if(chk_box.checked){UPWI.type="text"}else{UPWI.type="password"}

                                       }
                        )
//---------------------------------------------------------------------------------------------------------
UNI.addEventListener("keyup",(e)=>{ek=e.key;console.log(ek);})
UPWI.addEventListener("focus",()=>{hint="block";document.querySelector("#warnMsg").style.display=hint})
UPWI.addEventListener("blur",()=>{hint="none" ;document.querySelector("#warnMsg").style.display=hint })
var phoneChk=/\d\d\d\s\d\d\d\d\s\d\d\d\d/

function validator()
  {

    UNI=document.querySelector(".userNameInput")
    if(UNI.value==""||UNI.value.length<6||!isNaN(ek))
    {
      reset()
      UN.innerHTML="Invalid User Name";
      UN.style.color="red";
      return false;
    }
    else
        {
        if(!phoneChk.test(UPhoneI.value))
          {
          reset();
          UPhone.innerHTML="Invalid phone number";
          UPhone.style.color="red";
          return false
          }
     
        else
            if(UPWI.value.length<6)
              {
              reset()
              UPW.innerHTML="Invalid password";
              UPW.style.color="red";
              return false
              }
          
          reset()
          return true;
        };
      
  }

//---------------------------------------------------------------------------------------------------------
  function reset()
  {
    UN.innerHTML=" User Name"
    UN.style.color="black"
    UPhone.innerHTML="Phone number"
    UPhone.style.color="black";
    UPW.innerHTML="Password"
    UPW.style.color="black";
  }
//---------------------------------------------------------------------------------------------------------
  