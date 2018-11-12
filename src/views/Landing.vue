<template>
	<div class="wrapper">
		<div class="menu-desk">
			<div class="logo">
				<img src="../assets/ui/logo-desktop.svg" alt="">
			</div>
			<div class="menu-wrapper">
				<ul>
					<li><a href="">Inicio</a></li>
					<li><a href="">Quiénes somos</a></li>
					<li><a href="">Nuestros productos</a></li>
					<li><a href="">Catálogo</a></li>
					<li><a href="">Contacto</a></li>
					<input type="text" class="search-bar" placeholder="Buscar producto">
				</ul>
			</div>
		</div>

		<div class="menu-mobile">
			<div class="logo">
				<img src="../assets/ui/logo-desktop.svg" alt="">
			</div>
			<div class="menu-wrapper">
        <div class="burguer">
          <div class="b1"></div>
          <div class="b2"></div>
          <div class="b3"></div>
        </div>
			</div>
		</div>
		<div class="menu-spacer"></div>

		<slider
		:images="images"></slider>

		<div class="welcome">
			<div class="welcome-title">BIEVENIDO A YADAS</div>
			<div class="welcome-message">
				Somos una empresa ubicada en la ciudad de Bogotá, lider en la comercialización y distribución de repuestos automotores, con una amplia trayectoria en el mercado y cubrimiento nacional. Trabajamos con las marcas de la más alta calidad para garantizar la confianza de nuestros clientes.
			</div>
		</div>

		<div class="brands">
			<div class="brand-title">Nuestras marcas</div>
			<div class="brands-gallery">
				<div class="brand-item">Item 1</div>
				<div class="brand-item">Item 2</div>
				<div class="brand-item">Item 3</div>
				<div class="brand-item">Item 4</div>
				<div class="brand-item">Item 5</div>
				<div class="brand-item">Item 6</div>
				<div class="brand-item">Item 7</div>
				<div class="brand-item">Item 8</div>
				<div class="brand-item">Item 9</div>
				<div class="brand-item">Item 10</div>
			</div>
		</div>

		<div class="footer">
			<div class="footer-item" data-space="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente suscipit vero quidem consectetur officia!</div>
			<div class="footer-item" data-space="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente suscipit vero quidem consectetur officia!</div>
			<div class="footer-item" data-space="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente suscipit vero quidem consectetur officia!</div>
			<div class="footer-item" data-space="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente suscipit vero quidem consectetur officia!</div>
			<div class="footer-item" data-space="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente suscipit vero quidem consectetur officia!</div>
			<div class="footer-map" data-space="">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magnam?
			</div>
			<div class="copyright">
				Yadas WT importaciones | 2018 All Rights Reserved.
			</div>
		</div>

	</div>
</template>

<script>
import Slider from '../components/Slider.vue'

export default {
	data() {
		return {
			images: [
				{src: '../../static/assets/landscape.jpeg', title: 'Landscape 1', subtitle: 'awesome'},
				{src: '../../static/assets/landscape2.jpg', title: 'Landscape 2', subtitle: 'awesome'},
				{src: '../../static/assets/landscape3.jpeg', title: 'Landscape 3', subtitle: ''}
			]
		}
	},
	components: {
		Slider
	}
}
</script>

<style lang="sass">
@import '../stylesheets/_variables.sass'
.menu-spacer
	height: 100px

.menu-desk, .menu-mobile
	z-index: 10
	position: fixed
	box-sizing: border-box
	width: 100%
	height: 100px
	background: white
	display: flex
	justify-content: space-between
	align-items: center
	padding: 0 30px
	border-bottom: 1px solid darken(white, 10%)
	box-shadow: 0 2px 3px rgba(black, .2)

	.logo
		width: 100px

		img
			object-fit: contain
			width: 100%
			height: 100%

	.menu-wrapper
		display: flex
		align-items: center
		justify-content: center

		> ul
			padding: 0

		> ul > li
			list-style: none
			display: inline-block
			text-transform: uppercase
			letter-spacing: 1px
			font-size: 14px

			&:not(:first-child)
				margin: 0 10px
			a
				text-decoration: none
				color: black

				&:hover
					color: $darkRed

		input.search-bar
			border-radius: 5px
			border: 1px solid black
			padding: 10px 7px
			max-width: 200px
			min-width: 150px
			text-align: center
			color: darken($darkGrey, 30%)
			font-size: 14px

			&::placeholder
				color: $darkGrey
				font-size: 14px
				text-transform: uppercase
				font-weight: 300
				letter-spacing: 1px

			&:focus, &:hover
				outline: 0	

.welcome
	padding: 50px
	display: flex
	justify-content: center

	.welcome-title
		font-family: $font-oswald
		color: $darkRed
		font-size: 28px
		max-width: 125px

	.welcome-message
		max-width: 500px
		text-align: justify
		margin: 0 15px
		font-weight: 300

.brands
	padding: 30px 
	background: black

	.brand-title
		position: relative
		color: white
		font-family: $font-oswald
		font-size: 22px
		text-transform: uppercase
		letter-spacing: 3px
		width: 33%
		padding: 0 15px
		margin: 0 auto
		text-align: center

		&:after, &:before
			content: ''
			width: 80% 
			position: absolute
			top: 50%
			height: 1px
			background: white

		&:after
			left: -80%

		&:before
			right: -80%

	.brands-gallery
		display: flex
		justify-content: center	
		flex-wrap: wrap
		margin: 25px auto
		max-width: 1100px

		.brand-item
			width: 200px
			height: 200px
			margin: 10px
			background: white

$distanceBurguer: 6px
.burguer
  position: relative
  width: 30px
  height: 60px

  .b1, .b2, .b3
    display: inline-block
    left: 0
    position: absolute
    width: 20px
    height: 2.5px
    background: black

  .b1
    top: calc(0 * #{$distanceBurguer})
  .b2
    top: calc(1 * #{$distanceBurguer})
  .b3
    top: calc(2 * #{$distanceBurguer})

.footer
	background: #3d3d3d
	padding: 30px
	display: flex
	flex-wrap: wrap
	justify-content: center
	color: white

	> div[data-space=""]
		margin: 10px 0
		padding: 10px

	.footer-item
		width: 200px

	.footer-map
		max-width: 350px
		height: 100px
		background: cyan

	.copyright
		width: 100%
		text-align: center

.menu-mobile
  display: none

@media (max-width: 800px)
  .menu-desk
    display: none

  .menu-mobile
    display: flex

</style>
