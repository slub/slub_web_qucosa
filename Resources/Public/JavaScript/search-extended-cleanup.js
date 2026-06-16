(function () {
    var form = document.querySelector('.qsa_search-header__advanced-search');
    if (!form) {
        return;
    }
    form.addEventListener('submit', function () {
        var fields = form.querySelectorAll('input[type=text]');
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].value === '') {
                fields[i].disabled = true;
            }
        }
        var rows = form.querySelectorAll('.qsa_field-query-row');
        for (var j = 0; j < rows.length; j++) {
            var valueInput = rows[j].querySelector('.qsa_field-query-value');
            var nameSelect = rows[j].querySelector('.qsa_field-query-name');
            if (valueInput && nameSelect && valueInput.value === '') {
                nameSelect.disabled = true;
            }
        }
    });
})();
