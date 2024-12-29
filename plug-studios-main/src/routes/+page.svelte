<script lang="ts">
  import { Devs } from "../lib/index";
</script>

<div class="space-y-8 sm:space-y-12">
  <section class="space-y-3 sm:space-y-4">
    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
      Welcome to Plug Studios
    </h1>
    <p class="text-gray-400 text-base sm:text-lg">
      Discover our comprehensive collection of FiveM resources and
      documentation.
    </p>
  </section>

  <section class="space-y-4 sm:space-y-6">
    <h2 class="text-xl sm:text-2xl font-semibold text-white">Our Team</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {#each $Devs as member}
        <div
          class="bg-gray-800/50 rounded-lg p-4 sm:p-6 text-center border border-gray-700/50"
        >
          <img
            src={member.avatarUrl || "/default-avatar.png"}
            alt={member.name}
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4"
          />
          <h3 class="font-medium text-white mb-1">{member.name}</h3>
          <p class="text-sm text-gray-400">{member.role}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="space-y-4 sm:space-y-6">
    <h2 class="text-xl sm:text-2xl font-semibold text-white">Need Help?</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <a
        href="https://discord.gg/SPqwJCzhuA"
        class="bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-colors"
      >
        <h3 class="text-base sm:text-lg font-medium text-white mb-2">
          Join our Discord
        </h3>
        <p class="text-sm sm:text-base text-gray-400">
          Get help from our community and team members
        </p>
      </a>
      <a
        href="https://github.com/Plug-Studios"
        class="bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-colors"
      >
        <h3 class="text-base sm:text-lg font-medium text-white mb-2">GitHub</h3>
        <p class="text-sm sm:text-base text-gray-400">
          Report issues and contribute to our projects
        </p>
      </a>
    </div>
  </section>
</div>
