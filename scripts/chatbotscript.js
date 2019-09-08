var flowCallback = function(dto, success, error) {
  console.log("dto....", dto, success, error);
  console.log("CALLED")
  
  success();
};


window.onload = function() {
    var conversationalForm = window.cf.ConversationalForm.startTheConversation({
      formEl: document.getElementById("form"),
      context: document.getElementById("cf-context"),
      flowStepCallback: flowCallback,
      submitCallback: function() {
       console.log("DONE")
      }
    });
  };