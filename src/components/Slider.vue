<template>
  <div class="slider">
    <div id="left-control" @click="previousImage">
      <svg class="material-icon" viewBox="0 0 24 24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/></svg>
    </div>
    <div id="right-control" @click="nextImage">
      <svg class="material-icon" viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/></svg>
    </div>
    
    <span v-for="(image, index) in images" :key="index">
      <div v-if="index == currentImage" class="title fade-in">{{ image.title }}</div>
      <div v-if="index == currentImage" class="subtitle">{{ image.subtitle  }}</div>
      <div class="dark-filter"></div>
      <img 
        class="slider-img fade-in"
        :src="image.src">
    </span>

  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentImage: 0,
      imageSelector: [],
    }
  },
  methods: {
    previousImage() {
      if(this.currentImage == 0)  this.modifyImage(this.imageSelector.length - 1)
      else this.modifyImage(this.currentImage - 1)
    },
    nextImage() {
      this.modifyImage((this.currentImage + 1) % this.imageSelector.length)
    },
    modifyImage(nextImage) {
      let self = this

      Object.assign(self.imageSelector[this.currentImage].style, {
        'z-index': '0'
      })

      Object.assign(this.imageSelector[nextImage].style, {
        'z-index': '1',
        'display': 'inline-block'
      })  

      setTimeout(function(){
        Object.assign(self.imageSelector[self.currentImage].style, {
          'display': 'none'
        })

       self.currentImage = nextImage
      }, 500)
    }
  },
  mounted() {
    this.imageSelector = document.getElementsByClassName("slider-img")
    Object.assign(this.imageSelector[this.currentImage].style, {
      'display': 'inline-block'
    })
    
  }
}
</script>

<style lang="sass">
@import '../stylesheets/style.sass'

.slider
  height: 600px
  position: relative
  background: white
  user-select: none

  #left-control, #right-control
    height: 80px
    position: absolute
    top: 50%
    transform: translateY(-50%)
    cursor: pointer
    z-index: 3

    svg
      height: 100%
      fill: white
      filter: drop-shadow(0 2px 2px rgba(black, .2))
      transition: .2s

      &:hover
        transform: scale(1.1)
        filter: drop-shadow(0 2px 2px rgba(black, .3))

  #left-control
    left: 2%

  #right-control
    right: 2%

  img
    position: absolute
    display: none
    object-fit: cover
    width: 100%
    height: 100%

  .fade-in
    animation: fadeIn 500ms forwards

  .title, .subtitle
    z-index: 3
    position: absolute
    left: 50%
    transform: translateX(-50%)
    color: white
    text-transform: uppercase
    white-space: nowrap
  
  .title
    top: 40%
    font-size: 56px
    font-weight: 700
    animation: slideIn_title 800ms forwards

  .subtitle
    top: 50%
    font-size: 36px
    font-weight: 300
    animation: slideIn_subtitle 800ms forwards

  .dark-filter
    position: absolute
    width: 100%
    height: 100%
    background: rgba(black, .2)
    z-index: 2


@keyframes slideIn_title
  from
    top: 70%
    opacity: 0

  to
    top: 40%
    opacity: 1

@keyframes slideIn_subtitle
  from
    top: 90%
    opacity: 0

  to
    top: 51%
    opacity: 1

@media (max-width: 515px)
  .slider
    .title
      font-size: 40px

    .subtitle
      font-size: 28px

</style>
