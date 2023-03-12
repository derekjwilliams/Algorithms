The Depth First Algorithm Examples have this simple graph

```mermaid
  graph TD;
      v0--cost:4-->v1;
      v1--cost:-2-->v2;
      v1--cost:6-->v3;
      v0--cost:5-->v2;
      v2--cost:1-->v3;
      v2--cost:10-->v2;
      v4;
```

ASCII Art (sucks)
```
    (v0)
    /  \
  4/    \5
  /      \
*        *
(v1)----*(v2)----|(4)
  \  -2  / *_____|
  6\    /1    10
    \  /
     **
    (v3)
```            
