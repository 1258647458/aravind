function loadjson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null)
}
loadjson("data.json",function(text)
{
var data=JSON.parse(text);
console.log(data);
basic(data.details);
careerinfo(data.career);
education(data.education);
skills(data.skills);


})

var child1=document.querySelector(".childone")
function basic(det){

  var image=document.createElement("img")
  image.src= det.image;
  child1.appendChild(image);
  var name=document.createElement("h4")
  name.textContent=det.name;
  child1.appendChild(name);
  var phone=document.createElement("h4");
  phone.textContent=det.phoneno;
  child1.appendChild(phone);

  var email=document.createElement("a")
  email.href="vinay fght@gmail.com";
  email.textContent =det.email;
  child1.appendChild(email);

  var add=document.createElement("h4")
  add.textContent="Address"
  child1.appendChild(add);
  var hr = document.createElement(hr);
   child1.appendChild(hr);

  var p=document.createElement("p");
  p.textContent=det.Address;
  child1.appendChild(p);

}
var child2=document.querySelector(".childtwo");
function careerinfo(info){
  var heading =  document.createElement("h2");
  heading.textContent="career objective:"
  child2.appendChild(heading);

  var hr = document.createElement("hr");
   child2.appendChild(hr);

var c = document.createElement("p");
c.textContent = info.info;
child2.appendChild(c);


}
function education(edu){
  var hd=document.createElement("h4")
  hd.textContent="Educational Qualification"
  child2.appendChild(hd);
  var hr = document.createElement("hr");
   child2.appendChild(hr);

  var table1=document.createElement("table")
  table1.border="1"
  child2.appendChild(table1);

  tabledata="";
  for(i=0;i<edu.length;i++){
    tabledata+="</td><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].parcentage+"</td></tr>";
  }
  table1.innerHTML=tabledata;
  }

function skills(skillinfo){

  var hd=document.createElement("h2");
  hd.textContent="Technicalskills"
  child2.appendChild(hd);

  for(i=0;i<skillinfo.length;i++){
    var tittle=document.createElement("h4")
    tittle.textContent=skillinfo[i].tittle;
    child2.appendChild(tittle);

    var ul=document.createElement("ul");
    var li=document.createElement("li");
    li.textContent=skillinfo[i].info;
    ul.appendChild(li);
    child2.appendChild(ul);
  }

}
