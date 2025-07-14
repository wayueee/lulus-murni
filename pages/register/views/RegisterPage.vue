<template>
  <div>
    <div class="hidden lg:block">
      <div class=" grid grid-cols-2">
        <div
          class=" bg-cover h-[690px] xl:h-[1000px]"
          style="
            background-image: url('/lulus-murni/lulus-murni/register/register-desktop.png');
          "
        >
          <div class="bg-[#044464]/70 h-[690px] xl:h-[1000px] bg-opacity-80">
            <div class="flex justify-end p-[38px]">
             <nuxt-link to="/">
                 <img
               class="w-[120px] xl:w-[170px]"
               src="/lulus-murni/register/lulus-murni.png"
               alt="lulus-murni"
             />
             </nuxt-link>
            </div>
            <div class=" container">
              <div class="pt-[170px] flex flex-col text-white">
                <div class="flex flex-col">
                  <h1 class="font-semibold text-[30px] xl:text-[40px]">Create<p>Your Account</p></h1>
                </div>
                <p class="text-[14px] xl:text-[18px]">Mulai tryout dan siapkan diri untuk meraih impianmu.</p>
                <img class="w-[15px] mt-2" src="/lulus-murni/register/vector.svg" alt="icon">
              </div>
            </div>
          </div>
        </div>
        <div class="container relative">
          <div class="absolute right-14 top-14  xl:right-24 ">
            <img src="/lulus-murni/register/icon-book.svg" alt="icon-book">
          </div>
          <div class="bg-white p-[20px] rounded-lg mt-[42px] mx-auto">
              <h1 class="font-semibold text-[20px]">Daftar.</h1>
              <p class="text-[14px] mb-[12px]">Silakan buat Akun untuk memulai tryout.</p>
              <div
                class="flex  rounded-lg border-2 pl-2 gap-[8px] mb-[12px]"
              >
                <img src="/lulus-murni/register/icon-profile.svg" alt="img" />
                <input class="w-full py-2" 
                  type="text"
                  name="name"
                  id=""
                  placeholder="Nama Lengkap"
                />
              </div>
              <div
                class="flex  rounded-lg border-2 pl-2 gap-[8px] mb-[12px]"
              >
                <img class="w-[18px]" src="/lulus-murni/register/icon-email.svg" alt="img" />
                <input class="w-full py-2"  
                  type="email"
                  name="name"
                  id=""
                  placeholder="Email"
                />
              </div>
              <div
                class="flex  rounded-lg border-2 pl-2 gap-[8px] mb-[12px]"
              >
                <img class="w-[18px]" src="/lulus-murni/register/icon-phone.svg" alt="img" />
                <input class="w-full py-2"
                  type="number"
                  name="name"
                  id=""
                  placeholder="No. Telp/Hp"
                />
              </div>
              <div
                class="flex justify-between  rounded-lg border-2 pl-2 gap-[8px] mb-[16px]"
              >
                <div class="flex gap-[8px]">
                  <img src="/lulus-murni/register/icon-password.svg" alt="img" />
                  <input class="w-full py-2"
                    type="password"
                    name="password"
                    id=""
                    placeholder="Password"
                  />
                </div>
                <button>
                    <img
                      class="pr-[12px]"
                      src="/lulus-murni/register/icon-eye.svg"
                      alt="img"
                    />
                </button>
              </div>
              <div
                class="flex justify-between  rounded-lg border-2 pl-2 gap-[8px] mb-[16px]"
              >
                <div class="flex gap-[8px]">
                  <img src="/lulus-murni/register/icon-password.svg" alt="img" />
                  <input class="w-full py-2"
                    type="password"
                    name="password"
                    id=""
                    placeholder="Konfirmasi Password"
                  />
                </div>
                <button>
                    <img
                      class="pr-[12px]"
                      src="/lulus-murni/register/disable-eye.svg"
                      alt="img"
                    />
                </button>
              </div>
              <div class="my-[20px]">
                <button
                  class="w-full py-[12px] rounded-lg border text-center font-semibold text-[14px] bg-[#249CD9] text-white"
                >
                  Daftar
                </button>
              </div>
              <div class="flex">
                <img
                  class="w-full"
                  src="/lulus-murni/register/vector-line.svg"
                  alt="icon"
                />
                <h1 class="text-[12px] mx-2 font-semibold text-[#A0A3BD]">
                  atau
                </h1>
                <img
                  class="w-full"
                  src="/lulus-murni/register/vector-line.svg"
                  alt="icon"
                />
              </div>
              <div class="my-[20px]">
                <button
                  class="flex w-full gap-[8px] py-[12px] border-2 justify-center rounded-lg"
                >
                  <img src="/lulus-murni/register/icon-google.svg" alt="icon" />
                  <h1>Daftar dengan Google</h1>
                </button>
              </div>
              <div class="flex justify-center">
                <button @click="toLoginPage">Sudah Punya akun? <span class="underline text-[#249CD9]">Login</span></button>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div
      class="w-full lg:hidden bg-cover h-[390px]"
      style="
        background-image: url('/lulus-murni/lulus-murni/register/register-mobile.png');
      "
    >
      <div class="bg-[#044464]/70 h-[390px] bg-opacity-80">
        <div class="py-[72px] container flex justify-center flex-col lg:hidden">
          <div class="flex justify-center mb-[52px]">
            <nuxt-link to="/"><img
              class="w-[150px]"
              src="/lulus-murni/register/lulus-murni.png"
              alt="lulus-murni"
            />
            </nuxt-link>
          </div>
          <div class="bg-white p-[20px] rounded-lg">
            <h1 class="font-semibold text-[16px]">Daftar.</h1>
            <p class="text-[12px] mb-[12px]">Silakan buat Akun untuk memulai tryout.</p>
            <div
                class="flex  rounded-lg border-2 pl-2 gap-[8px] mb-[12px]"
              >
                <img src="/lulus-murni/register/icon-profile.svg" alt="img" />
                <input class="w-full py-2"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Nama Lengkap"
                />
              </div>
              <div
                class="flex  rounded-lg border-2 pl-2 gap-[8px] mb-[12px]"
              >
                <img class="w-[18px]" src="/lulus-murni/register/icon-email.svg" alt="img" />
                <input class="w-full py-2"
                  type="email"
                  name="name"
                  id=""
                  placeholder="Email"
                />
              </div>
              <div
                class="flex  rounded-lg border-2 pl-2 gap-[8px] mb-[12px]"
              >
                <img class="w-[18px]" src="/lulus-murni/register/icon-phone.svg" alt="img" />
                <input class="w-full py-2"
                  type="number"
                  name="name"
                  id=""
                  placeholder="No. Telp/Hp"
                />
              </div>
              <div
                class="flex justify-between  rounded-lg border-2 pl-2 gap-[8px] mb-[16px]"
              >
                <div class="flex gap-[8px]">
                  <img src="/lulus-murni/register/icon-password.svg" alt="img" />
                  <input class="w-full py-2"
                    type="password"
                    name="password"
                    id=""
                    placeholder="Password"
                  />
                </div>
                <button>
                    <img
                      class="pr-[12px]"
                      src="/lulus-murni/register/icon-eye.svg"
                      alt="img"
                    />
                </button>
              </div>
              <div
                class="flex justify-between  rounded-lg border-2 pl-2 gap-[8px] mb-[16px]"
              >
                <div class="flex gap-[8px]">
                  <img src="/lulus-murni/register/icon-password.svg" alt="img" />
                  <input class="w-full py-2"
                    type="password"
                    name="password"
                    id=""
                    placeholder="Konfirmasi Password"
                  />
                </div>
                <button>
                    <img
                      class="pr-[12px]"
                      src="/lulus-murni/register/disable-eye.svg"
                      alt="img"
                    />
                </button>
              </div>
              <div class="my-[20px]">
                <button
                  class="w-full py-[12px] rounded-lg border text-center font-semibold text-[14px] bg-[#249CD9] text-white"
                >
                  Daftar
                </button>
              </div>
              <div class="flex">
                <img
                  class="w-full"
                  src="/lulus-murni/register/vector-line.svg"
                  alt="icon"
                />
                <h1 class="text-[12px] mx-2 font-semibold text-[#A0A3BD]">
                  atau
                </h1>
                <img
                  class="w-full"
                  src="/lulus-murni/register/vector-line.svg"
                  alt="icon"
                />
              </div>
              <div class="my-[20px]">
                <button
                  class="flex w-full gap-[8px] py-2 border-2 justify-center rounded-lg"
                >
                  <img src="/lulus-murni/register/icon-google.svg" alt="icon" />
                  <h1 class="text-[14px] mt-1">Daftar dengan Google</h1>
                </button>
              </div>
              <div class="flex justify-center">
                <button class="text-[14px]" @click="toLoginPage">Sudah Punya akun? <span class="underline text-[#249CD9]">Login</span></button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    toLoginPage(){
       this.$router.push(`/login`)
     }
  }
}
</script>

<style></style>
