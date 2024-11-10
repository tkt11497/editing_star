<template>
  <!-- Accordion Data -->
  <div
    class="p-6 m-auto mb-8 tab border relative"
    v-for="accordionData in accordionDataList"
    :key="accordionData.id"
  >
    <input type="checkbox" name="faq" :id="accordionData.id" class="hidden peer" />
    <label
      :for="accordionData.id"
      class="block flex text-center text-3xl focus:outline useOswald peer-checked:text-lightBlue"
    >
      {{ accordionData.accordionTitle }}
    </label>

    <ChevronDownIcon
      class="w-9 peer-checked:transform peer-checked:rotate-180 mr-6 absolute right-0 ease-in-out -mt-9 peer-checked:text-lightBlue transition-all"
    />
    <div
      v-for="content in accordionData.accordionContent"
      :key="content.id"
      class="h-0 overflow-hidden peer-checked:h-full transition ease-in-out duration-1000 text-2xl leading-10"
    >
      <div class="mt-8">
        <!-- will render if accordion data list contain intro text key -->
        <p v-if="content.introText" class="text-2xl leading-8 mb-8">
          {{ content.introText }}
        </p>

        <!-- will render this blockUI if accordion data list contain isTabularUi key -->
        <div v-if="accordionData.is2TabularUi">
          <div class="container mx-auto">
            <div class="grid grid-cols-12">
              <div class="col-span-6 md:col-span-6 lg:col-span-3">
                <h2
                  v-if="content.contentTitle"
                  class="font-semibold tracking-tight tracking-wide"
                >
                  {{ content.contentTitle }}
                </h2>
              </div>
              <div class="col-span-6 md:col-span-6 lg:col-span-9">
                <label v-if="content.textBold" class="font-semibold -ml-80">{{
                  content.textBold
                }}</label>
                {{ content.text }}
              </div>
            </div>
          </div>
        </div>

        <!-- will render this blockUI if accordion data list have no isTabularUi key-->
        <div v-else>
          <!-- will render if accordion data list contain contentTitle text key -->
          <h2
            v-if="content.contentTitle"
            class="font-semibold tracking-tight tracking-wide"
          >
            {{ content.contentTitle }}
          </h2>
          <div v-if="accordionData.haveBr || content.haveBr">
            <ul v-for="contentTxt in content.text.split('br')" :key="accordionData.id">
              <li class="mt-4">
                <span
                  class="before:content-mark_icon pr-2"
                  v-if="content.showMarkIcon"
                ></span>
                {{ contentTxt }}
              </li>
            </ul>

            <!-- will render if content object have conclusionText -->
            <p v-if="content.conclusionText" class="mt-8 font-semibold">
              {{ content.conclusionText }}
            </p>
          </div>
          <div v-else>
            <p class="mt-1">
              <label v-if="content.textBold" class="font-semibold">{{
                content.textBold
              }}</label>
              {{ content?.text }}
            </p>

            <!-- will render if content object have isanchorLink -->
            <a
              v-if="content.isanchorLink && !content.isBtn"
              class="mt-8 font-semibold text-blue-600"
              href="https://www.marwadionline.com/service/msfl-connect"
            >
              {{ content.anchorText }}
            </a>

            <!-- will render if content object have isanchorLink -->
            <p v-if="content.isBtn" class="capitalize">click to download</p>
            <a
              v-if="content.isanchorLink && content.isBtn"
              class="mt-2 font-semibold text-white p-5 bg-blue-800 block w-2/12 text-center tracking-widest uppercase"
              href="https://www.marwadionline.com/service/msfl-connect"
            >
              {{ content.anchorText }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
const props = defineProps(["accordionDataList"]);
</script>
<style lang=""></style>
