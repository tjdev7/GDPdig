function showData() {
	var theSelect = Spigot.Dig;
    var GDP = document.getElementById('GDP');

    GDP.innerHTML = ('Yearly G.D.P value: $' + theSelect[theSelect.selectedIndex].value + ' billion.' + "<br />" 
    + "<br />" + ' Main industry: ' + theSelect[theSelect.selectedIndex].id) + ' industry.';
}
