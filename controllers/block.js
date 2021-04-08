

"use strict"
var imported = document.createElement('script');
imported.src = 'purify.min.js';
document.head.appendChild(imported);

function deposit() {
    document.getElementById("msg").innerHTML ="";
    document.getElementById("addAcc").innerHTML ="";
    document.getElementById("wit").innerHTML ="";
    document.getElementById("trans").innerHTML ="";
    
        if (document.getElementById("dep").innerHTML =="") {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200){ 
                    var xmlDoc = xhttp.responseXML;
                
                    var htm = 'Choose your account:	<select id="list" name="accName">';
                    var accName = xmlDoc.getElementsByTagName("accname");
                    var balance = xmlDoc.getElementsByTagName("balance");
                    for (var i=0; accName.length > i; i++){
                        htm+= '<option value="'+accName[i].childNodes[0].nodeValue+'">'+ accName[i].childNodes[0].nodeValue + '</option>';
                    };
    
    
                    htm +='</select><input type="text" id="nbalance" name="balance" placeholder="Deposit amount" required=""><input id="b2" type="button" value="Send"  />';
                    document.getElementById("dep").innerHTML=DOMPurify.sanitize(htm);
                    document.querySelector('#b2').addEventListener('click',sendmoney);
                  };
            };
              xhttp.open("POST", "profile", true);
              xhttp.setRequestHeader('Content-Type', 'text/xml');
              xhttp.send('<?xml version="1.0" encoding="UTF-8"?><request>request account information</request>');	
        }else {
            document.getElementById("dep").innerHTML ="";
            
        };
        
    };
    
    
    function sendmoney(){
    
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = xhttp.responseXML;
            var msg = xmlDoc.getElementsByTagName("success")[0].childNodes[0].nodeValue;	
             if (msg =="Deposit successfull"){
    
                document.getElementById("msg").innerHTML = DOMPurify.sanitize(msg);
                document.getElementById("dep").innerHTML="";
                update();
                }else{
                document.getElementById("msg").innerHTML =DOMPurify.sanitize(msg);
            };
          };};
        
        var e = document.getElementById("list");
        var accName = e.options[e.selectedIndex].value;
        var balance = document.getElementById("nbalance").value;
         xhttp.open("POST", "deposit", true);
         xhttp.setRequestHeader('Content-Type', 'text/xml');
        var data = '<?xml version="1.0" encoding="UTF-8"?><deposit><accname>'+ accName + "</accname><balance>"+ balance + "</balance></deposit>";
          xhttp.send(data);
    
    };
    function getmoney(){

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = xhttp.responseXML;
            var msg = xmlDoc.getElementsByTagName("success")[0].childNodes[0].nodeValue;	
             if (msg =="Withdraw successfull"){
    
                document.getElementById("msg").innerHTML = DOMPurify.sanitize(msg);
                document.getElementById("wit").innerHTML="";
                update();
                }else{
                document.getElementById("msg").innerHTML = DOMPurify.sanitize(msg);
            };
          };};
        
        var e = document.getElementById("list");
        var accName = e.options[e.selectedIndex].value;
        var balance = document.getElementById("nbalance").value;
         xhttp.open("POST", "withdraw", true);
         xhttp.setRequestHeader('Content-Type', 'text/xml');
        var data = '<?xml version="1.0" encoding="UTF-8"?><withdraw><accname>'+ accName + "</accname><balance>"+ balance + "</balance></withdraw>";
          xhttp.send(data);
    
    };
    
    function transfer() {
    
    document.getElementById("msg").innerHTML ="";
    document.getElementById("dep").innerHTML ="";
    document.getElementById("wit").innerHTML ="";
    document.getElementById("addAcc").innerHTML ="";
        if (document.getElementById("trans").innerHTML =="") {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200){ 
                    var xmlDoc = xhttp.responseXML;
                
                    var htm = 'Transfer from:	<select id="list1" name="accName1">';
                    var accName = xmlDoc.getElementsByTagName("accname");
                    var balance = xmlDoc.getElementsByTagName("balance");
                    for (var i=0; accName.length > i; i++){
                        htm+= '<option value="'+accName[i].childNodes[0].nodeValue+'">'+ accName[i].childNodes[0].nodeValue + '</option>';
                    };
                    htm += '</select> To:	<select id="list2" name="accName2">';
                    for (var i=0; accName.length > i; i++){
                        htm+= '<option value="'+accName[i].childNodes[0].nodeValue+'">'+ accName[i].childNodes[0].nodeValue + '</option>';
                    };
    
                    htm +='</select><input type="text" id="nbalance" name="balance" placeholder="Transfer amount" required=""><input id="b4" type="button" value="Send"  />';
                    document.getElementById("trans").innerHTML=DOMPurify.sanitize(htm);
                    document.querySelector('#b4').addEventListener('click',exchange);
                  };
            };
              xhttp.open("POST", "profile", true);
              xhttp.setRequestHeader('Content-Type', 'text/xml');
              xhttp.send('<?xml version="1.0" encoding="UTF-8"?><request>request account information</request>');	
        }else {
            document.getElementById("dep").innerHTML ="";
            
        };
        
    };
    
    
    function exchange(){
    
        var e1 = document.getElementById("list1");
        var accName1 = e1.options[e1.selectedIndex].value;
        var e2 = document.getElementById("list2");
        var accName2 = e2.options[e2.selectedIndex].value;
        var balance = document.getElementById("nbalance").value;
        
        if (accName1 == accName2){ 
            document.getElementById("msg").innerHTML ="Please choose different accounts for transfer";
        }else if ((!balance) || balance <=0){
            document.getElementById("msg").innerHTML ="Please choose a valid amount.";
        }else{
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var xmlDoc = xhttp.responseXML;
                var msg = xmlDoc.getElementsByTagName("success")[0].childNodes[0].nodeValue;	
                 if (msg =="Transfer successfull"){
    
                    document.getElementById("msg").innerHTML =DOMPurify.sanitize(msg);
                    document.getElementById("trans").innerHTML="";
                    update();
                    }else{
                    document.getElementById("msg").innerHTML ='Error. Try again.'
                };
          };};
        
        
    
    
         xhttp.open("POST", "transfer", true);
         xhttp.setRequestHeader('Content-Type', 'text/xml');
        var data = '<?xml version="1.0" encoding="UTF-8"?><transfer><accname1>'+ accName1 + '</accname1><accname2>'+ accName2 + '</accname2><balance>'+ balance + '</balance></transfer>';
          xhttp.send(data);
        };
    };
    window.onload = update();
    
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('#a1').addEventListener('click',addAcc);
        document.querySelector('#a2').addEventListener('click',deposit);
        document.querySelector('#a3').addEventListener('click',withdraw);
        document.querySelector('#a4').addEventListener('click',transfer);
    update();
    });