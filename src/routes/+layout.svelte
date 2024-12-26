<script>
  import "../app.css";
  import TopBar from "./Items/TopBar.svelte";
  import SideBar from "./Items/SideBar.svelte";
</script>

<div class="h-screen w-screen bg-gray-950 overflow-hidden">
  <TopBar />
  <SideBar />
  <main class="ml-64 p-8 overflow-y-auto max-h-[calc(100vh-4rem)]">
    <div
      class="max-w-none prose prose-invert
          prose-pre:bg-gray-900/50 prose-pre:border prose-pre:border-gray-800
          prose-code:text-white
          prose-h1:text-white
          prose-h2:text-white
          prose-h3:text-white
          prose-strong:text-white
          prose-a:text-blue-400
          prose-p:text-gray-400
          prose-li:text-gray-400"
    >
      <slot />
    </div>
  </main>
</div>
