<template>
    <Topheader />

    <main>
        <div class="wrapper">
            <h1 class="cmd">Loading...</h1>

            <div class="projects">
                <div class="projects-comp">
                    
                </div>
            </div>
        </div>
    </main>

    <footersec />
</template>

<script lang="ts">

import utils from '../assets/scripts/utils';

export default {
    mounted() {
        const cmd_txt = $('.cmd');
        utils.type_anim('/projects', cmd_txt, 50);
    },
}

</script>