fetch("https://randomuser.me/api/?gender=female")
.then(data=>{
    return data.json();
}).then(data=>{
    console.log(data);
    createCard(data.message);
    
})

function createCard(students){
    let employee=document.querySelector(".card");

    for(let obj in students){
        
            let div=document.createElement("div");
            div.classList.add('card');   
        
            let imagine=document.createElement("img");
           
            imagine.classList.add('image');
            imagine.src=obj.picture.medium;
        
            div.appendChild(imagine);
        
            let name=document.createElement("h1");
            name.classList.add('name');
            name.textContent=obj.name.first+" "+obj.name.last;
        
            div.appendChild(name);
        
            let email=document.createElement("p");
            email.classList.add('email');
            email.textContent=obj.email;
        
            div.appendChild(email);
        
            let data=document.createElement("footer");
            data.classList.add('data');
            data.textContent=obj.registered.date;
        
           
            div.appendChild(data);
            
            let div4=document.createElement('div');
            div.classList.add('delete-container')
        
            let divDelUp=document.createElement('div');
            divDelUp.classList.add('delUp');
        
            let btnDelete=document.createElement("button");
            btnDelete.classList.add("delete");
         
            btnDelete.textContent="Delete";
        
            divDelUp.appendChild(btnDelete);
        
            let btnUpdate=document.createElement("button");
            btnUpdate.classList.add("update");
        
            btnUpdate.textContent="Update";
        
            divDelUp.appendChild(btnUpdate);
        
            div.appendChild(divDelUp)
            
        
        
        
            
        
            div.appendChild(div4);
        
            return div;
        

    }
    let student=document.querySelector(".card")
    student.addEventListener("change",(e)=>{
        console.log(student.value);

        fetch(`https://${student.value}/api/`)
        .then (data=>{
            return data.json();
        })

        then(data=>{
            let image=document.querySelector("#avatar");
            image.src=data.message;
        })
    })

}
