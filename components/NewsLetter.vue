<template lang="">
  <div class="newsLetter clear-both py-20">
    <div class="container mx-auto">
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-6 lg:col-span-6 p-8">
          <h2 class="text-7xl font-semibold tracking-tight text-white">Subscribe Our Newsletter</h2>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-6 p-8">
          <div class="flex max-w-full gap-x-4 relative">
            <!-- <label for="email-address" class="sr-only">Email address</label> -->
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="min-w-0 flex-auto border-0 bg-white/1 px-5 py-6 shadow-sm sm:text-sm/6 lg:text-2xl placeholder-black capitalize" placeholder="Enter email address" />
            <button type="submit" class="newsLetterBtn flex-none bg-lightBlue px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-darkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:text-2xl uppercase absolute right-0 m-1.5 h-5/6 w-3/12 tracking-widest">Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss">
  .newsLetter{
    background-image: url('@/assets/image/newsletter_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 70px 0px;
  }
</style>