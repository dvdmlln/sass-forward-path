<template>
    <div class="test">Test</div>
</template>

<style lang="scss">
@use '#my-module/assets/variables' as variables;

.test {
    color: variables.$font-color;
}
</style>