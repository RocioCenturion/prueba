document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelector('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration:150,//controlas el tiempo para, q sea mas lento//
    dist:-80,//si lo pongo en 100 cdo ña imagen se va parece q se agranda, si lo pongo en 80 se ve las omagen como si estuvieran atras
    shift:5,
    padding:5,
    numVsible:3,//ctas imagenes quiero visible
    indicators:true,//hace q aparezcan los 3 ptos de abajo
    nowrap:false,//para q comiense con la primer imagen o no
  });
});
