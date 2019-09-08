var flowCallback = function(dto, success, error) {

  if(window.stepCall == "verification") {
    window.stepCall = "iotSelect"
  } else if(window.stepCall == "iotSelect") {
    var iotOptions = document.getElementsByName('searchFor')
    for(var i = 0; i < iotOptions.length; i++) {

      if(iotOptions[i].checked) {
        var checkedOption = iotOptions[i].value
        
        if(checkedOption == "vmax-cameras") {
          console.log("You Selected VMAX Camera")
        } else if(checkedOption == "all-port-eighty") {
          console.log("You Selected All Port Eighty")
        } else if(checkedOption == "linksys-routers") {
          console.log("You selected linksys routers")
        }
        break;

      }
    }
  }

  success()
};


window.onload = function() {
    window.stepCall = "verification"

    var conversationalForm = window.cf.ConversationalForm.startTheConversation({
      formEl: document.getElementById("form"),
      context: document.getElementById("cf-context"),
      flowStepCallback: flowCallback,
      submitCallback: function() {
       console.log("DONE")
      }
    });
  };