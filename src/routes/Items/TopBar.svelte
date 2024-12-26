<script lang="ts">
  import { onMount } from "svelte";
  import { searchQuery, searchResults, performSearch } from "../../lib/search";
  import { browser } from "$app/environment";
  // @ts-ignore
  import { goto } from "$app/navigation";
  import { fade } from "svelte/transition";

  let searchInput: HTMLInputElement | null = null;
  let isSearchFocused = false;
  let currentSearch = "";
  let isMac = false;

  $: if (currentSearch !== undefined) {
    searchQuery.set(currentSearch);
    performSearch(currentSearch);
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (
      (event.key === "k" || event.key === "K") &&
      (event.metaKey || event.ctrlKey)
    ) {
      event.preventDefault();
      if (searchInput instanceof HTMLInputElement) {
        searchInput.focus();
      }
    }

    if (event.key === "Escape" && isSearchFocused) {
      if (searchInput instanceof HTMLInputElement) {
        searchInput.blur();
      }
      searchQuery.set("");
      searchResults.set([]);
    }
  }

  function handleResultClick(href: string) {
    searchQuery.set("");
    searchResults.set([]);
    goto(href);
  }

  onMount(() => {
    isMac = browser ? navigator.platform.includes("Mac") : false;
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });
</script>

<div
  class="sticky top-0 h-16 w-full bg-gray-950/20 backdrop-blur-xl border-b border-b-gray-800 z-50"
>
  <div class="flex items-center justify-between h-full px-6">
    <a
      href="/"
      class="flex items-center gap-3 hover:text-gray-400 text-gray-300 transition-colors duration-300"
    >
      <img src="/favicon.png" alt="Logo" class="h-12 w-12" />
      <span class="font-semibold text-lg">Plug Studios</span>
    </a>

    <div class="flex items-center gap-6">
      <div class="relative">
        <div class="relative">
          <input
            bind:this={searchInput}
            type="search"
            placeholder="Search..."
            class="bg-gray-800/50 text-sm text-gray-300 rounded-md
            px-4 py-1.5 w-80 outline-none focus:ring-1 focus:ring-gray-700
            placeholder-gray-500 transition-all duration-300"
            bind:value={currentSearch}
            on:focus={() => (isSearchFocused = true)}
            on:blur={() => setTimeout(() => (isSearchFocused = false), 200)}
          />
          <kbd
            class="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:inline-flex
            items-center gap-1 rounded border bg-gray-900 px-1.5 font-mono text-xs text-gray-400
            border-gray-700"
          >
            {isMac ? "⌘" : "Ctrl"} + K
          </kbd>
        </div>

        {#if $searchResults.length > 0 && isSearchFocused}
          <div
            class="absolute top-full mt-2 w-full bg-gray-900 rounded-md border border-gray-700 shadow-lg"
            transition:fade={{ duration: 100 }}
          >
            <div class="p-2">
              {#each $searchResults as result}
                <button
                  class="w-full text-left px-3 py-2 hover:bg-gray-800 rounded
                  transition-colors duration-150 group"
                  on:click={() => handleResultClick(result.href)}
                >
                  <div class="text-sm text-gray-200 font-medium">
                    {result.title}
                  </div>
                  <div class="text-xs text-gray-500 group-hover:text-gray-400">
                    {result.breadcrumb}
                  </div>
                </button>
              {/each}
            </div>
          </div>
        {/if}
      </div>

      <div class="flex items-center gap-3">
        <a
          href="https://github.com/Plug-Studios"
          class="text-gray-400 hover:text-white"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://discord.gg/SPqwJCzhuA"
          class="text-gray-400 hover:text-white"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
