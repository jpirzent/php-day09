var ft_list;
var cookie = new Array();


window.onload = function()
{
	this.document.querySelector("#new").addEventListener("click", NewInput);
	ft_list = this.document.querySelector("#ft_list");
	var tmp = this.document.cookie;
	if (tmp)
	{
		cookie = JSON.parse(tmp);
		cookie.forEach(function (e)
		{
			add(e);
		});
	}
};

window.onunload = function()
{
	save();
}

function save()
{
	var items = ft_list.children;
	var newCookie = [];
	for (var i = 0; i < items.length; i++)
	{
		newCookie.push(items[i].innerHTML);
	}
	document.cookie = JSON.stringify(newCookie);
}

function NewInput()
{
	var info = prompt("what do you want to add?", '');
	if (info)
		add(info);
	save();
}

function add(info)
{
	var elem = document.createElement("div");
	elem.innerHTML = info;
	elem.addEventListener("click", del);
	ft_list.insertBefore(elem, ft_list.firstChild);
}

function del()
{
	if (confirm("Delete Action"))
		this.parentElement.removeChild(this);
}