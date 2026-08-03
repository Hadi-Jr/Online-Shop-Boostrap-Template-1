$("#statusSwitch").on("change", function () {
  this.checked
    ? $(".status-label").text("Available")
    : $(".status-label").text("Not Available");
});

$("#add-product-form input#product_name").on("input", function () {
  let name_value = this.value
    .replaceAll(" ", "-")
    .replaceAll("'", "-")
    .replaceAll("`", "-")
    .toLowerCase();

  $("#add-product-form input#slug").val(name_value);
});

$("button#addFeature").on("click", function () {
  $("#featureContainer").append(`
    <div class="feature-row d-flex gap-2 mb-2">
      <input type="text" class="form-control" placeholder="Key (e.g., Color)" name="feature_key[]">
      <input type="text" class="form-control" placeholder="Value (e.g., Red)" name="feature_value[]">
      <button type="button" class="btn btn-danger remove-feature">×</button>
    </div>
  `);
});

$(document).on("click", ".remove-feature", function () {
  if ($(".feature-row").length > 1) {
    $(this).closest(".feature-row").remove();
  }
});
