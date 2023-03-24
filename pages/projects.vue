<template>
    <topheader />

    <article>
        <div class="wrapper">
            <h1 class="cmd">Loading...</h1>

            <div v-if="tab === 'github'" style="opacity: 0;" class="projs">
                <h1>Latest Project:</h1>
                <div class="projects-latest">
                    <h1><a id="latest-proj-link" href="https://github.com/RockyRosso/">{{latest_proj.name }}</a></h1>
                    <p>{{ latest_proj.desc }}</p>
                </div>

                <div class="projects"></div>
            </div>

            <div style="margin-bottom: 100px;"></div>
        </div>
    </article>

    <footersec />
</template>

<script lang="ts">

import utils from 'assets/scripts/utils';

export default {
    data() {
        return {
            latest_proj: {
                name: '',
                desc: ''
            },

            projects: [],

            tab: 'github'
        }
    },

    methods: {
        init() {
            const cmd_txt = $('.cmd');

            utils.type_anim('/projects', cmd_txt, 50);

            const projects = $('.projects');
            const projs = $('.projs');

            const latest_link = $('#latest-proj-link');
            latest_link.attr('href', `https://github.com/RockyRosso/${this.latest_proj.name}`);

            if (this.projects.length > 0) {
                for (let i = 0; i < this.projects.length; i++) {
                    projects.prepend(
                        `<div class="project">
                            <h1><a href="https://github.com/RockyRosso/${this.projects[i].name}">${this.projects[i].name}</a></h1>
                            <p>${this.projects[i].description}</p>
                        </div>`
                    );
                }
            }

            setTimeout(() => {
                projs.addClass('reveal');
            }, 1000);
        },

        async load_projects() {
            const res: Array<any> = await $fetch('https://api.github.com/users/RockyRosso/repos', {
                method: 'GET',
                responseType: 'json'
            });

            this.latest_proj.name = res[res.length - 1].name;
            this.latest_proj.desc = res[res.length - 1].description;

            this.projects = res;
        }
    },

    created() {
        this.load_projects();
    },

    mounted() {
        setTimeout(() => {
            this.init();
        }, 500);
    }
}

</script>

<style src="assets/scss/projects.scss"></style>