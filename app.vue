<template>
      <div>
        <NavBar />
        <NuxtPage />
        <div class="footer">
          <Footer></Footer>
        </div>
      </div>
    </template>

    <style lang="postcss">
    body{
      background-color: var(--blanco);
      color: var(--negro);
    }
    @media (orientation : portrait) {
      .footer {
        display: none;
      }
    }
      @font-face {
        font-family: AeonikTRIAL-Bold;
        font-weight: bold;
        src: url("/public/fonts/AeonikTRIAL-Bold.woff2") format("woff2");
      }
      @font-face {
        font-family: AeonikTRIAL-Regular;
        font-weight: normal;
        src: url("/public/fonts/AeonikTRIAL-Regular.woff2") format("woff2");
      }
      @font-face {
        font-family: AeonikTRIAL-Bold-Fallback;
        font-weight: bold;
        src: url("/public/fonts/AeonikTRIAL-Bold.woff2") format("woff2");
        unicode-range: U+00A0-00FF; /* Latin-1 Supplement for accented characters */
      }
      @font-face {
        font-family: AeonikTRIAL-Regular-Fallback;
        font-weight: normal;
        src: url("/public/fonts/AeonikTRIAL-Regular.woff2") format("woff2");
        unicode-range: U+00A0-00FF; /* Latin-1 Supplement for accented characters */
      }
    
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden; /* Prevent horizontal scrolling */
      }
    
      /* Hide the scrollbar */
      /* For Webkit browsers (Chrome, Safari) */
      body::-webkit-scrollbar {
        display: none;
      }
    
      /* For Firefox */
      body {
        scrollbar-width: none; /* Firefox */
        max-width: 100%;
        margin: 0 auto;
        background-color: white;
        color: #000000;
      }
    
      :root {
        --azul: #0007FF;
        --blanco: #FFFFFF;
        --negro: #000000;
        --gris: #D9D9D9;
      }
    
      .nuxt-icon svg {
        margin-bottom: 0;
      }

    
      h1 {
        color: var(--azul);
        font-family: AeonikTRIAL-Bold, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 1.5rem;
        margin: 0;
      }
      h2 {
        font-family: AeonikTRIAL-Regular, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 1.15rem;
        margin: 0;
      }
      h3 {
        font-family: AeonikTRIAL-Regular, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 1.05rem;
        margin: 0;
      }
      h4 {
        font-family: AeonikTRIAL-Bold, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 1.05rem;
        margin: 0;
      }
      h5 {
        font-family: AeonikTRIAL-Regular, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 0.9rem;
        margin: 0;
      }
      h6 {
        font-family: AeonikTRIAL-Bold, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 0.8rem;
        margin: 0;
      }
      h7 {
        color: red;
        font-family: AeonikTRIAL-Regular, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 0.7rem;
      }
      h8 {
        font-family: AeonikTRIAL-Bold, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 1.15rem;
      }
      h9 {
        font-family: AeonikTRIAL-Bold, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 0.8rem;
      }
      h10 {
        font-family: AeonikTRIAL-Regular, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 1.3rem;
      }
      h11 {
        font-family: AeonikTRIAL-Regular, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 0.7rem;
      }
      p {
        font-family: AeonikTRIAL-Regular, Helvetica, sans-serif;
        font-weight: normal;
        font-size: 0.8rem;
        margin: 0;
      }
    </style>
    