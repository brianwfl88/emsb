<template>
	<!-- Page Content -->
	<main>
		<!-- Animated Slider -->
		<AnimatedSlider />

		<!-- Brief Intro Section -->
		 <section id="intro" class="intro-section container">
			<div class="intro-container">
				<h1>Welcome to Electrical Marketing Sdn Bhd (EMSB)</h1>
				<h2>Your Partner for Power, Control and Industrial Automation Products and Services</h2>
				<p>
					Electrical Marketing Sdn Bhd is authorized distributor for ComatReleco, Pizzato ,Mitsubishi, Watanabe Electric, Comarkud, Tattile, Amphenol, Circutor, Power Electronics products and specialized in power distribution, power monitoring, MCC , Industrial Control Automation, System Integration (FA / PA) and Factory Safety Solutions
				</p>
			</div>
		</section>

		<div class="section-separator"></div>

		<!-- Brief Intro Section -->
		 <section id="intro" class="intro-section container">
			<div class="intro-container">
				<!-- <h1>Our Services</h1> -->
				<!-- <p>
					Electrical Trading, Application Sales, Control & Process Components’ Supplies and Factory Automation/System supply/Power Distribution/Monitoring/Control Panel supply and install.
				</p>
				<p>
					PLC Troubleshooting and project :Omron , Siemens, Schneider electric, Mitsubishi , Panasonic, Keyence and AB
				</p> -->
				<p>Preventive maintenance services</p>
				<p>Electrical Trading</p>
				<p>Detection</p>
				<p>Preventive</p>
				<p>Safety</p>
				<p>Control & Automation</p>
				<p>Power</p>
			</div>
		</section>

		<div class="section-separator"></div>

		<section id="grid" class="grid-section container">
			<h1>Our Partners</h1>
			<div class="grid-container" style="--grid-img-aspect-ratio: auto;">
				<div class="grid-item">
					<a href="https://lightstar.co.kr/" target="_blank">
						<img src="@/public/images/lightstar.png" alt="Lightstar" />
					</a>
				</div>
				<div class="grid-item">
					<a href="https://www.pizzato.com/en/" target="_blank">
						<img src="@/public/images/pizzato.svg" alt="Pizzato" />	
					</a>
				</div>
				<div class="grid-item">
					<a href="https://www.comatreleco.com/" target="_blank">
						<img src="@/public/images/comatreleco.jpg" alt="ComatReleco" />
					</a>
				</div>
			</div>
		</section>

		<div class="section-separator"></div>

		 <!-- Grid View Section -->
		<section id="grid" class="grid-section container">
			<div class="grid-container">
				<div class="grid-item">
					<img src="@/public/images/position-switch.jpg" alt="Position Switch" />
					<a href="#">Position Switch</a>
				</div>
				<div class="grid-item">
					<img src="@/public/images/safety-devices.jpg" alt="Safety Devices" />
					<a href="#">Safety Devices</a>
				</div>
				<div class="grid-item">
					<img src="@/public/images/plcs-safety-modules.jpg" alt="PLCs & Safety Modules" />
					<a href="#">PLCs & Safety Modules</a>
				</div>
				<div class="grid-item">
					<img src="@/public/images/human-machine-interface.jpg" alt="Human-machine Interface" />
					<a href="#">Human-machine Interface</a>
				</div>
				<div class="grid-item">
					<img src="@/public/images/lift-devices.jpg" alt="Lift Devices" />
					<a href="#">Lift Devices</a>
				</div>
				<div class="grid-item">
					<img src="@/public/images/accessories.jpg" alt="Accessories" />
					<a href="#">Accessories</a>
				</div>
				<div class="grid-item">
					<img src="@/public/images/transformer.gif" alt="Transformer" />
					<a href="https://lightstar.co.kr/?param=product03" target="_blank">Transformer</a>
				</div>
				<div class="grid-item">
					<img src="@/public/images/digitalmeter.gif" alt="Digital Meter" />
					<NuxtLink to="/digital-meter">Digital Meter</NuxtLink>
				</div>
				<div class="grid-item">
					<img src="@/public/images/digitalmeter.png" alt="Power Meter" />
					<a href="https://lightstar.co.kr/?param=product02_view&key_code=20230113d4l7ui" target="_blank">Power Meter</a>
				</div>
				<div class="grid-item">
					<img src="@/public/images/analogmeter.png" alt="Analogue Meter" />
					<NuxtLink to="/analog-meter">Analogue Meter</NuxtLink>
				</div>
				<div class="grid-item">
					<img src="@/public/images/portable-power-quality-meter.jpg" alt="Portable Power Quality Meter" />
					<a href="https://lightstar.co.kr/?param=product06_view&key_code=202301139FOeTt" target="_blank">Portable Power Quality Meter</a>
				</div>
				<div class="grid-item">
					<img src="@/public/images/machine-guard.webp" alt="Machine Guard" />
					<NuxtLink to="/machine-guard">Machine Guards</NuxtLink>
				</div>
			</div>
		</section>

		<!-- Contact Us Section -->
		<section id="contact" class="contact-section container">
			<div class="contact-container">
				<h2>Contact Us</h2>
				<div class="contact-item">
					<i class="fas fa-map-marker-alt"></i>
					<p>Electrical Marketing Sdn Bhd<br>No.12, Lorong Brunei 3 (off jalan pudu)<br>55100 Kuala Lumpur</p>
				</div>
				<div class="contact-item">
					<i class="fas fa-phone"></i>
					<p>Contact Number: +603-2142 1711</p>
				</div>
				<div class="contact-item">
					<i class="fas fa-fax"></i>
					<p>Fax: +603-2141 8417</p>
				</div>
			</div>
		</section>
	</main>
</template>
<script setup>
import { useSeoMeta } from 'nuxt/app'

useSeoMeta({
  title: 'Home - Electrical Marketing Sdn Bhd (EMSB)', // Set the page-specific title
})
</script>