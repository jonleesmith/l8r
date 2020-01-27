<template>
    <div class="wrapper py-12">
        <div class="py-12 text-center">
            <h1 class="text-4xl">l8r</h1>
        </div>
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
    @apply font-sans text-white;
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

body {
    @apply bg-gray-900;
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
