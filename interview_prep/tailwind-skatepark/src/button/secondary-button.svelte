<script>
  const { label = 'Button', ...props } = $props();
</script>

<button class="bg-white px-2 py-1.5 rounded-md shadow hover:outline hover:bg-slate-200" {...props}>{label}</button>