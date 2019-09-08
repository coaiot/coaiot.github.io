var flowCallback = function(dto, success, error) {
  console.log("dto....", dto, success, error);

  if (window.incrementedValue < 3) {
    window.incrementedValue++;
    window.ConversationalForm.addTags([
      {
        tag: "select",
        name: "country",
        "cf-questions":
          "Where are you from? (I have asked you this " +
          window.incrementedValue +
          " time(s))",
        "cf-input-placeholder": "country code",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "USA", value: "usa" },
          { tag: "option", "cf-label": "UK", value: "uk" }
        ]
      }
    ]);
  }

  // We assume every answer is valid. If that wasnt the case we would call error()
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