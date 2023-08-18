function validateForm() {
    var commentInput = document.getElementById("comment");
    var comment = commentInput.value.trim();

    // Validate length of comment
    if (comment.length === 0) {
        alert("You do not enter any comment, my friend!");
        commentInput.focus();
        return false;
    }

    // calling containsScript for preventing script injection
    if (containsScript(comment)) {
        alert("May be you input a script which is invalid. Please remove any scripts!");
        commentInput.focus();
        return false;
    }

    return true;
}

// This function find special pattern in the comments
function containsScript(text) {
    var scriptPattern = /<\s*script/gi;
    if (scriptPattern.test(text)) {
        return true;
    }
    return false;
}

if (validateComment()) {
    // Comment is valid, display success message
    document.getElementById("successMessage").textContent = "Comment successfully sent!";
  }
  