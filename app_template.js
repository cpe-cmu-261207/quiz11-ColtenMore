//your code here!
function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');

    for(var i = 0; i < input-row; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < input-col; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Cell'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl);
}
if(document.getElementById('button-create-table').clicked){
    tableCreate()
}