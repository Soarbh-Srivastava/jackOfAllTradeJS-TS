<script>
  const { title = 'Card Title', description = '' } = $props();
</script>

<div class="border p-8 bg-slate-100">
  <h2 class= "text-xl font-semibold">{title}</h2>
  <p class="mt-1">{description}</p>
</div>
