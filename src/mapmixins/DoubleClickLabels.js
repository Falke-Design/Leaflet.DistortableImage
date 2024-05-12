L.Map.mergeOptions({
  doubleClickLabels: false,
});

L.Map.DoubleClickLabels = L.Handler.extend({});

L.Map.addInitHook('addHandler', 'doubleClickLabels', L.Map.DoubleClickLabels);
