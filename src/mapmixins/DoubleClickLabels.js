L.Map.mergeOptions({
  doubleClickLabels: false,
});

L.Map.DoubleClickLabels = L.Map.Handler.extend({});

L.Map.addInitHook('addHandler', 'doubleClickLabels', L.Map.DoubleClickLabels);
