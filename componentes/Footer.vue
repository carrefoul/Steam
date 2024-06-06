<template>
    <div class="footer">
        <div class="footerTop">
            <div class="topMain">
                <div class="logoHolder">
                    <div class="iconHolder">
                        <nuxt-icon name="Logo" class="logoClass"></nuxt-icon>
                    </div>
                    <h2>© 2024 Valve Corporation</h2>
                </div>
                <div class="textHolder">
                    <p>Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE.UU. y otros países.</p>
                    <p>Todos los precios incluyen IVA (donde sea aplicable)</p>
                </div>
            </div>
            <div class="topRedes">
                <linkListaYMiniIconLink :showIcon="true" iconName="Facebook" textSize="h9" :showText="true" buttonText="Steam" @click="redirectToPage"/>
                <linkListaYMiniIconLink :showIcon="true" iconName="Twitter" textSize="h9" :showText="true" buttonText="@steam" @click="redirectToPage2"/>
            </div>
        </div>
        <div class="footerBottom">
            <p>Política de privacidad</p>
            <p class="raya">|</p>
            <p>Información legal</p>
            <p class="raya">|</p>
            <p>Acuerdo de Suscriptor Steam</p>
            <p class="raya">|</p>
            <p>Reembolsos</p>
            <p class="raya">|</p>
            <p>Cookies</p>
        </div>
    </div>
</template>

<script>
import linkListaYMiniIconLink from './Atoms/linkListaYMiniIconLink.vue';

export default {
    components: {
        linkListaYMiniIconLink
    },
    methods: {
        redirectToPage() {
            window.location.href = 'https://www.facebook.com/Steam/?locale=es_ES';
            
        },
        redirectToPage2() {
            window.location.href = 'https://x.com/Steam?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor';
        }
    }
}
</script>

<style lang="postcss" scoped>
.footer {
    display: flex;
    flex-direction: column;
    border-top: 0.12rem solid var(--azul);
    padding: 2rem;
    gap: 1.5rem;
}
.logoHolder {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
}
.iconHolder {
    width: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logoClass {
  
    color: var(--azul);
}
.footerTop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}
.topRedes {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    align-items: end;
}
.topMain {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.footerBottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.raya {
    color: var(--gris);
}
@media (orientation : portrait) {
  .footer {
    display: flex;
    padding: 0;
  }
  .textHolder {
    display: none;
  }
  .footerBottom {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .raya {
    display: none;
  }
  .logoClass {
    transform: scale(5) translateY(0em);
    color: white;
   }
  .footerTop{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .topRedes{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .logoHolder {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
    h2{
        font-size: 0.9rem;
    }
  }
  }
</style>