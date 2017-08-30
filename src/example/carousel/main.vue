<template>
    <clsCarousel>
      <clsCarouselItem>1</clsCarouselItem>
      <clsCarouselItem>1</clsCarouselItem>
      <clsCarouselItem>1</clsCarouselItem>
      <clsCarouselItem>1</clsCarouselItem>
    </clsCarousel>
  </template>

<script>
  import clsCarousel from '@/components/carousel'
  import clsCarouselItem from '@/components/carousel-item'
  
  export default {
    name: 'example-carousel',

    components: {clsCarousel, clsCarouselItem}
  }
</script>