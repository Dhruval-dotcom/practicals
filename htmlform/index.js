function dst(st,msg,elem){
    elem.focus();
    document.getElementById(st).innerHTML=msg;
    document.getElementById(st).style.display="block";
}
function validateno(elem,len,str_el,reqno){
    //debit,12,str_el
    low=Math.pow(10,len-1);
    high=Math.pow(10,len)-1;
    if(/^[0-9]+$/.test(elem.value)==false){
        dst(reqno,str_el+' no. should be digits',elem);
        return false;
    }else{
        dn=parseInt(elem.value);
        if(dn<low || dn >high){
            if(dn<low){
                x=12-elem.value.length;
                dst(reqno,x.toString()+' digits remaining',elem);
                return false;
            }else if(dn >high){
                dst(reqno,'Exceeded length.Enter valid 12 digit number',elem);
                return false;
            }
        }else{
            localStorage.setItem(elem, elem.value);
        }
    }
}
function fun() {
    var req3=document.getElementById("req3");
    namew = document.getElementById('name');
    if(namew.value==""){
        dst('req3',"Enter name",namew);
        return false;
    }else{
        var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        
        if(!regName.test(namew.value)){
            dst('req3',"Enter valid name in &lt;name&gt; &lt;surname&gt; format with no digits",namew);
            return false;
        }else{
            localStorage.setItem("name", namew.value);
        }
    }
    if((document.getElementById('male').checked)==false && (document.getElementById('female').checked)==false){
        dst('req4','Select Gender',document.getElementById('male'));
        return false;
    }else{
        gender= (document.getElementById('male').checked) ? "Male" : "Female";
        localStorage.setItem("gender", gender);
    }
    
    dob = document.getElementById('dob');
    if(dob.value!=""){
        dobval=dob.value.substring(0,4);
        if(dobval>2004){
            dst('req9','You are younger than 18 years',dob);
            return false;
        }else if(dobval<=1923){
            dst('req9','This year not allowed',dob);
            return false;
        }
    }
    else{
        localStorage.setItem("dob",dob.value);
    }

    office =document.getElementById('office');
    if(office.value==""){
        dst('req5','please enter office address',office);
        return false;
    }else{
        localStorage.setItem("office", office.value);
    }

    residence = document.getElementById('residence');
    if(residence.value==""){
        dst('req6','please enter residence address',residence)
        return false;
    }else{
        localStorage.setItem("residence", residence.value);
    }
    var regName = /^[a-zA-Z]+$/;
    postal=document.getElementById('postal');
    if(postal.value==""){
        dst('req7','Enter Postal',postal);
        return false;
    }else{
        if(/^[0-9]+$/.test(postal.value)==false){
            dst('req7','Enter Postal number only in digit',postal);
            return false;
        }else{
            pn=parseInt(postal.value);
            if(pn<100000 || pn >999999){
                if(pn<100000){
                    x=6-postal.value.length;
                    dst('req7',x.toString()+' digits remaining',postal);
                    return false;
                }else if(pn >999999){
                    dst('req7','Exceeded length.Enter valid 6 digit postal',postal);
                    return false;
                }      
            }else{
                localStorage.setItem("postal",postal.value);
            }
        } 
    }
   

    mobile = document.getElementById('mobile');
    if(mobile.value==""){
        dst('req8','Enter mobile',mobile);
        return false;
    }else{  
        if(/^[0-9]+$/.test(mobile.value)==false){
            dst('req8','Enter mobile number only in digit',mobile);
            return false;
        }else{
            mn=parseInt(mobile.value);
            if(mn<1000000000 || mn >9999999999){
                if(mn<1000000000){
                    x=10-mobile.value.length;
                    dst('req8',x.toString()+' digits remaining',mobile);
                    return false;
                }else if(mn >9999999999){
                    dst('req8','Exceeded length.Enter valid 10 digit number',mobile);
                    return false;
                }      
            }else{
                localStorage.setItem("mobile", mobile.value);
            }
        }
    }
    

    telephone = document.getElementById('telephone');
    if(telephone.value!=""){
        if(/^[0-9]+$/.test(telephone.value)==false){
            dst('req10','Enter telephone number only in digit',telephone);
            return false;
        }else{
            tn=parseInt(telephone.value);
            if(tn<100000 || tn >9999999999){
                dst('req10','Minimum 6 and max 10 digits allowed',telephone);
                return false;
            }else{
                localStorage.setItem("telephone", telephone.value);
            }
        }
    }
    

    email = document.getElementById('email');
    if(email.value==""){
        dst('req11','Please Enter email',email);
        return false;
    }else{
        var emailreg=/^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
        //var emailreg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailreg.test(email.value)){
            dst('req11','Please enter valid email',email);
            return false;
        }else{
            localStorage.setItem("email", email.value);
        }
    }

    count=(document.getElementById("php").checked==true?"1":"") + (document.getElementById("golang").checked==true?"1":"")+(document.getElementById("python").checked==true?"1":"") + (document.getElementById("nodejs").checked==true?"1":"") +(document.getElementById("react").checked==true?"1":"");
    if(count<=2){
        dst('req12','Please select atleast 2 domain of interest',document.getElementById("golang"));
        return false;
    }else{
        depts=(document.getElementById("php").checked==true?"1":"") + (document.getElementById("golang").checked==true?"2":"")+(document.getElementById("python").checked==true?"3":"") + (document.getElementById("nodejs").checked==true?"4":"") +(document.getElementById("react").checked==true?"5":"");
        localStorage.setItem("dept",depts);
    }

    
    deptc=document.getElementById("deptc").value;
    localStorage.setItem("deptc",deptc);

    col=document.getElementById('color').value;
    localStorage.setItem("col",col);

    ran=document.getElementById('ran').value;
    localStorage.setItem("ran",ran);

    fil=document.getElementById('fil').value;
    localStorage.setItem("fil",fil);

    blood_group = document.getElementById('blood-group');
    if(blood_group.value=="-1"){
        dst('req15','select correct bloog group',blood_group);
        return false;
    }else{
        localStorage.setItem("blood-group", blood_group.value);
    }

    aadhar = document.getElementById('aadhar');
    if(aadhar.value==""){
        dst('req14','Enter aadhar no',aadhar);
        return false;
    }else{
        if(/^[0-9]+$/.test(aadhar.value)==false){
            dst('req14','Enter mobile number only in digit',aadhar);
            return false;
        }else{
            an=parseInt(aadhar.value);
            if(an<100000000000 || an >999999999999){
                if(an<100000000000){
                    x=12-aadhar.value.length;
                    dst('req14',x.toString()+' digits remaining',aadhar);
                    return false;
                }else if(an >999999999999){
                    dst('req14','Exceeded length.Enter valid 12 digit number',aadhar);
                    return false;
                }      
            }else{
                localStorage.setItem("aadhar",aadhar.value);
            }
        }
    }
    
    vehicle_no = document.getElementById('vehicle-no');
    var regv=/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;
    if(vehicle_no.value!=""){
        if((!regv.test(vehicle_no.value))){
            dst('req16','Enter valid vehicle number in GJ07NF9999 format',vehicle_no);
            return false;
        }
    }
    else{
        localStorage.setItem('vehicle_no',vehicle_no.value);
    }

    bank_acc = document.getElementById('bank-acc');
    if(bank_acc.value==""){
        dst('req17','Enter bank name',bank_acc);
        return false;
    }
    else{
        localStorage.setItem("bank-acc", bank_acc.value);
    }

    debit = document.getElementById('debit');
    if(debit.value!=""){
        if(/^[0-9]+$/.test(debit.value)==false){
            dst('req18','Debit card no. should be digits',debit);
            return false;
        }else{
            dn=parseInt(debit.value);
            if(dn<100000000000 || dn >999999999999){
                if(dn<100000000000){
                    x=12-debit.value.length;
                    dst('req18',x.toString()+' digits remaining',debit);
                    return false;
                }else if(dn >999999999999){
                    dst('req18','Exceeded length.Enter valid 12 digit number',debit);
                    return false;
                }
            }else{
                localStorage.setItem("debit", debit.value);
            }
        }
    }
    
    passport_no = document.getElementById('passport-no');
    if(passport_no.value!=""){
        if(/^[0-9]+$/.test(passport_no.value)==false){
            dst('req19','passport no. should be digits',passport_no);
            return false;
        }else{
            dn=parseInt(passport_no.value);
            if(dn<100000000 || dn >999999999){
                if(dn<100000000){
                    x=9-passport_no.value.length;
                    dst('req19',x.toString()+' digits remaining',passport_no);
                    return false;
                }else if(dn >999999999){
                    dst('req19','Exceeded length.Enter valid 12 digit number',passport_no);
                    return false;
                }
            }else{
                localStorage.setItem("passport-no", passport_no.value);
            }
        }
    }

    vehicle=document.getElementById('vehicle');
    if(vehicle.value=="-1"){
        dst('req13','Please select vehicle type',vehicle);
        return false;
    }else{
        localStorage.setItem('vehicle',vehicle.value);
    }

    gstin = document.getElementById('gstin');
    var regdl=/^[A_Za-z0-9]{15}$/;
    if(gstin.value!=""){
        if((!regdl.test(gstin.value))){
            x=15-gstin.value.length;
            if(x<0){
                dst('req20','length exceeded max 15 allowed',gstin);
            }else{
                dst('req20',x.toString()+ ' more character needed (max 15)',gstin);
            }
            return false;
        }else{
            localStorage.setItem("gstin", gstin.value);
        }
    }
    
    dl = document.getElementById('dl');
    var regdl=/^[A_Za-z0-9]{15}$/;
    if(dl.value!=""){
        if((!regdl.test(dl.value))){
            x=15-dl.value.length;
            if(x<0){
                dst('req21','length exceeded max 15 allowed',dl);
            }else{
                dst('req21',x.toString()+ ' more character needed (max 15)',dl);
            }
            return false;
        }
    }
    else{
        localStorage.setItem("dl", dl.value);
    }

    acc = document.getElementById('account');
    var accreg=/^[0-9]{8,14}$/;
    if(acc.value==""){
        dst('req22','please Enter Acc number',acc);
        return false;
    }else{
        accreg2=/^[0-9]+$/;
        if(!accreg2.test(acc.value)){
            dst('req22','account number should be in digit',acc);
            return false;
        }else{
            if(!accreg.test(acc.value)){
                dst('req22','account number should be of length 8 to 14',acc);
                return false;
            }else{
                localStorage.setItem("account", acc.value);
            }
        } 
    }
    

    credit = document.getElementById('credit');
    var credreg=/^[0-9]{12}$/;
    if(credit.value!=""){
        if(!credreg.test(credit.value)){
            dst('req23','credit number should be 12 digit long',credit);
            return false;
        }
    }
    else{
        localStorage.setItem("credit", credit.value);
    }

    pan = document.getElementById('pan');
    var panreg=/^[0-9]{10}$/;
    if(pan.value!=""){
        if(!panreg.test(pan.value)){
            dst('req24','PAN no should be 10 digit long should be only digit',pan);
            return false;
        }
    }
    else{
        localStorage.setItem("pan", pan.value);
    }

    namew_relative = document.getElementById('name-relative').value;
    localStorage.setItem("name-relative", namew_relative);

    mobile_relative = document.getElementById('mobile-relative');
    if(mobile_relative.value){
        if(/^[0-9]+$/.test(mobile_relative.value)==false){
            dst('req25','Enter mobile number only in digit',mobile_relative);
            return false;
        }else{
            mn=parseInt(mobile_relative.value);
            if(mn<1000000000 || mn >9999999999){
                if(mn<1000000000){
                    x=10- mobile_relative.value.length;
                    dst('req25',x.toString()+' digits remaining', mobile_relative);
                    return false;
                }else if(mn >9999999999){
                    dst('req25','Exceeded length.Enter valid 10 digit number', mobile_relative);
                    return false;
                }      
            }else{
                localStorage.setItem("mobile", mobile_relative.value);
            }
        }
    }
    
    telephone_relative = document.getElementById('telephone-relative');
    if(telephone_relative.value!=""){
        if(/^[0-9]+$/.test(telephone_relative.value)==false){
            dst('req26','Enter telephone number only in digit',telephone_relative);
            return false;
        }else{
            tn=parseInt(telephone_relative.value);  
            if(tn<100000 || tn >9999999999){
                dst('req26','Minimum 6 and max 10 digits allowed',telephone_relative);
                return false;
            }else{
                localStorage.setItem("telephone", telephone_relative.value);
            }
        }
    }
    

    relation_relative = document.getElementById('relation-relative').value;
    localStorage.setItem("relation-relative", relation_relative);

     if(namew==namew_relative && mobile==mobile_relative){
        if(confirm("You entered same data of yours and relatives you want to move ahead ??then press Ok to go ahead")){

        }
    }
}

function reqfun(idelem){
    document.getElementById(idelem).style.display="none";
}

function funchange(){
    document.getElementById("ranval").innerHTML=document.getElementById('ran').value;
}