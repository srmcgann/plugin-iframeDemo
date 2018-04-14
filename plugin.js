kiwi.plugin('iframeDemoPlugin', function(kiwi, log) {

  let framesVisible = buttonAdded = false;
  
  //kiwi.on('irc.raw', function(command, event){
    if(!buttonAdded){
      //alert(kiwi.state.setting('iframeDemo.url'));
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
  //});
  
  function iframeize(){
    kiwi.emit('mediaviewer.show', kiwi.state.setting('iframeDemo.url'), true);
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