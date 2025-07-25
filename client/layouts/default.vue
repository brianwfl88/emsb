<template>
    <div>
        <!-- Top Navigation Bar -->
        <header class="page-header">
            <div class="header-container">
                <nav>
                    <ul class="menu">
                        <li class="menu-item">
                            <NuxtLink to="/"><img src="@/public/images/logo.png" width="30" height="25"/></NuxtLink>
                        </li>
                        <li class="menu-item"><a href="#intro" @click="scrollToSection($event, 'intro')">About Us</a></li>
                        <li class="menu-item"><a href="#grid" @click="scrollToSection($event, 'grid')">Products</a></li>
                        <li class="menu-item"><a href="#contact" @click="scrollToSection($event, 'contact')">Contact</a></li>
                    </ul>
                </nav>
                <span class="header-shortcut">
                    <a href="tel:+603-2142 1711">
                        <i class="fas fa-phone"></i>
                        +603-2142 1711
                    </a>
                    <a href="email:+603-2141 8417">
                        <i class="fas fa-fax"></i>
                        +603-2141 8417
                    </a>
                </span>
            </div>
        </header>

        <!-- Page Content -->
        <nuxt-page />

        <!-- Right-Side Indicator -->
        <div class="indicator">
            <ul>
                <li :class="{ active: activeSection === 'home' }" @click="scrollToSection('home')"></li>
                <li :class="{ active: activeSection === 'intro' }" @click="scrollToSection('intro')"></li>
                <li :class="{ active: activeSection === 'grid' }" @click="scrollToSection('grid')"></li>
                <li :class="{ active: activeSection === 'contact' }" @click="scrollToSection('contact')"></li>
            </ul>
        </div>

        <!-- Page Footer -->
        <footer class="page-footer">
            <p>Copyright © {{ currentYear }} Electrical Marketing Sdn Bhd (EM). All rights reserved.</p>
        </footer>

        <a class="chat-icon" href="https://wa.link/xgttto" target="_blank">
            <img width="60" src="@/public/images/whatsapp.png">
        </a>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
    setup() {
        const activeSection = ref("home");

        const scrollToSection = (e, sectionId) => {
            e.preventDefault();
            if (sectionId === "home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                activeSection.value = "home";
            } else {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                    activeSection.value = sectionId;
                }
            }
        };

        const handleScroll = () => {
            const sections = ["home", "intro", "grid", "contact"];
            sections.forEach((sectionId) => {
                if (sectionId === "home") {
                    if (window.scrollY === 0) {
                        activeSection.value = "home";
                    }
                } else {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        const rect = section.getBoundingClientRect();
                        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                            activeSection.value = sectionId;
                        }
                    }
                }
            });
        };

        onMounted(() => {
            window.addEventListener("scroll", handleScroll);
        });

        const currentYear = new Date().getFullYear();

        return {
            scrollToSection,
            activeSection,
            currentYear,
        };
    },
};
</script>

<style scoped lang="scss">
.page-header {
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    background-color: #fff;
    color: #333;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    .menu-item {
        margin-right: 20px;

        a {
            color: #333;
            text-decoration: none;
            font-weight: 300;
            font-size: 16px;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}

.indicator {
    position: fixed;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 5px;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            margin-bottom: 10px;
            cursor: pointer;
            color: #333;
            font-size: 14px;
            text-align: center;

            &.active {
                font-weight: bold;
                color: #007bff;
            }

            &:hover {
                color: #0056b3;
            }
        }
    }
}

.page-footer {
    background-color: #333; /* Dark background */
    color: #fff; /* White text */
    text-align: center;
    padding: 20px;
    font-size: 0.9rem; /* Slightly smaller text */
}
</style>
