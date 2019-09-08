var flowCallback = function(dto, success, error) {

  if(window.stepCall == "iotSelect") {

    var iotOptions = document.getElementsByName('searchFor')
    console.log(iotOptions)

  }

  success()
};


window.onload = function() {
    window.stepCall = "iotSelect"

    var conversationalForm = window.cf.ConversationalForm.startTheConversation({
      formEl: document.getElementById("form"),
      context: document.getElementById("cf-context"),
      flowStepCallback: flowCallback,
      submitCallback: function() {
       console.log("DONE")
      }
    });
  };