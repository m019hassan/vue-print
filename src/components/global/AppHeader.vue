<template>
    <div class="heaer w-100">
        <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/print">Print</RouterLink>
        <RouterLink to="/dragDrop">Drage and Drop</RouterLink>
      </nav>
    </div>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>