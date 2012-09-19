window.partOne = [];
window.partTwo = [];
window.partThree = [];

window.productNames = ["Service", "Sales", "Marketing", "Sharing", "Social", "Collaboration", "Touch", "Car", "Music"];
window.dotCom = ".com";
window.force = "force";
window.productTypes = ["Cloud", "Platform", "Chatter", "Mobile", "Community", "Nimbus", "Cirrus"];

window.createName = function() {
  var productName = window.getProductName();

  var isDotCom = !!Math.floor(Math.random()*2);
  var isForce = Math.random() > 0.75;

  var productType = window.getProductType();

  productName += isForce ? window.force : "";

  if(isDotCom) {
    return productName + window.dotCom;
  }

  return productName + " " + productType;
}

window.getProductName = function() {
  return window.productNames[Math.floor(Math.random()*window.productNames.length)];
}

window.getProductType = function() {
  return window.productTypes[Math.floor(Math.random()*window.productTypes.length)]
}

window.cloudLoop = function() {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  var zoom = Math.random() * 0.1 + 0.3;
  var top = (Math.random() * (windowHeight)) + 100;
  var left = -200/zoom;
  var opacity = (Math.random()/2)+0.25;
  var animTime = Math.random()*10000+20000;
  var timeout = Math.random()*3000;

  var cloud = 
    $("<div class='cloud'>").css({
      zoom : zoom,
      top : top,
      left : left,
      opacity : opacity
    });

  $(".clouds").append(cloud);

  cloud.animate({
      left : (windowWidth)/zoom
    }, 
    animTime,
    function() {
      $(this).remove();
  });

  setTimeout(window.cloudLoop, timeout);
}

$(function(){
  $(".hero-unit .cloud").click(function(){
    $(".cloud-name h1").html(window.createName());
  });

  window.cloudLoop();
});