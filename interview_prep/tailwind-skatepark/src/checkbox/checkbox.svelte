<script>
  const { label = 'A Very Important Checkbox', id = 'checkbox', ...props } = $props();
</script>

<div class="group border bg-slate-100 p-4">
  <input {id} {...props} type="checkbox" />
  <label for={id} class="group-has-[:checked]:line-through">{label}</label>

  <!-- Fixed the colon here: group-has-[:checked] -->
  <div class="hidden flex-row space-x-2 group-has-[:checked]:flex">
    <label class="block">what is your reason ?</label>
    <input class="rounded-md border" />
    <button>Submit </button>
  </div>
</div>
