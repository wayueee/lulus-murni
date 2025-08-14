<template>
  <div>
    <!-- Desktop view -->
    <div class="hidden lg:block">
      <div class="grid grid-cols-2">
        <div
          class="bg-cover h-[690px] xl:h-[1000px]"
          style="
            background-image: url('/lulus-murni/lulus-murni/login/login-desktop.png');
          "
        >
          <div class="bg-[#044464]/70 h-[690px] xl:h-[1000px] bg-opacity-80">
            <div class="flex justify-end p-[38px]">
              <nuxt-link to="/">
                <img
                  class="w-[120px] xl:w-[170px]"
                  src="/lulus-murni/login/lulus-murni.png"
                  alt="lulus-murni"
                />
              </nuxt-link>
            </div>
            <div class="container">
              <div class="pt-[170px] flex flex-col text-white">
                <div class="flex flex-col">
                  <h1 class="font-semibold text-[30px] xl:text-[40px]">
                    Login to
                    <p>Your Account</p>
                  </h1>
                </div>
                <p class="text-[14px] xl:text-[18px]">
                  Mulai tryout dan siapkan diri untuk meraih impianmu.
                </p>
                <img
                  class="w-[15px] mt-2"
                  src="/lulus-murni/login/vector.svg"
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container relative">
          <div class="absolute right-14 top-14 xl:right-24">
            <img src="/lulus-murni/login/icon-book.svg" alt="icon-book" />
          </div>
          <div class="bg-white p-[20px] rounded-lg mt-[42px] mx-auto">
            <h1 class="font-semibold text-[20px]">Login.</h1>
            <p class="text-[14px] mb-[12px]">Silakan login dengan akun kamu.</p>
            <div
              class="flex rounded-lg border-2 pl-2 gap-[8px] mb-[12px] pr-1"
              :class="
                form.username.length !== 0
                  ? 'border-2 hover:border-[#249CD9] rounded-lg'
                  : ' '
              "
            >
              <img src="/lulus-murni/login/icon-profile.svg" alt="img" />
              <input
                class="w-full py-2 outline-none text-[14px]"
                v-model="form.username"
                @keyup.enter="handleLogin"
                type="text"
                name="username"
                id=""
                placeholder="Username/Email"
              />
            </div>
            <div
              class="flex rounded-lg border-2 pl-2 gap-[8px] mb-[12px] pr-1"
              :class="
                form.password.length !== 0
                  ? 'border-2 hover:border-[#249CD9] rounded-lg'
                  : ' '
              "
            >
              <img src="/lulus-murni/login/icon-password.svg" alt="img" />
              <input
                class="w-full py-2 outline-none text-[14px]"
                type="password"
                v-model="form.password"
                @keyup.enter="handleLogin"
                name="Password"
                id=""
                placeholder="Password"
              />
              <button>
                <img
                  class="pr-[12px]"
                  src="/lulus-murni/login/icon-eye.svg"
                  alt="img"
                />
              </button>
            </div>
            <div class="flex justify-end">
              <button
                class="text-[#249CD9] font-semibold text-[14px] hover:opacity-60"
              >
                Lupa Password?
              </button>
            </div>
            <div class="my-[20px]">
              <button
                @click="handleLogin"
                class="w-full py-[12px] rounded-lg border text-center font-semibold text-[14px] bg-[#249CD9] text-white hover:opacity-60"
              >
                Login
              </button>
            </div>
            <div class="flex">
              <img
                class="w-full"
                src="/lulus-murni/login/vector-line.svg"
                alt="icon"
              />
              <h1 class="text-[12px] mx-2 font-semibold text-[#A0A3BD]">
                atau
              </h1>
              <img
                class="w-full"
                src="/lulus-murni/login/vector-line.svg"
                alt="icon"
              />
            </div>
            <div class="my-[20px]">
              <button
                class="flex w-full gap-[8px] py-[12px] border-2 justify-center rounded-lg"
              >
                <img src="/lulus-murni/login/icon-google.svg" alt="icon" />
                <h1 class="text-[12px] lg:text-[14px] hover:opacity-60">
                  Login dengan Google
                </h1>
              </button>
            </div>
            <div class="flex justify-center hover:opacity-60">
              <button class="flex gap-[8px]" @click="toRegisterPage">
                <h1 class="text-[12px] lg:text-[14px]">Belum Punya akun?</h1>
                <span class="underline text-[#249CD9] text-[12px]">Daftar</span>
              </button>
            </div>
          </div>
        </div>
        <div
          v-if="errorLogin"
          class="fixed top-5 text-[14px] left-1/2 transform -translate-x-1/2 font-medium bg-red-500 text-white px-4 py-2 shadow-lg rounded-full border-blue-700 z-50"
        >
          {{ errorLogin }}
        </div>
        <div
          v-if="successLogin"
          class="fixed top-5 text-[14px] left-1/2 transform -translate-x-1/2 font-medium bg-blue-500 text-white px-4 py-2 shadow-lg rounded-full border-blue-700 z-50"
        >
          {{ successLogin }}
        </div>
      </div>
    </div>

    <!-- Mobile view -->
    <div
      class="w-full lg:hidden bg-cover h-[390px]"
      style="
        background-image: url('/lulus-murni/lulus-murni/login/login-mobile.png');
      "
    >
      <div class="bg-[#044464]/70 h-[390px] bg-opacity-80">
        <div class="py-[72px] container flex justify-center flex-col lg:hidden">
          <div class="flex justify-center mb-[52px]">
            <nuxt-link to="/">
              <img
                class="w-[150px]"
                src="/lulus-murni/login/lulus-murni.png"
                alt="lulus-murni"
              />
            </nuxt-link>
          </div>
          <div class="bg-white p-[20px] rounded-lg">
            <h1 class="font-semibold text-[16px]">Login.</h1>
            <p class="text-[12px] mb-[12px]">Silakan login dengan akun kamu.</p>
            <div
              class="flex rounded-lg border-2 pl-2 gap-[8px] mb-[12px] pr-1"
              :class="
                form.username.length !== 0
                  ? 'border-2 hover:border-[#249CD9] rounded-lg'
                  : ' '
              "
            >
              <img src="/lulus-murni/login/icon-profile.svg" alt="img" />
              <input
                class="w-full py-2 text-[12px] lg:text-[14px] outline-none"
                v-model="form.username"
                @keyup.enter="handleLogin"
                type="text"
                name="username"
                id=""
                placeholder="Username/Email"
              />
            </div>
            <div
              class="flex rounded-lg border-2 pl-2 gap-[8px] mb-[12px] pr-1"
              :class="
                form.password.length !== 0
                  ? 'border-2 hover:border-[#249CD9] rounded-lg'
                  : ' '
              "
            >
              <img src="/lulus-murni/login/icon-password.svg" alt="img" />
              <input
                class="w-full py-2 text-[12px] lg:text-[14px] outline-none"
                v-model="form.password"
                @keyup.enter="handleLogin"
                type="password"
                name="Password"
                id=""
                placeholder="Password"
              />
              <button>
                <img
                  class="pr-[12px]"
                  src="/lulus-murni/login/icon-eye.svg"
                  alt="img"
                />
              </button>
            </div>
            <div class="flex justify-end">
              <button
                class="text-[#249CD9] font-semibold text-[12px] lg:text-[14px] hover:opacity-60"
              >
                Lupa Password?
              </button>
            </div>
            <div class="my-[20px]">
              <button
                @click="handleLogin"
                class="text-[12px] lg:text-[14px] w-full py-2 rounded-lg border text-center font-semibold bg-[#249CD9] text-white hover:opacity-60"
              >
                Login
              </button>
            </div>
            <div class="flex">
              <img
                class="w-full"
                src="/lulus-murni/login/vector-line.svg"
                alt="icon"
              />
              <h1 class="text-[12px] mx-2 font-semibold text-[#A0A3BD]">
                atau
              </h1>
              <img
                class="w-full"
                src="/lulus-murni/login/vector-line.svg"
                alt="icon"
              />
            </div>
            <div class="my-[20px] hover:opacity-60">
              <button
                class="flex w-full py-2 border-2 justify-center rounded-lg"
              >
                <img src="/lulus-murni/login/icon-google.svg" alt="icon" />
                <h1 class="text-[12px] lg:text-[14px] mt-1">
                  Login dengan Google
                </h1>
              </button>
            </div>
            <div class="flex justify-center hover:opacity-60">
              <button
                class="text-[12px] lg:text-[14px]"
                @click="toRegisterPage"
              >
                Belum Punya akun?
                <span
                  class="underline text-[12px] lg:text-[14px] text-[#249CD9]"
                  >Daftar</span
                >
              </button>
            </div>
          </div>
        </div>
        <div
          v-if="errorLogin"
          class="fixed top-5 text-[12px] left-1/2 transform -translate-x-1/2 font-medium bg-red-500 text-white px-4 py-2 shadow-lg rounded-full border-blue-700 z-50"
        >
          {{ errorLogin }}
        </div>
        <div
          v-if="successLogin"
          class="fixed top-5 text-[12px] left-1/2 transform -translate-x-1/2 font-medium bg-blue-500 text-white px-4 py-2 shadow-lg rounded-full border-blue-700 z-50"
        >
          {{ successLogin }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      successLogin: "",
      errorLogin: "",
      formUser: {
        username: "",
        password: "",
      },
      form: {
        username: "",
        password: "",
      },
      loginData: null,
      isLogin: true,
    };
  },
  methods: {
    async handleLogin() {
      try {
        if (
          this.form.username === this.formUser.username ||
          this.form.password === this.formUser.password
        ) {
          this.successLogin = "Login berhasil!";
          setTimeout(() => {
            window.location.href = "/";
            const login = this.isLogin;
            localStorage.setItem("isLogin", JSON.stringify(login));
          }, 2000);

          return;
        } else {
          this.errorLogin =
            "Username atau password tidak sesuai dengan data registrasi.";
          setTimeout(() => {
            this.errorLogin = "";
          }, 2000);
        }

        const formData = new FormData();
        formData.append("username", this.formUser.username);
        formData.append("password", this.formUser.password);

        const response = await axios.post(
          "https://lulusmurni.com/api/login",
          formData
        );
        this.loginData = response.data;
        console.log("Data login:", formData);

        // if (
        //   this.loginData.status === "success" &&
        //   this.loginData.data?.redirect
        // ) {
        //   window.location.href = this.loginData.data.redirect;
        // }

        if (this.loginData.status === "success") {
          window.location.href = "/";
          const login = this.isLogin;
          localStorage.setItem("isLogin", JSON.stringify(login));
        }
      } catch (err) {
        console.error("Gagal login:", err);
      }
    },
    toRegisterPage() {
      this.$router.push(`/register`);
    },
  },
  mounted() {
    const login = localStorage.getItem("dataRegister");
    if (login) {
      const data = JSON.parse(login);
      this.formUser.username = data.username;
      this.formUser.password = data.password;
      console.log(data);
    }
  },
};
</script>

<style></style>
