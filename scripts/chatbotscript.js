var flowCallback = function(dto, success, error) {

  if(window.stepCall == "verification") {
    window.stepCall = "iotSelect"
  } else if(window.stepCall == "iotSelect") {
    var iotOptions = document.getElementsByName('searchFor');
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