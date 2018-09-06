kiwi.plugin('iframeDemoPlugin', function(kiwi, log) {

  let framesVisible = buttonAdded = false;
  
  if(!buttonAdded){
    buttonAdded = true;
    const iframesDemoTool = document.createElement('i');
    iframesDemoTool.className = 'fa fa-address-card';
    kiwi.addUi('input', iframesDemoTool);
    iframesDemoTool.onclick = function(e){ 
      e.preventDefault();
      if(framesVisible){
        hideFrame();
      }else{
        showFrame();
      }
    }
  }
  
kiwi.emit('mediaviewer.show');
  function iframeize(){
    kiwi.emit('mediaviewer.show', {iframe: true, url: kiwi.state.setting('iframeDemo.url')});
    setTimeout(() => {
      let iframe = document.querySelector('.kiwi-mediaviewer iframe');
      let mediaviewer = document.querySelector('.kiwi-mediaviewer');
      iframe.style.width = '100%';
      mediaviewer.style.height = '45%';
    }, 20);
  }
  
  window.addEventListener("click", function(e){
    if(e.srcElement.className.indexOf("u-button-secondary") !== -1){
      hideFrame();
    }
  });
  
  function showFrame(){
    if(!framesVisible){
      framesVisible = true;
      iframeize();
    }
  }

  function hideFrame(){
    kiwi.emit('mediaviewer.hide');
  }
  
  kiwi.on('mediaviewer.opened', function(){
    mediaViewerOpen = true;
  });
  
  kiwi.on('mediaviewer.hide', function(){
    mediaViewerOpen = false;
    framesVisible = false;
  });
});
