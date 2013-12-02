var sectionJson = [{"name":"nhu thep", "addr":"tu liem - ha noi","age":"22"},
				   {"name":"nguyen vi", "addr":"tu liem - ha noi","age":"16"},
				   {"name":"phuong ngoc", "addr":"an binh - hai duong","age":"17"},
				   {"name":"tieu bao", "addr":"kien thuy -  hai phong","age":"24"},];


var items = [];
    for (var i=0; i<sectionJson.length;i++ ) {
        
        // add items to an array
        items.push({
            template : "template",   //set template           
        // assign the values from the data for icon 1
            name:{
            	text : sectionJson[i].name
            },    
            addr:{
            	text : sectionJson[i].addr
            },
            age:{
            	text : sectionJson[i].age
            },    
    	});
    }


$.sectionJson.setItems(items);

$.json.open({modal:true});


