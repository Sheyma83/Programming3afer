var ourInput = document.getElementById('todoinput');
ourInput.onclick=function() {
	if (this.placeholder === 'write your todolist') {
		this.placeholder = '';
	}
}
ourInput.onblur=function() {
	if (this.placeholder === '') {
		this.placeholder = 'write your todolist';
	}
}
// for the first button save it 
function todolist(){
    var item = document.getElementById('todoinput').value ;
    var text =document.createTextNode(item);
    var newItem =document.createElement("li") ;
    newItem.appendChild(text) ;
    document.getElementById("todolist").appendChild(newItem);
	
}
// for the next button edit 

var items = document.querySelectorAll("#todolist li"),
	tab = [],liIndex;

for(var i = 0; i < items.length; i++){
	
	tab.push(items[i].innerHTML);
	
}

for(var i = 0; i < items.length; i++){
	
	items[i].onclick=function() {
		items[liIndex] = tab.indexOf(this.innerHTML);
		console.log(this.innerHTML + "Index = " + liIndex);
	};
	
}
function editLi(){
	items[liIndex].parentNode.removeChild(items(liIndex));
}
