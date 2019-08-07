
class Info{
   
    constructor(title,name,message){
     this.title=title;
     this.name=name;
     this.message=message;
    }

    static getValue(){
        const title=document.getElementById('title').value;
        const name=document.getElementById('name').value;
        const message=document.getElementById('message').value;

        return {
            title,
            name,
            message
        }
    }

    static clearcContent(){
        document.getElementById('title').value="";
        document.getElementById('name').value="";
        document.getElementById('message').value="";

    }

    static deleteContent(){
    const close=document.getElementById('close');
    close.parentElement.remove();
    }

    static messageAlert(alert,message){
        const alertDanger=document.createElement('div');
        alertDanger.setAttribute('id',`${alert}`);

        const alertMessage=document.createTextNode(`${message}`);
        alertDanger.appendChild(alertMessage);


        const headerContent=document.getElementById('headerContent');
        const container=headerContent.parentElement;
        container.insertBefore(alertDanger,headerContent);


    }
}

const button=document.getElementById('button');

button.addEventListener('click',(e)=>{
    e.preventDefault();

    addContent.createContent();
    Info.clearcContent();
   
    
    
});



class addContent{

    static createContent(){
        const val=Info.getValue();

        if(val.title==="" || val.name==="" || val.message===""){
       
        Info.messageAlert('danger','field is empty')
        
        setTimeout(()=>{
            document.getElementById('danger').remove();
        },3000);


        }
        else{
            const div=document.createElement('div');
            
                    div.setAttribute('class','container');
            
                    const close=document.createElement('button');
                    close.setAttribute('id','close');
                    const single=document.createTextNode('X');
                    close.appendChild(single);
            
                    const spanTitle=document.createElement('span');
                    const contentTitle=document.createTextNode(val.title);
                    spanTitle.appendChild(contentTitle);
            
            
                    const spanName=document.createElement('span');
                    const contentName=document.createTextNode(val.name);
            
                    spanName.appendChild(contentName);
                   
            
                    const spanMessage=document.createElement('span');
                    const contentMessage=document.createTextNode(val.message);
                    spanMessage.appendChild(contentMessage);
                    
                    
                    div.appendChild(spanTitle);
                    div.appendChild(spanName);
                    div.appendChild(spanMessage);
                    div.appendChild(close);
            
                    close.addEventListener('click',()=>{
                        Info.deleteContent();
                        Info.messageAlert('success','element is deleted succefully')
                        
                        setTimeout(()=>{
                            document.getElementById('success').remove();
                        },3000);
                
                
                    });
            
                    const bigContainer=document.getElementById('valueInput');
                    bigContainer.appendChild(div);

                    Info.messageAlert('success','success element is added');

                    setTimeout(()=>{
                        document.getElementById('success').remove();
                    },3000);
            
            
        }
      
    }


}






