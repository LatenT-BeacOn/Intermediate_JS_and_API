function checkAge(){
    // console.log('btn-clicked');

    const ageField=document.getElementById('age');
    const ageText=ageField.value;

    const er=document.getElementById('error');
    //console.log(ageText);
  //  console.log(ajhkaa);
   
    try{
            // console.log(ajhkaa);

            const age=parseInt(ageText);
            if(isNaN(age)){
               // console.log('age not found',age,ageText);
                throw "please enter number";
            }

            else if(age<21){
                //console.log('Not allowed');
                     throw "Not allowed";
            }
            er.innerHTML='';
    }
    catch(err)
    {
        console.log('Error :',err);
        er.innerHTML='something Wrong '+ err;
        
    }

    finally{
        console.log('All Done');
    }

     console.log(1111111111111);

}
