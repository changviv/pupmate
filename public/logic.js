function pageRedirect() {
    $.ajax({
        url: "/api/pupper",
        type: "POST",
    }).then(function () {
        window.location.href = "/api/pupper";
    });
};