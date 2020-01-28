<template>
    <div class="wrapper py-12">
        <nuxt />
    </div>
</template>

<style>
*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

html {
    @apply font-sans text-gray-700 text-lg;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

body {
    @apply bg-gray-200;
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
