<template>
        <div>
            <b-navbar toggleable="sm" type="dark" variant="dark">

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto margin">
                        <h2 class="text-info">
                            <img src="../assets/food_coach.logo.png" alt="Logo" width="90" height="90" />
                            &nbsp;&nbsp;&nbsp;&nbsp; <b>In-Train Meal Delivery</b>
                        </h2>
                    </b-navbar-nav>
                    <b-navbar-nav class="ms-auto margin">
                        <b-nav-item href="/">Home</b-nav-item>
                        <b-nav-item href="/register">Sign Up</b-nav-item>
                        <b-nav-item href="/about">About Us</b-nav-item>
                    </b-navbar-nav>

                </b-collapse>

            </b-navbar>
        
    </div>
</template>

<script>
export default {
    name: 'MainMenu'
};
</script>

<style scoped>
.nav-style {
    color: floralwhite;
}

.margin{
    margin: 0 4rem;
}
</style>