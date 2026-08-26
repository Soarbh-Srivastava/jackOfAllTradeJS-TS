{#snippet link(title)}
  <li>
    <a href="#">{title}</a>
  </li>
{/snippet}

<nav class="flex">
  <a class="flex-1 font-bold" href="/">Unicorn Corp</a>

  <ul class="flex gap-2">
    {@render link('Home')}
    {@render link('About')}
    {@render link('Services')}
    {@render link('Contact')}
  </ul>
</nav>
