---
title: Watch your head!
date: '2020-04-26T22:12:03.284Z'
description: Quick foolproof Metadata setup!
tags: html, svelte, metadata
---

Remember when people went to events and conferences? remember Badges? well, your webpage can wear lots of badges too and it can get overwhelming so here is the long story short!

This is a quick cheatsheet for getting up and running with metadata! for more reading check the resources at the end.

The `<head>` element contains all the metadata that the browser needs not render! Think of metadata as the badges your webpage wears around the internet!

So how much do you need really?

## Essentials

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- The above 2 meta tags *must* come first after the <head>
         for proper document rendering -->
</head>
```

- **`meta charset`** Handle displaying any language.
- **`meta name="viewport"`** Ensures mobile responsiveness.

## Primary tags

```html
<!-- Primary tags -->
<title>Page Title</title>
<meta name="title" content="Page Title" />
<meta name="description" content="Describe your webpage content" />
```

- **`title`** Defines the title for the browser toolbar, favorites, and search engine results.
- **`meta name="viewport"`** Ensures mobile responsiveness.

## Social sharing

This is easy to underappreciate as a new developer building your own pet projects, however at some point, you will need to share them, and no one wants to open a generic link on social media! Do your self a favor and include those in every project.

### Open graph tags

The [Open Graph protocol](https://ogp.me/) enables any web page to become a rich object in a social graph.

```html
<!-- Open Graph -->
<meta property="og:title" content="Page Title" />
<meta property="og:url" content="https://example.com/" />
<meta property="og:type" content="website" />
<meta property="og:description" content="Page Description" />
<meta property="og:image" content="https://example.com/path_to/thumbnail.jpg" />
<meta property="og:image:alt" content="Image description for accessibility" />
```

- **`og:title:`** The title of your object as it should appear within the graph, e.g., "The Rock".
- **`og:url:`** The canonical URL of your object that will be used as its permanent ID in the graph.
- **`og:type:`** The type of your object, e.g., "video.movie". Depending on the type you specify, other properties may also be required. Most of the time you would use 'website' or 'article'!
- **`og:image:`** An image URL which should represent your object within the graph.
- **`og:description:`** A one to two sentence description of your object.

### Twitter cards

Help twitter to show off your website links as a [twitter card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started)!

```html
 <!-- Twitter -->
 <meta property="twitter:card" content="summary_large_image" />
 <meta property="twitter:url" content="https://example.com/" />
 <meta property="twitter:title" content="Page Title" />
 <meta property="twitter:description" content="Page Description" />
 <meta
 property="twitter:image"
 content="https://example.com/path-to/thumbnail.jpg"
 />
 <meta
 property="twitter:image:alt"
 content="Image description for accessibility"
 />
</head>
```

- **`twitter:card:`** The card type, which will be one of “summary”, “summary_large_image”, “app”, or “player”.

## Putting it all together

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Primary tags -->
  <title>Page Title</title>
  <meta name="title" content="Page Title" />
  <meta name="description" content="Page Description" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://example.com/" />
  <meta property="og:title" content="Page Title" />
  <meta property="og:description" content="Page Description" />
  <meta property="og:image" content="example.com/path_to/thumbnail.jpg" />
  <meta property="og:image:alt" content="Image description for accessibility" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://example.com/" />
  <meta property="twitter:title" content="Page Title" />
  <meta property="twitter:description" content="Page Description" />
  <meta
    property="twitter:image"
    content="https://example.com/path-to/thumbnail.jpg"
  />
  <meta
    property="twitter:image:alt"
    content="Image description for accessibility"
  />
</head>
```

## Dynamic Metadata

In most cases your webpage will be generated dynamically using a front-end framework of sorts. In that case you will need a reusable component that injects each page's metadata on the fly.

Check this [Meta.svelte](https://svelte.dev/repl/171cce5542ec4a658eb1cdf1f0034929?version=3.21.0) component on svelte.dev REPL showing how to avoid the repetition and drying your code.

```html
// Meta.svelte
<script>
  export let metadata = {}
</script>

<svelte:head>
  {#if metadata.title}
  <title>{metadata.title}</title>
  <meta name="title" content="{metadata.title}" />
  <meta property="og:title" content="{metadata.title}" />
  <meta property="twitter:title" content="{metadata.title}" />
  {/if} {#if metadata.description}
  <meta name="description" content="Page Description" />
  <meta property="og:description" content="Page Description" />
  <meta property="twitter:description" content="Page Description" />
  {/if} {#if metadata.image}
  <meta property="og:image" content="example.com/path_to/thumbnail.jpg" />
  <meta
    property="twitter:image"
    content="https://example.com/path-to/thumbnail.jpg"
  />
  {/if} {#if metadata.imageAlt}
  <meta property="og:image:alt" content="{metadata.imageAlt}" />
  <meta property="twitter:image:alt" content="{metadata.imageAlt}" />
  {/if} {#if metadata.url}
  <meta property="og:url" content="{metadata.url}" />
  <meta property="twitter:url" content="{metadata.url}" />
  {/if} {#if metadata.type}
  <meta property="og:type" content="{metadata.type}" />
  {/if} <meta property="twitter:card" content={metadata.twitterCard ||
  "summary_large_image"} />
</svelte:head>
```

Then use it in your pages:

```html
//App.svelte
<script>
  import Meta from './Meta.svelte'

  const metadata = {
    title: 'Svelte is Awesome',
    description: 'It really is!',
    image: 'https://svelte.dev/images/twitter-card.png',
    imageAlt: 'Svelte svelte.dev',
    url: 'svelte.dev',
  }
</script>

<meta {metadata} />
```

You can do the same with every component-based framework!

## conclusion

As you can see in the resources below, there is a lot of metadata you can provide about your webpage, and you should explore it progressively.
However, this setup should get you covered for basic needs. When you need more, your client/supervisor will let you know!

Comments, suggestions, and corrections are welcome.

### Resources

- [What’s in the head? Metadata in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [A free guide to HTML5 <head> elements](https://htmlhead.dev/#recommended-minimum)
- [Metatags.io](https://metatags.io/)
- [Open Graph protocol](https://ogp.me/)
- [Getting started with twitter cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started)
