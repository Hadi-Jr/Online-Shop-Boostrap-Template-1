var basicRating;
document.querySelector("#basic-rater") &&
  (basicRating = raterJs({
    starSize: 22,
    rating: 1,
    element: document.querySelector("#basic-rater"),
    rateCallback: function (e, t) {
      this.setRating(e);
      document.querySelector("#attitude_rating").value = e;
      t();
    },
  }));

document.querySelector("#basic-rater2") &&
  (basicRating = raterJs({
    starSize: 15,
    rating: 0,
    element: document.querySelector("#basic-rater2"),
    rateCallback: function (e, t) {
      (this.setRating(e), t());
    },
  }));

document.querySelector("#basic-rater3") &&
  (basicRating = raterJs({
    starSize: 22,
    rating: 1,
    element: document.querySelector("#basic-rater3"),
    rateCallback: function (e, t) {
      (this.setRating(e), t());
    },
  }));

document.querySelector("#basic-rater4") &&
  (basicRating = raterJs({
    starSize: 22,
    rating: 1,
    element: document.querySelector("#basic-rater4"),
    rateCallback: function (e, t) {
      (this.setRating(e), t());
    },
  }));

document.querySelector("#basic-rater5") &&
  (basicRating = raterJs({
    starSize: 22,
    rating: 1,
    element: document.querySelector("#basic-rater5"),
    rateCallback: function (e, t) {
      (this.setRating(e), t());
    },
  }));

document.querySelectorAll(".review-rater").forEach(function (element) {
  raterJs({
    starSize: 22,
    rating: Number(element.dataset.rating),
    readOnly: true,
    element: element,
  });
});
