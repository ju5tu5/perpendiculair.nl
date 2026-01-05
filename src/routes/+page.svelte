<script>
  let { data } = $props()

  // console.log(data.articles)
</script>

<h1>Perpendiculair</h1>

<p>Een blog over dingen...</p>

{#each data.articles as article }
  <article>
    <h2>{article.titel}</h2>
    <p>{article.body}</p>
  </article>
  
{/each}
