const path = require("path");
// const panel = require("../panel");

const admin = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/admin.html`));
};

module.exports = {
  getAdmin: admin
};

// localStorage.setItem('all_users',JSON.stringify(a));

// a=JSON.parse((localStorage.getItem("all_users")));a.push({name: username, password: password});localStorage.setItem('name',JSON.stringify(a));for(var i=0; i<a.length; i++)
//   {
//    var li = document.createElement("li");
//    li.innerHTML=a[i]['name'];
//    document.getElementById("listuser").appendChild(li);
//   }



