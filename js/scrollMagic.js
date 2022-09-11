var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready
   // build scene
   var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 930 })
      .setPin("#pin1")
      .addIndicators({ name: "1 (duration: 900)" }) // add indicators (requires plugin)
      .addTo(controller);

   // jQuery(window).on('resize', function () {

   //    const width = jQuery(window).width();

   //    if (width <= 1200) {
   //       //Отключаем сцену если разрешение экрана меньше указанного
   //       controller.enabled(false);
   //    } else {
   //       //Включаем опять, когда возвращаемся в нормальное состояние
   //       controller.enabled(true);
   //    }
   // });

   // if ($(window).width() >= 1200) {
   //    scene.remove(true);
   // }
});