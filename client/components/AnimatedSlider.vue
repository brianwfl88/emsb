<template>
    <div class="slider">
        <div
            class="slider-track"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
            <div class="slider-item" v-for="(slide, index) in slides" :key="index">
                <img :src="slide.image" :alt="slide.alt" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                { image: "/images/slide/slide1.jpg", alt: "Slide 1" },
            ],
            currentSlide: 0,
        };
    },
    mounted() {
        this.startSlider();
    },
    methods: {
        startSlider() {
            setInterval(() => {
                this.currentSlide =
                    (this.currentSlide + 1) % this.slides.length; // Loop through slides
            }, 3000); // Change slide every 3 seconds
        },
    },
};
</script>

<style lang="scss" scoped>
.slider {
    position: relative;
    overflow: hidden;
    width: 100%; /* Full width of viewport */
    // height: 100vh; /* Full viewport height */
    background-color: #ffffff;

    .slider-track {
        display: flex;
        transition: transform 0.5s ease-in-out; /* Smooth animation */
        width: 100%;
        height: 100%; /* Match the height of the slider */
    }

    .slider-item {
        flex: 0 0 100%; /* Each slide takes full width */
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%; /* Match the height of the slider */
        img {
            width: 100%; /* Make images fluid */
            height: auto; /* Maintain aspect ratio */
            object-fit: cover; /* Ensure images cover the slide area */
        }
    }
}
</style>