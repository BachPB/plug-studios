<script>
  import "../app.css";
  import TopBar from "./Items/TopBar.svelte";
  import SideBar from "./Items/SideBar.svelte";
</script>

<div class="h-screen w-screen bg-gray-950 overflow-hidden">
  <TopBar />
  <SideBar />
  <main
    class="lg:ml-64 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(100vh-4rem)]
    w-full"
  >
    <div
      class="max-w-none prose prose-invert
          prose-pre:bg-gray-900/50 prose-pre:border prose-pre:border-gray-800
          prose-code:text-white
          prose-h1:text-white prose-h1:text-2xl sm:prose-h1:text-3xl lg:prose-h1:text-4xl
          prose-h2:text-white prose-h2:text-xl sm:prose-h2:text-2xl lg:prose-h2:text-3xl
          prose-h3:text-white prose-h3:text-lg sm:prose-h3:text-xl lg:prose-h3:text-2xl
          prose-strong:text-white
          prose-a:text-blue-400
          prose-p:text-gray-400 prose-p:text-sm sm:prose-p:text-base
          prose-li:text-gray-400 prose-li:text-sm sm:prose-li:text-base
          prose-pre:text-sm sm:prose-pre:text-base
          prose-pre:p-3 sm:prose-pre:p-4
          prose-img:rounded-lg"
    >
      <slot />
    </div>
  </main>
</div>
