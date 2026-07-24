$("#basic-rater").on("click", function () {
  Swal.fire({
    title: "How Was Your Experience?",
    input: "text",
    inputAttributes: { autocapitalize: "off" },
    showCancelButton: true,
    confirmButtonText: "Send",
    showLoaderOnConfirm: true,
    confirmButtonColor: "#46c82c",
    cancelButtonColor: "#5a6771",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Thank you for your feedback",
        text: "Your feedback helps us improve!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  });
});

$(".add-to-cart-btn").on("click", function () {
  Swal.fire({
    icon: "success",
    title: "Added to cart!",
    text: "Item has been added successfully.",
    toast: true,
    position: "bottom-left",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    background: "#fff",
    color: "#333",
  });
});

$(".submit-review-btn").on("click", function () {
  Swal.fire({
    title: "Thank you for your feedback",
    text: "Your feedback helps us improve!",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
  });
});

$(".coupon-btn").on("click", function () {
  Swal.fire({
    icon: "success",
    title: "Coupon Applied!",
    text: "You saved 20% on your order!",
    toast: true,
    position: "bottom-left",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    background: "#fff",
    color: "#333",
  });
});

$(".cancel-order").on("click", function () {
  Swal.fire({
    title: "Are you sure you want to cancel this order ?",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    confirmButtonColor: "#f03434",
    cancelButtonColor: "#5a6771",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Order Cancelled!",
        text: "Your order has been cancelled successfully.",
        icon: "success",
        confirmButtonColor: "#46c82c",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  });
});
