if (Reveal !== undefined) {
  Reveal.initialize({

    controls: true,

    progress: true,

    history: true,

    center: true,

    transition: 'convex',

    dependencies: [
      // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
      { src: 'public/assets/vendors/reveal-js/lib/js/classList.js', condition: function() { return !document.body.classList; } },

      // Interpret Markdown in <section> elements
      { src: 'public/assets/vendors/reveal-js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: 'public/assets/vendors/reveal-js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

      // Syntax highlight for <code> elements
      { src: 'public/assets/vendors/reveal-js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

      // Zoom in and out with Alt+click
      { src: 'public/assets/vendors/reveal-js/plugin/zoom-js/zoom.js', async: true },

      // Speaker notes
      { src: 'public/assets/vendors/reveal-js/plugin/notes/notes.js', async: true },

      // MathJax
      { src: 'public/assets/vendors/reveal-js/plugin/math/math.js', async: true }
    ]
  });
}

// $('pre code').each(function(i, block) {
//   hljs.highlightBlock(block);
// });
