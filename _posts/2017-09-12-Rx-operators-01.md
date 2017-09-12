---
layout: post
title: "rxjs 操作符学习"
date: 2017-09-12 15:00:00 +0800
categories: rxjs
---

rxjs 操作符学习

```ts
    Rx.Observable
      .zip(
      Rx.Observable
        .of('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'x'),
      Rx.Observable.interval(1000),
      v => v[0]
      )
      .buffer(
      Rx.Observable
        .interval(3050).mapTo('B')
      )
      .subscribe(v => console.log(v));
```