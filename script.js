function replacemain1() {

    var main1 = window.document.getElementById('main')
    var main2 = window.document.getElementById('text-main')
  
    main2.style.display = "block";
    main1.style.display = "none";
  }
  
  function replacemain2() {
  
    var menu1 = window.document.getElementById('main')
    var menu2 = window.document.getElementById('text-main')
  
    menu1.style.display = "block";
    menu2.style.display = "none";
  
  }
  
  function replacemenu3() {
  
    var menu2 = window.document.getElementById('text-main')
    var menu3 = window.document.getElementById('proj-div')
  
    menu2.style.display = "block"
    menu3.style.display = "none";
  
  }
  
  function replacemenu() {
  
    var menu2 = window.document.getElementById('text-main')
    var menu3 = window.document.getElementById('proj-div')
  
    menu2.style.display = "block";
    menu3.style.display = "none";
  
  }
}