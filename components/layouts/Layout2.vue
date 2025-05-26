
<template>
  <div class="layout2">
    <ClientOnly>
    <div class="relative max-h-screen overflow-hidden z-1">
      <!-- Lazy loading applied to NuxtImg -->
      <NuxtImg
        v-if="data.thumbnail"
        :src="data.thumbnail"
        class="w-screen opacity-80 bg-cover"
        :alt="`Thumbnail for ${data.title}`"
        format="webp"
        loading="lazy"
        @load="imageLoaded = true"
      />
      
      <div v-if="!imageLoaded" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div class="spinner"></div>
      </div>

      <div
        class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 animate-fade animate-once animate-delay-[500ms]"
        v-if="imageLoaded"
      >
        <div class="container p-4">
          <div>
            <h1 class="text-white text-4xl md:text-6xl lg:text-8xl montserrat-bold font-bold">{{ data.title }}</h1>
            <h1 v-if="data.subtitle" class="text-white opacity-80 pt-3 text-xl md:text-2xl lg:text-3xl font-bold pb-10">{{ data.subtitle }}</h1>
          </div>
          
          <div>
            <p v-if="data.author" class="text-white opacity-80 text-xs font-bold">{{ data.author }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading Drawer component -->
    <div class="absolute top-0 right-0 z-10 pr-5">
      <Drawer/> 
    </div>

    <!-- Main section full width -->
    <div class="w-full px-4 animate-fade animate-once animate-delay-[500ms]" v-if="imageLoaded">
      <div class="grid grid-cols-1 md:grid-col gap-4 mt-6">
        <!-- First column -->
        <div>
          <div v-if="data.imagegallery && data.imagegallery.showgallery == true">
            <ImageGallery/> 
          </div>
        </div>
      </div>
    </div>

    <!-- Loading the ShareButtons component -->
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
</style>
