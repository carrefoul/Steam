<template>
  <div class="contendor">
    <component :is="textSize" class="text">
          {{ buttonText }}
      </component>
      <div class="news-gallery">
      <div ref="newsGrid" class="news-grid">
        <div 
          v-for="(news, index) in visibleNews" 
          :key="index"
          class="news-card-container"
        >
          <noticia :newsData="news.data" :imageSrc="news.image" />
        </div>
      </div>
      <div v-if="!allNewsLoaded" class="load-more">
        <BuyLink
          :showIcon="true"
          :showInverted="true"
          :showBox="true"
          iconName="Más"
          textSize="h6"
          :showText="true"
          buttonText="Ver más"
          @click="loadMoreNews"
        />
      </div>
    </div>
  </div>
    
  </template>
  
  <script>
  import noticia from '~/componentes/Moleculas/noticia.vue'; // Ajusta la ruta según tu estructura de archivos
  import BuyLink from '../Atoms/BuyLink.vue';
  
  export default {
    components: {
      noticia,
      BuyLink,
    },
    props: {
      buttonText: {
        type: String,
        default: 'ACTIVIDAD'
      },
      textSize: {
        type: String,
        default: 'h1',
      },
      
    },
    data() {
      return {
        newsData: [
            { title: '¡Ya han comenzado las rebajas de invierno de Steam!', content: 'Las rebajas de invierno de Steam han comenzado oficialmente, con descuentos en juegos de todo el mundo hasta el 4 de enero a las 19:00 (hora peninsular). Consigue una pegatina gratuita por cada día que visites las rebajas y entres en la página de alguna categoría.' },
            { title: 'Ya está aquí el Festival de Dinosaurios contra Robots', content: '¿Cuántas citas terribles de pelis metimos con calzador en el tráiler? ¡Míralo y cuéntalas! O mejor no, que nos da un poco de vergüenza. El Festival de Dinosaurios contra Robots de Steam homenajea los juegos en los que puedes jugar con dinosaurios o robots. O con dinosaurios y robots. ¡O como dinosaurios y robots! Ya nos entiendes.' },
            { title: '¡Ya ha empezado el Festival de los FPS de Steam!', content: 'Disfruta de descuentos y demos de juegos de FPS durante toda la semana, o echa un vistazo al tráiler oficial de arriba para ver qué tipos de juegos participan en el festival, desde juegos tácticos de disparos y combate en equipo a juegos de caza bajo el agua o en la jungla.' },
            { title: '¡Ya están aquí las rebajas de otoño de Steam!', content: ' ¿Estás listo para una semana entera llena de decenas de miles de descuentos? ¡Han comenzado oficialmente las rebajas de otoño en Steam! Desde ahora y hasta el 28 de noviembre a las 19:00 (hora peninsular), echa un vistazo a todos los géneros que te puedas imaginar para conseguir todo tipo de juegos en oferta.' },
            { title: 'Ya ha comenzado el Festival del Capitalismo y la Economía de Steam', content: 'Ya ha comenzado el Festival del Capitalismo y la Economía de Steam, con montones de descuentos y demos disponibles hasta el 15 de enero. Pon a prueba tus habilidades para ganar dinero contante y sonante, ya sea dirigiendo bodegas y fábricas o diseñando proyectos como redes ferroviarias. ¡Echa un vistazo al tráiler oficial (arriba) para ver muchos más ejemplos!'  },
            { title: '¡El Festival de la Estrategia de Steam, desde ahora hasta el 4 de septiembre!', content: 'Ya está en marcha el Festival de la Estrategia de Steam, una semana completa con descuentos y demos para celebrar los juegos de pura estrategia. Si te gusta procrastinar, no te va hacer planes y te da igual lo que puedan estar tramando tus contrincantes, ¡este festival no es para ti! Aunque te sugerimos que lo pruebes igual... El Festival de la Estrategia de Steam es para quienes disfrutan planificando, maquinando y superando en ingenio a sus adversarios.' },
            { title: 'Ya ha comenzado el Festival de la Rejugabilidad Infinita de Steam', content: 'El Festival de la Rejugabilidad Infinita de Steam ya está en marcha: toda una semana con cientos de descuentos en juegos que puedes disfrutar una y otra vez. ¡Mira el tráiler de arriba para inspirarte a echar un vistazo!' },
            { title: 'Lo mejor de 2023', content: 'Con la temporada de rebajas de invierno en pleno apogeo, nos hace mucha ilusión compartir las listas de Lo mejor de 2023 de Steam. Nos gusta mucho crearlas para ver cómo evolucionó el año. Así que echa un vistazo y rememora todos los juegos estupendos que hicieron que 2023 fuera un año inolvidable.' },
            { title: '¡El Festival del Miedo de Steam: La Venganza (o Festival de Halloween) empieza hoy!', content: '¡Acompáñanos del 26 de octubre al 2 de noviembre (si te atreves) en el Festival del Miedo de Steam: La Venganza! Como todos los años, vuelve el festival más terrorífico de Steam, con descuentos y demos en juegos y próximos lanzamientos relacionados con la temática de Halloween.' },
            { title: '¡El Festival de los Matamarcianos de Steam, desde ahora hasta el 2 de octubre!', content: 'Ya está en marcha el Festival de los Matamarcianos de Steam, una semana completa con descuentos y demos para celebrar los juegos de matamarcianos, de disparos con doble stick y de lluvia de balas. No nos referimos a los juegos de disparos en primera persona, sino a los inspirados en el caos de los antiguos juegos de disparos de arcade, con aumentos de poder, muchos enemigos y más balas de las que puedes contar.' },
            { title: '¡Ya está aquí el Festival de Remote Play Together!', content: 'Desde hoy hasta el 19 de febrero a las 19:00 (hora peninsular), el Festival de Remote Play Together de Steam 2024 está dedicado a los juegos a los que se puede jugar en compañía estés donde estés. ¿Te gusta jugar en el sofá con alguien a tu lado? Vale. ¿Prefieres jugar con gente que vive a cientos de kilómetros de distancia? Estupendo. En estos juegos, cuantos más, mejor. No importa el nivel de cercanía (nos referimos a cercanía física, la emocional dejémosla para la terapia).' },
            { title: 'Las mejores demos de la edición de junio del Next Fest de Steam', content: 'Las mejores demos de la edición de junio del Next Fest de Steam' },
            { title: '¡Ya está aquí el Festival de la Agricultura!', content: 'Ya ha comenzado el Festival de la Agricultura de Steam, con héctareas y hectáreas de demos y ofertas. Tanto si quieres plantar el huerto de tus sueños como construir una granja acogedora o descubrir el estrés que se siente al dirigir una de verdad, hay cientos de juegos por descubrir.' },
            { title: 'Las mejores demos del Next Fest de Steam (¡hasta la fecha!)', content: '¡Quedan solo unos días para probar los cientos de demos gratuitas de la edición de febrero de 2024 del Next Fest de Steam! Son todas gratis y las han compartido desarrolladores de diferentes partes del mundo mientras preparan el lanzamiento de la versión completa de sus juegos en Steam.' }
        ],
        images: [
          'img1.jpg',
          'img2.jpg',
          'img3.jpg',
          'img4.jpg',
          'img5.jpg',
          'img6.jpg',
          'img7.jpg',
          'img8.jpg',
          'img9.jpg',
          'img10.jpg',
          'img11.jpg',
          'img12.jpg',
          'img13.jpg',
          'img14.jpg'
        ],
        visibleNews: [],
        allNewsLoaded: false,
        page: 1,
      };
    },
    computed: {
      shuffledNews() {
        const combined = this.newsData.map((news, index) => ({
          data: news,
          image: `/img/imgNoticias/${this.images[index]}`
        }));
        return combined.sort(() => Math.random() - 0.5);
      }
    },
    mounted() {
      this.loadInitialNews();
    },
    methods: {
      loadInitialNews() {
        this.visibleNews = this.shuffledNews.slice(0, 10);
        this.allNewsLoaded = this.shuffledNews.length <= 10;
      },
      loadMoreNews() {
        const currentNewsCount = this.visibleNews.length;
        const additionalNews = this.shuffledNews.slice(currentNewsCount, currentNewsCount + 4); // Adjust the number of news to load more
        this.visibleNews = [...this.visibleNews, ...additionalNews];
        this.allNewsLoaded = this.visibleNews.length === this.shuffledNews.length;
      }
    }
  };
  </script>
  
  <style scoped>
  .news-gallery {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
  }
  
  .news-grid {
    display: grid;
    padding: 0px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Mantenemos el mínimo de 200px */
    gap: 10px;
    width: 100%;
    box-sizing: border-box;
  }
  
  @media screen and (min-width: 768px) {
    .news-grid {
      grid-template-columns: repeat(5, 1fr); /* Establecemos 5 columnas en pantallas más grandes */
    }
  }
  
  .news-card-container {
    break-inside: avoid;
    width: 100%;
  }
  
  .load-more {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .contendor{
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px;
    margin-top: 0px;
  }
  </style>
  