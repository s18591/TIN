function send() {
    let in1 = document.getElementById("in1").value;
    let in2 = document.getElementById("in2").value;
    let oper = document.getElementById("oper").value;

    let data = JSON.stringify({
        "in1": in1, "in2": in2, "oper": oper
    });
    console.log(data);
    let sender = new XMLHttpRequest();
    sender.open("POST","/form",true);
    sender.setRequestHeader("Content-Type", "application/json");
    sender.onload = function()
    {
        let res = JSON.parse(sender.response);
        document.getElementById("out").value = res.result;
    };
    sender.send(data);
}