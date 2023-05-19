<template>
    <h1 class="cmd" id="welcome">Loading...</h1>

    <div class="sections">
        <div class="intro">
            <h1 class="intro-ele-static" style="opacity: 0; font-size: 8vw;">Welcome...</h1>

            <div style="margin-bottom: 500px;"></div>

            <h1 class="intro-ele">I'm RockyRosso</h1>
        </div>
        <div class="info">
            <div class="sections">
                <div style="margin-bottom: 500px;"></div>

                <div class="section">
                    <h1 class="intro-ele">I make:</h1>

                    <div class="intro-ele intro-cards">
                        <div class="intro-card">
                            <img class="intro-card-img" src="../assets/media/icons/discord_icon.png" />
                            <h1>Discord Bots</h1>
                        </div>

                        <div class="intro-card">
                            <img class="intro-card-img" src="../assets/media/icons/websites_icon.png" />
                            <h1>Websites</h1>
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 500px;"></div>

                <div class="section">
                    <h1 class="intro-ele">Languages:</h1>

                    <div class="intro-ele intro-cards">
                        <div class="intro-card">
                            <img class="intro-card-img" src="../assets/media/langs/javascript_icon.png" />
                            <h1>Javascript</h1>
                        </div>

                        <div class="intro-card">
                            <img class="intro-card-img" src="../assets/media/langs/python_icon.png" />
                            <h1>Python</h1>
                        </div>

                        <div class="intro-card">
                            <img class="intro-card-img" src="../assets/media/langs/gdscript_icon.png" />
                            <h1>GDScript</h1>
                        </div>

                        <div class="intro-card">
                            <img class="intro-card-img" src="../assets/media/langs/lua_icon.png" />
                            <h1>Lua</h1>
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 500px;"></div>

                <div class="section">
                    <h1 class="intro-ele">Tools:</h1>

                    <div class="intro-ele intro-cards">
                        <div class="intro-card">
                            <img class="intro-card-img" src="../assets/media/tools/netlify_icon.png" />
                            <h1><a href="https://www.netlify.com/">Netlify</a></h1>
                        </div>

                        <div class="intro-card">
                            <img class="intro-card-img" src="../assets/media/tools/vscode_icon.png" />
                            <h1><a href="https://code.visualstudio.com/">Visual Studio Code</a></h1>
                        </div>

                        <div class="intro-card">
                            <img class="intro-card-img" src="../assets/media/tools/trello_icon.png" />
                            <h1><a href="https://trello.com/">Trello</a></h1>
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 100px;"></div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">

import utils from 'assets/scripts/utils';

export default {
    methods: {
        introseq() {
            const welcome_ele = $('#welcome');
            const welcome_txt = $('.intro-ele-static');

            utils.type_anim('/homepage', welcome_ele, 50);

            setTimeout(() => {
                welcome_txt.addClass('reveal');
            }, 1000);
        },

        reveal() {
            const reveal_eles = document.querySelectorAll('.intro-ele');

            for (let i = 0; i < reveal_eles.length; i++) {
                const win_height = window.innerHeight;
                const ele_top = reveal_eles[i].getBoundingClientRect().top;

                if (ele_top < win_height) {
                    reveal_eles[i].classList.add('reveal');
                } else {
                    reveal_eles[i].classList.remove('reveal');
                }
            }
        }
    },

    mounted() {
        window.addEventListener('scroll', () => {
            this.reveal();
        })

        setTimeout(() => {
            this.introseq();
        }, 500)
    }
}

</script>

<style src="assets/scss/components/introseq.scss" />