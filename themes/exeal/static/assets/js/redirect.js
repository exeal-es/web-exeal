$("document").ready(function () {
  $("form").each(function () {
    this.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();

        window.location.href = this.dataset["redirect"];
      },
      true
    );
  });
});
