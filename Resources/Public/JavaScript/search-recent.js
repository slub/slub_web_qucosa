(function () {
    var STORAGE_KEY = 'qsa_recent_searches';
    var MAX_ENTRIES = 5;

    function getRecent() {
        try {
            var raw = window.localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch (e) {
            return [];
        }
    }

    function saveRecent(list) {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
        } catch (e) {
            // localStorage unavailable, skip silently
        }
    }

    function paramValue(search, key) {
        var pattern = new RegExp('(?:^|[?&])' + key.replace(/[[\]]/g, '\\$&') + '=([^&]*)');
        var match = search.match(pattern);
        return match ? decodeURIComponent(match[1].replace(/\+/g, ' ')) : '';
    }

    function buildLabel(search) {
        var parts = [];
        var fulltext = paramValue(search, 'tx_dpf_frontendsearch%5Bquery%5D%5Bfulltext%5D') || paramValue(search, 'tx_dpf_frontendsearch[query][fulltext]');
        if (fulltext) {
            parts.push(fulltext);
        }
        for (var i = 0; i < 10; i++) {
            var name = paramValue(search, 'tx_dpf_frontendsearch%5Bfields%5D%5B' + i + '%5D%5Bname%5D') || paramValue(search, 'tx_dpf_frontendsearch[fields][' + i + '][name]');
            var value = paramValue(search, 'tx_dpf_frontendsearch%5Bfields%5D%5B' + i + '%5D%5Bvalue%5D') || paramValue(search, 'tx_dpf_frontendsearch[fields][' + i + '][value]');
            if (name && value) {
                parts.push(value);
            }
        }
        var doctype = paramValue(search, 'tx_dpf_frontendsearch%5Bquery%5D%5Bdoctype%5D') || paramValue(search, 'tx_dpf_frontendsearch[query][doctype]');
        if (doctype) {
            parts.push(doctype);
        }
        return parts.join(', ');
    }

    var search = window.location.search;
    var isSearchPage = search.indexOf('tx_dpf_frontendsearch') !== -1;
    var recentContainer = document.getElementById('recentSearchesContainer');

    if (isSearchPage && !recentContainer) {
        var label = buildLabel(search);
        if (label) {
            var entry = { label: label, url: window.location.pathname + window.location.search };
            var list = getRecent().filter(function (item) {
                return item.url !== entry.url;
            });
            list.unshift(entry);
            saveRecent(list.slice(0, MAX_ENTRIES));
        }
    }

    if (recentContainer) {
        var recent = getRecent();
        while (recentContainer.firstChild) {
            recentContainer.removeChild(recentContainer.firstChild);
        }
        if (recent.length === 0) {
            var emptyMessage = document.createElement('p');
            emptyMessage.textContent = 'Noch keine Suchen durchgeführt. Geben Sie oben einen Suchbegriff ein, um zu starten.';
            recentContainer.appendChild(emptyMessage);
        } else {
            var heading = document.createElement('h2');
            heading.className = 'h6';
            heading.textContent = 'Letzte Suchen';
            recentContainer.appendChild(heading);

            var list = document.createElement('ul');
            list.style.listStyle = 'none';
            list.style.padding = '0';
            recent.forEach(function (item) {
                var li = document.createElement('li');
                li.style.marginBottom = '8px';
                var link = document.createElement('a');
                link.href = item.url;
                link.textContent = item.label;
                li.appendChild(link);
                list.appendChild(li);
            });
            recentContainer.appendChild(list);
        }
    }
})();
