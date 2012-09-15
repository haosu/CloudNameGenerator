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

$(function(){
  $("#nameButton").click(function(){
    $("#nameField").html(window.createName());
  });
});