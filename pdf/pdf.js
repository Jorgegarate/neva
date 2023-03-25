const btn = document.querySelector(".btn")

btn.addEventListener('click', () => {
    var element = document.getElementById('element-to-print');
var opt = {
  margin:       0,
  filename:     'Informe-Neva.pdf',
  image:        { type: 'jpeg', quality: 2 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};
 
// New Promise-based usage:
html2pdf().from(element).set(opt).save();
 
// Old monolithic-style usage:
html2pdf(element, opt);

  });




