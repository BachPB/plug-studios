<script lang="ts">
  import { navItems } from "$lib/index";
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";

  // Function to check if a path is active (including parent paths)
  function isActive(href: string) {
    return (
      $page.url.pathname === href || $page.url.pathname.startsWith(href + "/")
    );
  }

  function toggleSection(section: any) {
    $navItems = $navItems.map((item) => {
      if (item === section) {
        return { ...item, isOpen: !item.isOpen };
      }
      return item;
    });
  }
</script>

<div
  class="h-screen w-64 bg-gray-950 fixed left-0 top-16 border-r border-r-gray-800"
>
  <div class="py-2">
    <nav class="space-y-0.5">
      {#each $navItems as item}
        {#if item.children}
          <!-- Section with children -->
          <div class="mb-1">
            <button
              on:click={() => toggleSection(item)}
              class="flex items-center justify-between px-4 py-2.5 w-full text-gray-400 hover:text-white transition-all duration-200 hover:bg-gray-900/50 group"
            >
              <div class="flex items-center gap-2">
                {#if item.icon}
                  <svelte:component
                    this={item.icon}
                    class="w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors"
                  />
                {/if}
                <span class="text-sm font-medium">{item.label}</span>
              </div>
              <svg
                class="w-4 h-4 transform transition-transform duration-200 {item.isOpen
                  ? 'rotate-90'
                  : ''}"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {#if item.isOpen}
              <div
                class="mt-1 ml-4 space-y-0.5"
                transition:slide={{ axis: "y", duration: 200 }}
              >
                {#each item.children as child}
                  <a
                    href={child.href}
                    class="flex items-center px-4 py-2 text-sm text-gray-400 hover:text-white transition-all duration-200 w-full rounded-sm
                      {isActive(child.href)
                      ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                      : 'hover:bg-gray-900/50'}"
                  >
                    <div class="flex items-center gap-2">
                      {#if child.icon}
                        <svelte:component
                          this={child.icon}
                          class="w-4 h-4 {isActive(child.href)
                            ? 'text-blue-400'
                            : 'text-gray-500'}"
                        />
                      {/if}
                      <span>{child.label}</span>
                    </div>
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {:else}
          <!-- Single item -->
          <a
            href={item.href}
            class="flex items-center px-4 py-2.5 text-gray-400 hover:text-white transition-all duration-200 w-full rounded-sm group
              {isActive(item.href)
              ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
              : 'hover:bg-gray-900/50'}"
          >
            <div class="flex items-center gap-2">
              {#if item.icon}
                <svelte:component
                  this={item.icon}
                  class="w-4 h-4 {isActive(item.href)
                    ? 'text-blue-400'
                    : 'text-gray-500 group-hover:text-gray-400'} transition-colors"
                />
              {/if}
              <span class="text-sm font-medium">{item.label}</span>
            </div>
          </a>
        {/if}
      {/each}
    </nav>
  </div>
</div>
