var per_page = 10;
var rows = $('.innerProductItems'),
    pages = Math.ceil(rows.length / per_page);

var page_picker = '<div class="page_picker">{}</div>';

for (i = 1; i <= pages; i++) {
    $('#pp_container').append(page_picker.replace("{}", i));
}

function pagination(page, elms) {
    if (page * per_page > elms.length) {
        _ = elms.slice((page - 1) * per_page)
    } else {
        _ = elms.slice((page - 1) * per_page, page * per_page)
    }

    elms.hide();
    _.show();
}

$('#pp_container').on('click', '.page_picker',function () {
    var current_page = $(this).text();
    pagination(current_page, rows)
});

pagination(1, rows);