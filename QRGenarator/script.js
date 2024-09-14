const qrInput= document.getElementById('qr-input');
const qrImage = document.getElementById('qr-image');
const qrButton = document.getElementById('qr-button');


qrButton.addEventListener('click',(event)=>{
    //whe click in this button new event will call
    event.preventDefault()
    //heare I store my in put value in side input value variable
const inputValue = qrInput.value
// now I will check the val if input value is not present then  send a alert
if(inputValue===''){
    alert("Please enter a Url")
    console.log("Please enter a valid Url");
    return;
}else if(!CheckValidUrl(inputValue)){
    alert("Please enter a valid Url")
    qrInput.style.borderColor = "red";
} else{ // if value present then generate a qrimage acroding to the input value 
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    //add the value name
    qrImage.alt= `QR code for ${inputValue}`
    qrInput.style.borderColor = "green";
}
qrInput.value= ''
})



function CheckValidUrl(url){
const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,})|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-zA-Z0-9%_.~+]*)*' + // port and path
    '(\\?[;&a-zA-Z0-9%_.~+=-]*)?' + // query string
    '(\\#[-a-zA-Z0-9_]*)?$', 'i'); // fragment locator
    return urlPattern.test(url)
}


