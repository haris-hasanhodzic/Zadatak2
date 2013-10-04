var container=document.getElementsByClassName("table-div")[0];

var table=document.createElement("table");
table.setAttribute("class","table table-hower");
var tbody=document.createElement("tbody");
var theader=document.createElement("thead");


var trow=document.createElement("tr");
var col=document.createElement("th")
col.appendChild(document.createTextNode("ID"));
trow.appendChild(col);
col=document.createElement("th")
col.appendChild(document.createTextNode("Name"));
trow.appendChild(col);
col=document.createElement("th")
col.appendChild(document.createTextNode("E-mail"));
trow.appendChild(col);

theader.appendChild(trow);
table.appendChild(theader);



var data=[[1,"Haris","hari.bih@gmail.com"],[2,"Dino","dino@gmail.com"],[3,"Damir","damir@gmail.com"],[4,"Edna","edna@gmail.com"]];
console.log(data[0][1])
for (var i=0;i<data.length;i++)
    {
        var trow=document.createElement("tr");
        for (var j=0;j<data[i].length;j++){
            col=document.createElement("td");
            
            if(j<2)
                col.appendChild(document.createTextNode(data[i][j]));
            else{
                var a=document.createElement("a");
                a.href="#";
                a.appendChild(document.createTextNode(data[i][j]));
                col.appendChild(a);
            }
                
            trow.appendChild(col);
        }
        tbody.appendChild(trow);
    }

table.appendChild(tbody);



container.appendChild(table);

