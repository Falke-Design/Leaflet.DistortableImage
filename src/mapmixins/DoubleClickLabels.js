L.Map.mergeOptions({
  doubleClickLabels: false,
});

L.Map.DoubleClickLabels = L.Handler.extend({
    addHooks(){},
    removeHooks(){}
});

L.Map.addInitHook('addHandler', 'doubleClickLabels', L.Map.DoubleClickLabels);
