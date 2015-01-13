var sections = ['starred_div', 'channels', 'direct_messages', 'groups'];

sections.forEach (function(sectionName){
    var currSection = $('#' +sectionName);
    
    currSection.find('h2').append('<span class="toggleList"style="margin-left:10px;font-weight;bold">-</span>')
    $('#' +sectionName + ' .toggleList').click(function(){
        currSection.find('ul').toggle();
        currSection.find('.list_more').toggle();

        var toggleButtonContent = currSection.find('ul').is(':visible') ? '-' : '+';
        currSection.find('.toggleList').text(toggleButtonContent);

        return false;
    })
});
