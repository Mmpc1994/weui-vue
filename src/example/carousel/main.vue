<template>
  <div layout="row">
    <div flex></div>
    <div flex>
      <clsCarousel>
        <clsCarouselItem>1</clsCarouselItem>
        <clsCarouselItem>2</clsCarouselItem>
        <clsCarouselItem>3</clsCarouselItem>
        <clsCarouselItem>5</clsCarouselItem>
        <clsCarouselItem>6</clsCarouselItem>
        <clsCarouselItem>7</clsCarouselItem>
      </clsCarousel>
    </div>
    <div flex></div>
  </div>
    
  </template>

<script>
  import clsCarousel from '@/components/carousel'
  import clsCarouselItem from '@/components/carousel-item'
  
  export default {
    name: 'example-carousel',

    components: {clsCarousel, clsCarouselItem}
  }
</script>