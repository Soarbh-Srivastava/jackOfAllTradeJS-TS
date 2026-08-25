<script>
  const { id = 'input', label, description, error, ...props } = $props();
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;
</script>

<div>
  <label
    class="group block font-medium after:ml-2 after:text-red-500 has-[:required]:after:content-['Required']"
    for={id}>{label}</label
  >
  <input
    class="block rounded-md border px-1 py-1.5 focus:outline-blue-500"
    {id}
    aria-describedby={descriptionId}
    aria-invalid={!!error}
    aria-errormessage={errorId}
    {...props}
  />
  {#if description}
    <p id={descriptionId}>{description}</p>
  {/if}
  {#if error}
    <p id={errorId}>{error}</p>
  {/if}
</div>
