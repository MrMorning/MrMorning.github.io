---
title: '[bzoj2594][Wc2006]水管局长数据加强版——lct+离线'
tags: [生成树, 图论, lct, 数据结构]
date: 2017-03-10 10:51:00
---

#Brief Description
您有一个无向带权图，您需要支持两种操作。
1\. 询问两个点之间的最大权最小路径。
2\. 删除一条边。

# Algorithm Design
我们首先提出一个猜想：最优路径一定在原图的一个最小生成森林上，证明如下：
假设最优路径有$\phi$条边不再最小生成森林上，我们考察其中的一条边，根据定义，生成森林中一定有一条路径链接这条边的顶点且权值和小于这条边，那么我们如果使用这条路径代替这条边，$\phi$会减小而最大权不会增加，所以根据反证法我们就可以知道这个结论的正确性。
有了这个引理之后我们可以把原题转化为维护一个最小生成森林，这显然可以使用lct维护。
考虑细节。因为lct不是太支持删一条边，所以我们离线地倒过来做。
另外我们需要记录每条边是否被删。我开始使用了map，然而不知道为什么一直RE。后来改用二分查找就好了。所以——
## ~~抵制STL从我做起！（逃~~#

# Code
```cpp
#include <algorithm>
#include <cctype>
#include <cstdio>
#include <cstring>
#include <iostream>
const int maxv = 1500005;
int read() {
  int x = 0, f = 1;
  char ch = getchar();
  while (!isdigit(ch)) {
    if (ch == '-')
      f = -1;
    ch = getchar();
  }
  while (isdigit(ch)) {
    x = x * 10 + ch - '0';
    ch = getchar();
  }
  return x * f;
}
struct data {
  int from, to, dat, br, id;
  data(int x = 0, int y = 0, int z = 0, int i = 0, int j = 0)
      : from(x), to(y), dat(z), br(i), id(j) {}
  bool operator<(const data b) const {
    return this->from < b.from || ((this->from == b.from) && (this->to < b.to));
  }
} a[1000005];
struct req {
  int opt, x, y, id, ans;
  req(int x = 0, int y = 0, int z = 0, int k = 0, int fuck = 0) {
    this->opt = x;
    this->x = y;
    this->y = z;
    this->id = k;
    this->ans = fuck;
  }
} q[100005];
bool cmp(data a, data b) { return a.dat < b.dat; }
bool cmp2(data a, data b) { return a.id < b.id; }
int n, m, qaq, f[maxv], max[maxv], val[maxv], tot, maxnum[maxv];
int fa[maxv], ch[maxv][2];
bool rev[maxv];
int bisearch(int u, int v) {
  int l = 1, r = m;
  while (l <= r) {
    int mid = (l + r) >> 1;
    if (a[mid].from < u || (a[mid].from == u && a[mid].to < v))
      l = mid + 1;
    else if (a[mid].from == u && a[mid].to == v)
      return mid;
    else
      r = mid - 1;
  }
  return -1;
}
bool isroot(int x) { return ch[fa[x]][0] != x && ch[fa[x]][1] != x; }
void pushdown(int k) {
  if (rev[k]) {
    rev[k] ^= 1;
    rev[ch[k][0]] ^= 1;
    rev[ch[k][1]] ^= 1;
    std::swap(ch[k][0], ch[k][1]);
  }
}
void update(int x) {
  maxnum[x] = x;
  int l = maxnum[ch[x][0]], r = maxnum[ch[x][1]];
  if (val[l] > val[maxnum[x]])
    maxnum[x] = l;
  if (val[r] > val[maxnum[x]])
    maxnum[x] = r;
  max[x] = val[maxnum[x]];
}
void zig(int x) {
  int y = fa[x], z = fa[y], l = (ch[y][1] == x), r = l ^ 1;
  if (!isroot(y))
    ch[z][ch[z][1] == y] = x;
  fa[ch[y][l] = ch[x][r]] = y;
  fa[ch[x][r] = y] = x;
  fa[x] = z;
  update(y);
  update(x);
}
void splay(int x) {
  int s[maxv], top = 0;
  s[++top] = x;
  for (int i = x; !isroot(i); i = fa[i])
    s[++top] = fa[i];
  while (top)
    pushdown(s[top--]);
  for (int y; !isroot(x); zig(x)) {
    if (!isroot(y = fa[x])) {
      zig((ch[fa[y]][0] == y) == (ch[y][0] == x) ? y : x);
    }
  }
  update(x);
}
void access(int x) {
  for (int t = 0; x; t = x, x = fa[x]) {
    splay(x);
    ch[x][1] = t;
    update(x);
  }
}
void makeroot(int x) {
  access(x);
  splay(x);
  rev[x] ^= 1;
}
void split(int x, int y) {
  makeroot(y);
  access(x);
  splay(x);
}
void link(int x, int y) {
  makeroot(x);
  fa[x] = y;
}
void cut(int x, int y) {
  makeroot(x);
  access(y);
  splay(y);
  ch[y][0] = fa[x] = 0;
}
void init() {
  memset(val, 0, sizeof(val));
  n = read();
  m = read();
  qaq = read();
  for (int i = 1; i <= n; i++)
    f[i] = i;
  for (int i = 1; i <= m; i++) {
    int x = read(), y = read(), z = read();
    if (x > y)
      std::swap(x, y);
    a[i] = data(x, y, z);
  }
  std::sort(a + 1, a + 1 + m, cmp);
  for (int i = 1; i <= m; i++) {
    a[i].id = i;
    val[n + i] = a[i].dat;
    maxnum[n + i] = n + i;
  }
  std::sort(a + 1, a + 1 + m);
  for (int i = 1; i <= qaq; i++) {
    int x = read(), y = read(), z = read();
    q[i] = req(x, y, z);
    if (x == 2) {
      if (q[i].x > q[i].y)
        std::swap(q[i].x, q[i].y);
      int t = bisearch(q[i].x, q[i].y);
      a[t].br = 1;
      q[i].id = a[t].id;
    }
  }
}
int find(int x) { return f[x] == x ? x : f[x] = find(f[x]); }
void kruskal() {
  std::sort(a + 1, a + m + 1, cmp2);
  tot = 0;
  for (int i = 1; i <= m; i++) {
    if (!a[i].br) {
      int u = a[i].from, v = a[i].to, x = find(u), y = find(v);
      if (x != y) {
        f[x] = y;
        link(u, i + n);
        link(v, i + n);
        tot++;
        if (tot == n - 1)
          break;
      }
    }
  }
}
void solve() {
  for (int i = qaq; i >= 1; i--) {
    int op = q[i].opt, x = q[i].x, y = q[i].y;
    if (op == 1) {
      split(x, y);
      q[i].ans = val[maxnum[x]];
    }
    if (op == 2) {
      int k = q[i].id;
      split(x, y);
      int t = maxnum[x];
      if (a[k].dat < val[t]) {
        cut(a[t - n].from, t);
        cut(a[t - n].to, t);
        link(x, k + n);
        link(y, k + n);
      }
    }
  }
  for (int i = 1; i <= qaq; i++) {
    if (q[i].opt == 1)
      printf("%d\n", q[i].ans);
  }
}
int main() {
#ifndef ONLINE_JUDGE
  freopen("input", "r", stdin);
#endif
  init();
  kruskal();
  solve();
  return 0;
}
```