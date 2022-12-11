  $(function() {  
    $("#generate").click(function() {
            var div = document.getElementById('qr-image');   
            var input_text = document.getElementById('qr_input').value;  
            if(input_text != null && input_text != '' && input_text.length != 0)
            {
                while (div.hasChildNodes()) {
                    div.removeChild(div.firstChild);
                }
                var svgNode = new QRCode({
                    msg : input_text,
                    pal : [ '#2c7dfa', '#fff' ]
                }).svg(); 
                div.appendChild(svgNode);  
                var element = $("#qr-image")[0];
                html2canvas(element).then(function (canvas) {
                    var myImage = canvas.toDataURL();
                    downloadURI(myImage, "cartao-virtual.png");
                });
            }
            else
            {
                alert("Enter Text First !!!");
            }
    }); 
    function downloadURI(uri, name) {
        var link = document.createElement("a"); 
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
    }
  });