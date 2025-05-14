<template>
  <div class="layout4">
    <ClientOnly>
      <div class="relative max-h-screen overflow-hidden z-1">
        <!-- Lazy loading applied to NuxtImg -->
        <NuxtImg
          v-if="data.thumbnail"
          :src="data.thumbnail"
          class="w-screen h-screen object-cover opacity-80"
          :alt="`Thumbnail for ${data.title}`"
          format="webp"
          loading="lazy"
          @load="imageLoaded = true"
        />
        
        <div v-if="!imageLoaded" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div class="spinner"></div>
        </div>

        <!-- Overlay contenuto -->
        <div
          v-if="imageLoaded"
          class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 animate-fade animate-once animate-delay-[500ms]"
        >
          <h1 class="text-white text-4xl md:text-6xl lg:text-8xl font-bold">{{ data.title }}</h1>
          <h2 v-if="data.subtitle" class="text-white opacity-80 pt-3 text-xl md:text-2xl lg:text-3xl font-bold pb-4">
            {{ data.subtitle }}
          </h2>
          <div class="text-white opacity-90 text-base md:text-lg lg:text-xl pb-6 text-center max-w-3xl">
            <ContentRenderer :value="data" />
          </div>
          <p v-if="data.author" class="text-white opacity-80 text-xs font-bold">{{ data.author }}</p>
        </div>
      </div>

      <!-- Menu hamburger dimensione originale -->
      <div class="absolute top-0 right-0 z-10 pr-5">
        <Drawer/> 
      </div>
      <ShareButtons/>

      <!-- SEO metadata -->
      <Title>{{ data.title }}</Title>
      <Meta name="description" :content="data.description" />
      <Meta name="tags" :content="data.tags.join(', ')" />
      <Meta name="keywords" :content="data.tags.join(', ')" />
      <Meta property="og:title" :content="data.title" />
      <Meta property="og:description" :content="data.description" />
      <Meta property="og:image" :content="data.thumbnail" />
      <Meta property="og:url" :content="data.url" />
      <Meta property="og:type" content="article" />
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const imageLoaded = ref(false);
defineProps(['data', 'formatDate']);
</script>

<style scoped>
.layout4 {
  /* Blocca lo scroll dell’intera pagina */
  height: 100vh;
  overflow: hidden;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Fade-in basico */
@keyframes fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.animate-fade {
  animation-name: fade;
  animation-duration: 1s;
}
.animate-once {
  animation-iteration-count: 1;
}
.animate-delay-\[500ms\] {
  animation-delay: 500ms;
}
</style>
