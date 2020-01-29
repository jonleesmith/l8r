<template>
    <div class="wrapper pt-12 min-h-screen" :class="[ ( (darkMode) ? 'theme-dark' : 'theme-light' ) ]">
        <div class="bg-gray-900 w-full h-12 fixed top-0 left-0 flex items-center justify-center z-50">
            <nuxt-link :to="{ name: 'index' }" class="flex items-center">
                <span class="text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-watch"><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path></svg>
                    </span>&nbsp;<span class="font-semibold text-white">l8r</span>
            </nuxt-link>
        </div>
        <div class="pt-12">
            <nuxt />
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        computed: {
            ...mapState(['darkMode'])
        }
    }
</script>
<style lang="scss">
*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

html {
    @apply font-sans text-lg;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

body {
    --color-base: #fff;
    --color-base-1: #edf2f7;
    --color-contrast: #2d3748;
    --color-contrast-1: #1a202c;
}

.theme-light {
    background: var(--color-base-1);
    color: var(--color-contrast-1);
}

.theme-dark {
    color: var(--color-base);
    background: var(--color-contrast);

    form > input {
        background: var(--color-contrast-1);
    }
}

.wrapper {

}

.main-container {
    min-height: 100vh;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    width: 100%;
}

</style>
