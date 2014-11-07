javascript : (function() {
    var selectedText = window.getSelection().toString();
    if(selectedText === '')
    {
        alert('Select the pass code before clicking the button.');
        return;
    }

    if (window.jQuery || typeof jQuery === 'undefined') {
        alert ('jQuery loaded');
    }
    else {
        alert ('jQuery not loaded');
    }

    var map = [];
    map['0'] = 'Q';
    map['1'] = 'C';
    map['2'] = 'A';
    map['3'] = 'M';
    map['4'] = 'H';
    map['5'] = 'E';
    map['6'] = 'U';
    map['7'] = 'S';
    map['8'] = 'P';
    map['9'] = 'I';
    map['A'] = 'K';
    map['B'] = 'R';
    map['C'] = 'Z';
    map['D'] = 'J';
    map['E'] = 'G';
    map['F'] = 'L';

    var output = '';
    for(var i = 0; i < selectedText.length; i++)
    {
        var mapValue = map[selectedText[i]];
        if(mapValue)
        {
            output = output + mapValue;
        }
    }

    $('#txtPassCode').val(output);
})();