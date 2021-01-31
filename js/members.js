$(function () {
    loadAccount();
});

function loadAccount() {
    var arr = JSON.parse(localStorage.getItem("arr"));
    var $members = $("#members");

    $members.html("<tr><th>No</th><th>ID</th><th>Joined Date</th></tr>");

    if (arr == null) {
        $members.append("<tr><td colspan='3'>No joined members.</td></tr>");
    } else {
        arr.reverse();
        
        $.each(arr, function (index, elem) {
            var date = new Date(elem.time); //unix second -> date객체
            var tr = "<tr>";
            tr += "<td>" + (index + 1) + "</td>";
            tr += "<td>" + elem.id + "</td>";
            tr += "<td>" + displayTime(date) + "</td>";
            tr += "</tr>";
            $members.append(tr);
        });
    }
}

function displayTime(date) {
    return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() +
        " " + date.getHours() + ":" + date.getMinutes();

}