MyElement.prototype.loadData = function (url) {
    if (this._cache[url]) {
      queueMicrotask(() => {
        this._setData(this._cache[url]);
        this.dispatchEvent(new Event("load"));
      });
    } else {
      fetch(url).then((res) => res.arrayBuffer()).then((data) => {
        this._cache[url] = data;
        this._setData(data);
        this.dispatchEvent(new Event("load"));
      });
    }
  };