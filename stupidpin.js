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
    map['0'] = 'X';
    map['1'] = 'Y';
    map['2'] = 'L';
    map['3'] = 'G';
    map['4'] = 'U';
    map['5'] = 'Z';
    map['6'] = 'J';
    map['7'] = 'K';
    map['8'] = 'L';
    map['9'] = 'M';
    map['A'] = 'I';
    map['B'] = 'A';
    map['C'] = 'T';
    map['D'] = 'E';
    map['E'] = 'F';
    map['F'] = 'Y';

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