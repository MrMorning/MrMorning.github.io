---
title: '论文笔记: SemGCN'
date: 2020-08-05 16:01:52
tags: 论文笔记, GNN, GCN, human, pose
---



## 方法简介

* 传统的GCN在更新点的时候，对于所有邻居都是一样的权重（直接sum）起来，这是由于作为一种不规则的结构，order难以确定。
* 然而对于一个点而言，不同邻居的重要性不同。为了解决这个问题，本文提出训练一个mask，为每个点赋予不同的权重。
* baseline的GCN更新公式为：$\mathbf{X}^{(l+1)}=\sigma\left(\mathbf{W} \mathbf{X}^{(l)} \tilde{\mathbf{A}}\right)$
* 本文的GCN更新公式为：$\mathbf{X}^{(l+1)}=||_{d=1}^{D_{l+1}} \sigma\left(\overrightarrow{\boldsymbol{w}}_{d} \mathbf{X}^{(l)} \rho_{i}\left(\mathbf{M}_{d} \odot \mathbf{A}\right)\right)$
* 其中，$\mathbf{M}_d$是第$d$个channel的mask，$\mathbf{A}$是邻接矩阵（邻居矩阵。作者说用他这个方法可以增大感受野，所以我理解的话，这里应该不仅仅包括距离为1的点），$\rho_i$是sigmoid，$\odot$是一种“channel-wise”的运算，如果A这里是1，那么输出M里面对应的值，如果是0，那么输出一个很小的负数（为了过sigmoid时候输出成0）。（实现的时候可以直接把A里面的0都换成一个很大的负数？）
* 看上去这么做的motivation和attention机制是一样的：观察到不同点实际上的不对称性。作者在解释与attention的区别的时候提到，attention机制中权值和输入点的embedding有关，但是这在某些问题上不合适，比如人体结构理解这一问题，一个固定的关节点应当对于不同的输入都有着相同的反馈权重。
* 这一方法作者说来自于CNN的启发。在CNN中，filter对于不同位置的权重是不同的，因此推广到graph里面来。



## 延伸阅读

### Spatial Temporal Graph Convolutional Networks for Skeleton-Based Action Recognition(ST-GCN)

* 用GCN的方法做动作识别。

* 作者提到本文和这篇文章的方法很像，所以大致扫了一下。
* 事实上还是有点不同。
* $f_{\text {out}}\left(v_{t i}\right)=\sum_{v_{t j} \in B\left(v_{t i}\right)} \frac{1}{Z_{t i}\left(v_{t j}\right)} f_{\text {in}}\left(v_{t j}\right) \cdot \mathbf{w}\left(l_{t i}\left(v_{t j}\right)\right)$
* 把邻居分成几个group，每个group共享一个（可训练的）权重。$l$表示把点映射到group的映射。
* 一种挺有意思的分组方式是按照距离重心的远近进行分组。
* 和这篇文章很像的是3.5节，加了一个learnable mask M，类似于本文的作用。可以理解成这是边的权重，而上面的分组是点的权重。



### Semi-supervised classification with graph convolutional networks

* GCN的经典文章。
* 



## 启发思考

* 如果有点occulusion，那么实现的时候就直接赋成0吧
* 一个有趣的事情是似乎两篇文章都借用了CNN的例子作为motivation，但问题是貌似CNN在convolution的时候没有f额，大概是把卷积层和后面的MLP结合起来看了？
* 