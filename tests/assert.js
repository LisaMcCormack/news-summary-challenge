var assert = {
    isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Test failed: " + assertionToCheck + " is not truthy");
        }
        else {
            console.log("You smashed it!")
        };
    },
  }
