var flowCallback = function(dto, success, error) {

  if(window.stepCall == "verification") {
    window.stepCall = "iotSelect"
  } else if(window.stepCall == "iotSelect") {
    var iotOptions = document.getElementsByName('searchFor')
    for(var i = 0; i < iotOptions.length; i++) {

      if(iotOptions[i].checked) {
        window.iotSelectionMade = iotOptions[i].value
        window.stepCall = "displayDataForSelection"
        break;
      }
    }
  } else if(window.stepCall == "displayDataForSelection") {

    if(window.iotSelectionMade == "all-port-eighty") {
      window.location.href = 'https://coaiot.github.io/scripts/iotData.json';
    }

  }

  success()
};


window.onload = function() {
    window.stepCall = "verification"
    window.iotSelectionMade = ""

    var conversationalForm = window.cf.ConversationalForm.startTheConversation({
      formEl: document.getElementById("form"),
      context: document.getElementById("cf-context"),
      flowStepCallback: flowCallback,
      submitCallback: function() {
       console.log("DONE")
      }
    });
  };