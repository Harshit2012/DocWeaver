document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('txtFile');
    const file = fileInput.files[0];
    
    if (file && file.type === 'text/plain') {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const text = event.target.result;
            const docDefinition = {
                content: text
            };
            
            pdfMake.createPdf(docDefinition).download('converted.pdf');
        };
        
        reader.readAsText(file);
    } else {
        alert('Please select a valid TXT file.');
    }
});