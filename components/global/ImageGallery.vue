<template>
  <ClientOnly>
    <div class="container">
      <div v-if="post.folder !== 'page'">
        <FolderContent v-if="post.folder" :title="post.title" />
      </div>

      <div v-if="post.imagegallery.gallerytitle" class="text-xl font-bold pb-2 text-center">
        {{ post.imagegallery.gallerytitle }}
      </div>
      <div v-if="post.imagegallery.gallerytext" class="text-xl pb-2 text-center">
        {{ post.imagegallery.gallerytext }}
      </div>

      <!-- Carousel -->
      <div v-if="post.imagegallery.carouselgrid === 'carousel'">
        <el-carousel indicator-position="none" motion-blur>
          <el-carousel-item v-for="(item, index) in post.imagegallery.galleryImages" :key="index">
            <div class="relative flex items-center justify-center">
              <div v-if="imageLoading[index]" class="absolute inset-0 flex items-center justify-center bg-gray-200">
                <p>Loading image...</p>
              </div>
              <NuxtImg
                :src="item.image"
                alt="Gallery Image"
                loading="lazy"
                @load="imageLoaded(index)"
                @click="openFullscreen(item)"
                class="w-full max-h-[600px] object-contain cursor-pointer"
              />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

<!-- Grid layout: 3 per riga con responsive -->
<div v-else-if="post.imagegallery.carouselgrid === 'grid'" class="image-grid">
  <div class="image-item" v-for="(item, index) in post.imagegallery.galleryImages" :key="index">
    <div v-if="imageLoading[index]" class="absolute inset-0 flex items-center justify-center bg-gray-200">
      <p>Loading image...</p>
    </div>
    <NuxtImg
      :src="item.image"
      alt="Gallery Image"
      loading="lazy"
      @click="openFullscreen(item)"
      @load="imageLoaded(index)"
      class="object-cover w-full h-auto rounded-md cursor-pointer"
    />
  </div>
</div>


      <!-- Fullscreen overlay with text_below -->
      <div v-if="isOverlayVisible" class="fullscreen-overlay" @click.self="closeFullscreen">
        <NuxtImg :src="currentImage.image" alt="Fullscreen Image" class="fullscreen-image" />
        <div class="overlay-text" v-if="currentImage.text_below">
          {{ currentImage.text_below }}
        </div>
        <button @click="closeFullscreen" class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"></path>
          </svg>
        </button>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useAsyncData } from '#app';

const route = useRoute();
const actualPath = route.path.replace(/\/$/, '');

const { data: post } = await useAsyncData('post', () =>
  queryContent(actualPath).findOne()
);

const imageLoading = ref([]);
const isOverlayVisible = ref(false);
const currentImage = ref({});

// Functions
const imageLoaded = (index) => {
  imageLoading.value[index] = false;
};
const openFullscreen = (item) => {
  currentImage.value = item;
  isOverlayVisible.value = true;
};
const closeFullscreen = () => {
  isOverlayVisible.value = false;
  currentImage.value = {};
};

// Init loading indicators
onMounted(() => {
  if (post.value?.imagegallery?.galleryImages) {
    imageLoading.value = post.value.imagegallery.galleryImages.map(() => true);
  }
});
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 1024px) {
  .image-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .image-grid {
    grid-template-columns: 1fr;
  }
}

.image-item {
  position: relative;
}

.image-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.5rem;
  cursor: pointer;
}

.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.fullscreen-image {
  max-width: 90%;
  max-height: 90%;
  object-contain: contain;
}
.overlay-text {
  position: absolute;
  bottom: 2%; /* MODIFICA L'ALTEZZA DEL TESTO SOTTO L'IMMAGINE (PIU ALTO = PIU IN ALTO) */
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  max-width: 90%;
  text-align: center;
}
.text-center {
  text-align: center;
  padding-bottom: 7%;
}
.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  padding: 0.5rem;
  border-radius: 9999px;
  cursor: pointer;
}
</style>
