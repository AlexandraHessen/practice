if (!('lastElementChild' in document.documentElement)) {
    Object.defineProperty(Element.prototype, 'lastElementChild', {
      get: function() {
        for (let nodes = this.children, n, i = nodes.length — 1; i >= 0; --i) {
          if (n = nodes[i], 1 === n.nodeType) {
            return n;
          }
        }
        return null;
      }
    });
  }