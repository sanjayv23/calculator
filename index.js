function appendtodisplay(data){
    $("#ib").val($("#ib").val() + data);

}
function cleardisplay(){
    $("#ib").val(" ");
}
function calculate(){
    try {
        $("#ib").val(eval( $("#ib").val()));
    } catch (error) {
        $("#ib").val(error);
    }
}