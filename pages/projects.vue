<template>
    <topheader />

    <main>
        <div class="wrapper">
            <h1 class="cmd">Loading...</h1>

            <div class="tabs">
                <button class="tab-btn select" id="github">GitHub Projects</button>
                <button class="tab-btn" id="other">Other Projects</button>
            </div>

            <div v-if="tab === 'github'" class="projs" style="opacity: 0;">
                <h1>Latest Project:</h1>
                <div class="projects-latest">
                    <h1><a id="latest-proj-link" href="https://github.com/RockyRosso/">{{latest_proj.name }}</a></h1>
                    <p>Primary Language: {{ latest_proj.language }}</p>
                    <p>{{ latest_proj.desc }}</p>
                </div>

                <div class="projects"></div>
            </div>
            <div v-else>
                <p>sfsgdsfb</p>
            </div>

            <div style="margin-bottom: 100px;"></div>
        </div>
    </main>

    <footersec />
</template>

<script lang="ts">

import utils from 'assets/scripts/utils';

export default {
    data() {
        return {
            latest_proj: {
                name: '',
                desc: '',
                language: ''
            },

            projs_cache: [],

            tab: 'github'
        }
    },

    methods: {
        init() {
            const cmd_txt = $('.cmd');
            utils.type_anim('/projects', cmd_txt, 50);

            this.load_projs();
        },

        load_projs() {
            const projects = $('.projects');
            const projs = $('.projs');

            if (projs.hasClass('reveal')) projs.removeClass('reveal');

            const latest_link = $('#latest-proj-link');
            latest_link.attr('href', `https://github.com/RockyRosso/${this.latest_proj.name}`);

            if (this.projs_cache.length > 0) {
                for (let i = 0; i < this.projs_cache.length; i++) {
                    projects.prepend(
                        `<div class="project">
                            <h1><a href="https://github.com/RockyRosso/${this.projs_cache[i].name}">${this.projs_cache[i].name}</a></h1>
                            <p>Primary Language: ${this.projs_cache[i].language}</p>
                            <p>${this.projs_cache[i].description}</p>
                        </div>`
                    );
                }
            }

            setTimeout(() => {
                projs.addClass('reveal');
            }, 1000);
        },

        project_tabs() {
            $('.tab-btn').on('click', (element) => {
                const clicked = element.currentTarget;
                
                if (clicked.classList.contains('select')) return;

                $('.tab-btn').removeClass('select');
                clicked.classList.add('select');

                this.tab = clicked.id;

                if (clicked.id === 'github') {
                    setTimeout(() => {
                        this.load_projs();
                    }, 200)
                    
                }
            });
        },

        async load_projects() {
            const res: Array<any> = await $fetch('https://api.github.com/users/RockyRosso/repos', {
                method: 'GET',
                responseType: 'json'
            });

            this.latest_proj.name = res[res.length - 1].name;
            this.latest_proj.desc = res[res.length - 1].description;
            this.latest_proj.language = res[res.length - 1].language;

            this.projs_cache = res;
        }
    },

    created() {
        this.load_projects();
    },

    mounted() {
        this.project_tabs();

        setTimeout(() => {
            this.init();
        }, 500);
    }
}

</script>

<style src="assets/scss/pages/projects.scss"></style>