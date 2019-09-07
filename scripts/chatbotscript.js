var flowStepCallback = function() {
  console.log("CALLED")
}
window.onload = function() {
    var conversationalForm = window.cf.ConversationalForm.startTheConversation({
      formEl: document.getElementById("form"),
      context: document.getElementById("cf-context"),
      flowStepCallback: flowStepCallback,
      submitCallback: function() {
       console.log("DONE")
      }
    });
  };