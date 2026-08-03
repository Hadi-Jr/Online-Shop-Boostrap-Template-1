$(document).ready(function () {
  $("#description").summernote({
    placeholder: "Write your product description...",
    minHeight: 200,
    theme: "bs5",
    disableResizeEditor: true,
    toolbar: [
      ["font", ["bold", "italic", "underline"]],
      ["para", ["ul", "ol"]],
      ["insert", ["picture"]],
    ],
  });
});
