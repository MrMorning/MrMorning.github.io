---
title: 数学分析II（H）复习笔记
date: 2020-09-20 23:41:48
tags:
---

## 级数解题方法总结

### 常数项级数

#### 级数值的计算

- 利用已知的封闭形式
- 裂项相消
  - $\sum_{n=0}^{\infty} \frac{x^{2^{n}}}{1-x^{2^{n+1}}}$(5.1.3)
  - $\sum_{n=0}^{\infty} \arctan \frac 1{2k^2}$(5.1.4)
- 建立方程
  - $q\cos\alpha+q^2\cos2\alpha+\cdots+q^n\cos n\alpha+\cdots(|q|<1)$(5.1.7)
- 利用子序列的极限
  - 若$\lim a_n = 0$, 那么若$S_{kn}$极限存在，那么$\lim_{n \to \infty} S_n = \lim_{n \to \infty} S_{kn}$.
  - $1+\frac{1}{2}+\left(\frac{1}{3}-1\right)+\frac{1}{4}+\frac{1}{5}+\left(\frac{1}{6}-\frac{1}{2}\right)+\frac{1}{7}+\frac{1}{8}+\left(\frac{1}{9}-\frac{1}{3}\right)+\cdots$(5.1.8)
- 利用一致收敛级数的解析性质
- 考虑转化成Riemann和
- 其他方法
  - 设$x \in [0, \pi]$，求$\sum_{n=1}^{\infty} \frac{\sin nx}{n}$.(5.1.10) [提示：使用Riemann引理]



#### 证明正项级数收敛

- 定义
  - Cauchy准则
    - 正项级数$\sum a_n = \infty$.求证$\sum a_n/S_n$发散。(5.1.12)
  - 单调有界
    - 设${a_n}$是正项数列，且级数$\sum \frac{1}{a_n}$收敛。求证：$\sum \frac{n^2 a_n}{(a_1+a_2+\cdots+a_n)^2}$也收敛。
- ==比较法==
  - 比较阶数
    - 证明$\sum \frac{1}{n^{1+1/n}}$敛散性。
  - 优级数
    - $a_n>0, b_n>0,\exists\alpha >0, \frac{b_n}{b_{n+1}}a_n-a_{n+1} \geq \alpha$，求证$\sum b_n$收敛。
  - 判别法
    - 证明收敛：$\sqrt{2-\sqrt{2}}+\sqrt{2-\sqrt{2+\sqrt{2}}}+\sqrt{2-\sqrt{2+\sqrt{2+\sqrt{2}}}}+\cdots$
- 转化成反常积分的敛散性
  - 若$f(x)$为单调递减的正值函数，又有$\lim_{x \to +\infty} \frac{e^x f(e^x)}{f(x)} < 1$，求证$\sum f(n)$收敛。(5.1.25)
- 利用线性性质



#### 证明变号级数收敛

- 证明绝对收敛1
- Leibniz
- Abel/Dirichlet
  - Abel: 级数收敛$\times$单调有界
  - Dirichlet: 级数有界$\times$单调趋向于0
- Cauchy + Abel
  - 设级数$\sum a_n$收敛，级数$\sum (b_{n+1}-b_n)$绝对收敛，试证明$\sum a_nb_n$也收敛。(5.1.35)
- 



#### 证明级数发散

- 通项$a_n\not \to 0$
- 线性分解，一部分收敛，一部分发散



#### 反例若干

- 一正项收敛级数，满足$a_n \not = o(1/n)$
  - $\sum_{n=1}^{\infty} a_{n}=1+\frac{1}{2^{2}}+\frac{1}{3^{2}}+\frac{1}{4}+\frac{1}{5^{2}}+\frac{1}{6^{2}}+\frac{1}{7^{2}}+\frac{1}{8^{2}}+\frac{1}{9}+\frac{1}{10^{2}}+\cdots$
- 一收敛级数，满足$\sum a_n^3$发散。
  - 参见裴礼文(5.1.48)
- 



### 函数项级数及其一致收敛性

一致收敛，即在逐点收敛的前提下，函数列的收敛性在$x$的取值域内关于$x$的一致性。

关键是分析余项$R_n(x)$，在$n$充分大后，是否关于$x$都趋向于0.



#### 预备知识：函数的性质

- 一致连续：$\forall \epsilon>0, \exists\delta>0, \forall x \in U(x_0, \delta),|f(x) - f(x_0)| < \epsilon$

- Cantor定理：在闭区间$[a,b]$上连续的函数一定一致连续

- 第二积分中值定理：若$g$, $fg$均在$[a,b]$上可积且$f(x)$在$[a,b]$上单调，则存在$\xi \in [a,b]$满足：$\int_{a}^{b} f(x) g(x) d x=f(a) \int_{a}^{\xi} g(x) d x+f(b) \int_{\xi}^{b} g(x) d x$

  



#### 一致收敛性的判断

- $\epsilon-\delta$语言
- 放大法
  - 利用不等式：Cauchy
  - 对$x$求最大值
  - 估计余和
    - 对于Leibniz级数，级数余和$|r_n|$有估计式：$|r_n| \leq a_{n+1}$.
  - 利用递推进行放缩
    - 设$f_1(x)$在$[a,b]$上Riemann可积，$f_{n+1}(x) = \int_{a}^x f_n(t) dt$.求证：$f_n(x) \rightrightarrows 0$.
    - 设$f(x)$在$\mathbb{R}$上连续，满足$x \not =0$时，$|f(x)| < |x|$，且$f_x(x) = f(x), f_n(x) = f(f_{n-1}(x))$.求证：$f_n(x) \rightrightarrows 0$。
- Cauchy准则
  - 求证：级数$\sum_{k=1}^{\infty} \frac{\sin kx}{x}$在$x=0$的邻域内非一致收敛。
- 判别法
  - 优级数
  - Abel/Dirichlet
    - $\sum a_n b_n$
    - Abel: $\sum a_n$一致收敛，$b_n$（关于$n$）单调，$b_n$（关于$x$）一致有界。
    - Dirichlet: $\sum a_n$一致有界，$b_n$（关于$n$）单调，$b_n$一致收敛于$0$.
    - 证明：$\sum_{n=1}^{\infty} (1-x)\frac{x^n}{1-x^{2n}}\sin nx$在$(1/2,1)$内一致收敛。
  - Dini定理
    - 设$u_n(x) \geq 0$, 在$[a,b]$上连续，$n=1,2,\cdots$,又$\sum u_n(x)$在$[a,b]$上收敛于连续函数$f(x)$，则$\sum u_n(x)$在$[a,b]$上一致收敛于$f(x)$。
    - 事实上，条件可以弱化成：$f_n(x) \to f(x)$，$f(x)$连续，余项$r_n(x)$在区间$[a,b]$上连续且单调趋向于0时，有$f_n(x) \rightrightarrows f(x)$.
    - 简要证明：由于$r_n(x) \searrow 0$, $\forall \epsilon > 0$，对每一个固定的$x_0$，$\exists N > 0$, 当$n > N$时有$r_n(x) < \epsilon$，注意到$r_n(x)$是连续的，因此$\exists \delta > 0$, 对此邻域内的任何一个$x$，有$r_n(x) < \epsilon$，当$n>N$时更有$r_n(x) < \epsilon$（利用单调性可知）。因此对于每个$x_0$，都有一个开邻域，使得在这个范围内$r_n(x)$是一致收敛于0的。利用有限覆盖即可得证。另外还可以通过致密性原理证明，请参阅裴礼文
    - 证明：$\frac{1}{1+(1+x/n)^n}$在$[0, 1]$上一致收敛。



#### 杂题选做

- 连续性的判断

  - 本质：有限函数列的性质可以通过一致收敛推广到无限函数列。
  - 证明连续性的时候要考虑利用内闭一致收敛。例：证明$f(x) = \sum(x + \frac 1n)^n$在$(-1, 1)$上一致收敛。
  - 可以考虑利用连续性来证明非一致收敛。例：证明$\sum_{n=1}^{\infty} \frac{x}{\left(1+x^{2}\right)^{n}}$在$(0, +\infty)$非一致收敛。

- 可微性

  - 课本上的可微条件略微苛刻，我们在这里给出一个更加松的条件。事实上，这个新的定理的证明也相对原证明更加自然。

  - 已知在$[a,b]$上(1)$\exists x^*$使得$\lim f_n(x^*) = f(x^*)$.(2)$f_n(x)$可导，且导函数一致收敛到$g(x)$即$f'_n(x) \rightrightarrows g(x)$.

  - 证明(1)$f_n(x)$在该区间上一致收敛，记作$f_n(x) \rightrightarrows f(x)$。(2)$f(x)$可导，且$f'(x) = g(x)$.

  - 分析：我们知道，一致收敛的函数列最重要的性质就是可以将有限的函数的连续性质扩展到无限的函数上去。在这里，假设我们已经证明出了第一问，那么要证明$f(x)$可导，就要从定义着手：$\lim_{x \to x_0} \frac{f(x) - f(x_0)}{x-x_0}$这个==极限==存在。注意到这是一个无限函数列的极限，那么可以想到，如果我们把$h(x) := \frac{f(x) - f(x_0)}{x-x_0}$，那么只要证明当$x \to x_0$的时候，$h(x)$极限存在即可。因此可以构造$h_n(x) = \frac{f_n(x) - f_n(x_0)}{x-x_0}$，（显然有$h_n(x) \rightarrow h(x)$）如果可以证明$h_n(x) \rightrightarrows h(x)$，那么$\lim_{x \to x_0}  h(x) = \lim_{n \to \infty} \lim_{x \to x_0} h_n(x) = \lim_{n \to \infty} f'_n(x) = g(x)$.则原式就得证了。

  - 证明：构造$h_n(x) = \frac{f_n(x) - f_n(x_0)}{x-x_0}$，其中$x_0$是区间内的任意数. 我们首先证明：$h_n(x)$一致收敛。事实上，使用柯西，我们有$|h_n(x) - h_m(x)| = |f_n(x) - f_m(x) - f_n(x_0) + f_m(x_0)| / |x-x_0| = |f_n'(\xi) - f'_m(\xi)|)$, 考虑到$f'_n(x)$是一致收敛的，当$n, m$足够大，上式可以无限小，因此$h_n(x)$一致收敛。如果取$x_0 = x^*$，有$|f_n(x) - f_m(x)| \leq |f_n(x^*)-f_m(x^*)| + |x-x^*|\epsilon\leq M\epsilon$（利用了$f_n(x^*)$的收敛性）。考虑到$x$的任意性，$f_n(x) \rightrightarrows f(x)$。又$h_n(x)$一致收敛于$h(x)$，则

    $$f'(x)=\lim_{x \to x_0} \frac{f(x) - f(x_0)}{x-x_0} = \lim_{x \to x_0}  h(x) = \lim_{n \to \infty} \lim_{x \to x_0} h_n(x) = \lim_{n \to \infty} f'_n(x) = g(x)$$

    原命题得证。

- 可积性

  - 如果满足条件，可以逐项求积。如果不满足定理条件，可以尝试证明$\int R_n(x) \to 0$.
  - 证明：级数$\sum x^{2n} \ln x$在$(0, 1)$内非一致收敛，但是在$[0, 1]$上可逐项积分。

- 判断非一致收敛

  - 级数的话，先看一下通项是否一致趋向于0
  - 连续定理



### 幂级数、傅里叶级数

- 幂级数展开
  - $\frac{1}{(1+x)(1+x^2)(1+x^4)}$
  - $\sin^3(x)$
  - $\frac{x\sin\alpha}{1-2x\cos \alpha + x^2}$（待定系数法，详见5.3.14）
  - 证明，对$\forall k \in Z^+, \sum \frac{n^k}{n!}$是$e$的整数倍。
  - 求幂级数$S(x) = \sum_{n = 0}^{\infty} \frac{(-1)^n}{(2n)!} x^n$.
  - 



## 多元微分学方法总结

### 多元函数极限理论

- 计算
  - 不等式、夹逼定理
  - 变量代换、极坐标
  - 初等函数连续性、四则运算、代数变形
  - $\epsilon-\delta$ 
- 证明极限不存在
  - $\lim_{(x,y) \to (0, 0)} \frac{xy}{x+y}$
    - 取$y = -x + mx^2$
- 一些结论
  - 逐项极限和二元极限若都存在，则必定相等
  - 若$\lim_{y\to y_0} f(x, y)$对任意$x$收敛，$\lim_{x\to x_0} f(x, y)$对任意$y$一致收敛，那么$\lim_{x \to x_0} \lim_{y\to y_0} f(x, y) = \lim_{y \to y_0} \lim_{x\to x_0} f(x, y)$.
  - 若$f(x,y)$分别是单变量$x,y$的连续函数，则满足以下任意条件，则$f(x,y)$二元连续。
    - 对其中一个变量单调
    - 对$y$关于$x$一致连续
      - 对其中一个变量满足Lipschitz条件

### 多元微分学

- 一些结论
  - 二阶偏导连续 $\to$ 可交换求偏导次序
  - $f_x'$存在，$f_y'$连续 $\rightarrow$ 可微 （但是并不是必要条件）
  - 可微 $\rightarrow$ 偏导数存在、函数连续
- 设$u$的所有二阶偏导都连续，且$u_{xx} = u_{yy}, u(t, 2t) = t, u_x(t, 2t) = t^2$。求$u_{xy}(t, 2t)$.
- 给定方程$x^2+y+\sin(xy) = 0$，求证由该方程确定的隐函数在$x=0$处取严格极大值。（提示：证明$y = o(x)$）
- 



## 多元积分学方法总结

### 积分技巧复习

- 有理函数

  - 分解
  - 配方
  - 倒代换

- 三角函数

  - 利用$\mathrm{d}(\sec x) = \sec x \tan x, \mathrm d (\tan x) = \sec^2 x$
  - Wallis公式：$\int_0^{\pi/2} \sin^n(x) \mathrm dx = \int_{0}^{\pi/2} \cos^n (x) \mathrm dx = \frac{(n-1)!!}{n!!} \pi/2(n偶), \frac{(n-1)!!}{n!!}(n奇)$
  - 利用万能公式：$\sin x = \frac{2t}{1+t^2}, \cos x = \frac{1-t^2}{1+t^2}, \tan x = \frac{2t}{1-t^2}$
  - 代数变换：三角公式，上下同时乘以$(1-\sin x)$....

- 无理函数

  - 三角代换

  - 欧拉代换

    - 令$\sqrt{ax^2 + bx + c} = t-\sqrt a x(a>0)$
    - 令$\sqrt{ax^2+bx+c} = xt+\sqrt c(c>0)$
    - 令$\sqrt{ax^2+bx+c} = t(x-\lambda)$($\lambda$是一个实根)

  - 分部积分

    - $\int \sqrt{a^2 + x^2} \mathrm dx = x\sqrt{a^2 +x^2} - \int \frac{x^2\mathrm dx}{\sqrt{a^2 + x^2}}\\=x\sqrt{a^2 +x^2} - \int \frac{a^2+x^2-a^2}{\sqrt{a^2 + x^2}}\mathrm dx\\=x\sqrt{a^2 +x^2} - \int \sqrt{a^2 + x^2} \mathrm dx + a^2 \int \frac{\mathrm dx}{\sqrt{a^2 + x^2}}\\ =x\sqrt{a^2 +x^2} - \int \sqrt{a^2 + x^2} \mathrm dx + a^2 \ln|x + \sqrt{a^2 + x^2}|$

      $\int \sqrt{a^2 + x^2} \mathrm dx = \frac{1}{2}(x\sqrt{a^2 + x^2} + a^2 \ln|x+\sqrt{a^2 + x^2}|)$

    - $\int \sqrt{a^2 - x^2} \mathrm dx = \frac 12(x\sqrt{a^2-x^2} + a^2 \arcsin \frac xa)$

    - 

- 一些常用的不定积分（需要背过）

  - $\int \sec x \mathrm dx = \ln |\sec x + \tan x|$
  - $\int \frac1{a^2+x^2} \mathrm dx = \frac1a \arctan \frac xa$
  - $\int \frac1{\sqrt{a^2-x^2}} \mathrm dx = \arcsin \frac xa$
  - $\int \frac{\mathrm d x}{\sqrt{x^{2} \pm a^{2}}}=\ln \mid x+\sqrt{x^{2} \pm a^{2}}|=\mathrm{arsinh} \frac xa $
  - $\int \tan x \mathrm dx = - \ln |\cos x|$

- 相对没有那么常用的不定积分

  - $\int \frac 1{a^2 - x^2} \mathrm dx = \frac 1{2a} \ln \frac {a+x}{a-x}$
  - $\int \sqrt{a^2 + x^2} \mathrm dx = \frac{1}{2}(x\sqrt{a^2 + x^2} + a^2 \ln|x+\sqrt{a^2 + x^2}|)$
  - $\int \sqrt{a^2 - x^2} \mathrm dx = \frac 12(x\sqrt{a^2-x^2} + a^2 \arcsin \frac xa)$
  - $\int \sqrt{x^2 - a^2} \mathrm dx = \frac 12(x\sqrt{x^2-a^2} - a^2 \ln |x + \sqrt{x^2 - a^2}|)$

- 一些不容易想到的凑微分

  - $e^x\sin x \mathrm dx = \mathrm d(\frac{e^x}2(\sin x - \cos x))$

### 含参积分理论

#### 定理

含参积分$g(x) = \int_{a}^b f(x, y) dy$. 考虑在区间$I = [x-\delta, x+\delta]$

- 连续性
  - 如果$f(x,y)$在$I \times [a, b]$上连续
  - 如果$f(x,y)$关于$x$连续对$y$一致
- 可微性
  - 如果$f(x,y)$, $f_x'(x,y)$在$I \times [a, b]$连续
- 可积性
  - 如果$f(x, y)$在$I \times [a, b]$上连续



#### 例题

- 设函数$u$在$\mathbb{R}^2$内有以下条件：

  - 二阶偏导数连续
  - $u_{xx} + u_{yy} = 0$
  - $u_x, u_y$对任意固定的$y \in \mathbb{R}$，是$x$的以$2\pi$为周期的函数

  证明：函数$f(y)=\int_{0}^{2 \pi}\left[\left(\frac{\partial u}{\partial x}\right)^{2}-\left(\frac{\partial u}{\partial y}\right)^{2}\right] \mathrm{d} x \equiv C$.

- 计算积分$I(a, b) = \int_0^1 \frac{x^b - x^a}{\ln x} \mathrm{d} x(a, b > 0)$

- 计算积分$I = \int_0^1 \frac{\ln (1+x)}{1 + x^2} \mathrm{d} x$ 





### 多元积分计算

### 常见三维形体

#### 一些需要提前说明的技巧

- 如果要判断三维形体的形状，首先考虑在多个面上进行投影，从而可以推断出一些东西
- 利用旋转：将$x^2 + y^2 \rightarrow x^2$
- 遇到交叉项，考虑作旋转变换
- 考虑对称性



#### 结论

- $z^2 = ax^2 + by^2$
  - 锥面
- $z^2 = xy$
  - 锥面
  - 通过旋转变换可得轴为x轴和y轴的角平分线
- $x^2/2 + y^2+z^/3 = 1$
  - 椭球面
- $z = x^2 + y^2$
  - 旋转抛物面
- $x^2/a^2 + y^2/b^2 - z^2/c^2 = 1$
  - 单叶双曲面
- $-x^2 / a^2 - y^2/b^2 + z^2/c^2 = 1$
  - 双叶双曲面
- $z = -x^2/a^2 + y^2/b^2$
  - 马鞍面



### 多元积分解题方法综述

- 第一类和第二类的本质区别并不是表示形式是$\mathrm dS$还是$\mathrm {d}x \mathrm dy$，而在于积分微元是否是有向的。
- 因此，两者可以非常轻易的进行转换——但是从解题的角度来思考，我把第二类变成第一类并没有什么好处，而把第一类变成第二类却可以利用外微分形式进行维度变换——然而基本上没有这种题

==从流形维度、变量维度两个方面进行思考，从而最终转化成易于计算的重积分==

- 首先决定流形维度，升维？降维？抑或不变？
  - 升维：
    - 主要工具是外微分形式
      - $\int_{\partial \Omega} \omega = \int_{\Omega} \mathrm d\omega$
      - $f \rightarrow \nabla f \rightarrow \nabla \times \nabla f \rightarrow \nabla \cdot \nabla \times \nabla f$
        - $f \rightarrow \mathrm {grad} f \rightarrow \mathrm {rot~grad} f \rightarrow \mathrm {div~rot~grad} f  $
    - 将曲线积分转化成曲面积分：Green公式、Stokes公式
    - 将曲面积分转化成三重积分：Gauss公式
  - 降维：
    - 主要工具同样是外微分形式
  - 总结：要变换流形维度，唯一的方法就是利用广义stokes公式
- 其次，决定变量维度。
  - 用几个变量，或者说在几维欧式空间中考虑问题
  - 以二维流形上的积分（也就是第二类曲面积分）为例
    - 三维表达：
      - $\mathrm dx \mathrm dy, \mathrm dy \mathrm dz, \mathrm dz\mathrm dx$
      - 一般题目就是这么给的，也是最常见的方法
      - 需要转化成三个二维表达
    - 二维表达：
      1. 换元成$\mathrm du \mathrm dv$
      2. 全部换成$\mathrm dx \mathrm dy$（可轮换）
      3. 由三维表达转化而来
    - 一维表达：
      - $\mathrm dS$
- 一些小技巧
  - 在高维空间表达低维流形的时候，由于有冗余，所以可以考虑利用方程对被积函数作简化
  - 当利用Green公式可以证明绕着原点任何路径积分都一样的时候，可以考虑引入参数，利用含参积分的性质，在积分号里面取极限来解决。
    - 例：计算曲线积分$I = \oint_{C} \frac{e^y}{x^2+y^2}[(x\sin x + y\cos x) \mathrm dx + (y\sin x - x\cos x) \mathrm dy]$，其中$C: x^2 + y^2 = 1$
  - 利用求极限证明一些性质
    - 若在任意点为中心的上半圆$C$上有$\int_C P\mathrm dx + Q \mathrm dy \equiv 0$. 求证：$P \equiv 0, Q_y \equiv 0$.
  - 利用对称性
    - 几何对称
    - 轮换对称
  - 参数方程表示的曲面上的第一型曲面积分
    - 若$\mathbf{r} = \mathbf {r}(u, v)$, 那么$\int_S f \mathrm dS = \int_{\Delta} f(x(u, v), y(u, v), z(u,v)) \sqrt{EG-F^2} \mathrm du\mathrm dv$, 其中：$E = \sum x_u^2 = x_u^2+y_u^2+z_u^2, \\G = \sum x_v^2 = x_v^2 + y_v^2 + z_v^2, \\F = \sum x_ux_v= x_ux_v + y_uy_v+z_uz_v$
    - 



#### 流形积分的欧式空间转换方法综述

- 一维流形上的积分
  - 
- 二维流形上的积分



#### 三种观点：表达、转化、技巧

- 表达
  - 曲线的表达
    - 参数方程
  - 曲面的表达
    - 隐函数$F(x, y, z) = 0$
    - 参数方程$x = x(u, v), y = y(u, v), z = z(u, v)$
    - 显式表达$z = f(x, y)$
  - 积分的表达
- 转化
  - 曲线、曲面 $\leftrightarrow$ 直线、平面
    - 曲线积分：利用参数方程
    - 曲面积分的投影法
    - 第二类曲面积分转化成第一类曲面积分
  - 高维 $\leftrightarrow$ 低维
  - 换元
- 技巧
  - 对称性

#### 关于第二类曲面积分的一些需要强调的问题

- 在第二类曲面积分中$\int_S f(x, y, z) \mathrm dx \mathrm dy$中的$\mathrm dx \mathrm dy$仅仅只是一个*记号*，其含义与二重积分中的$\mathrm dx \mathrm dy$是**不同**的。
- 为此，我们将第二类曲面积分中的$\mathrm dx \mathrm dy$记作$\mathrm d \mathbf{x} \mathrm d \mathbf y$.
- 两类曲面积分在投影时为什么会有差别？原因在于第二类曲面积分天然可以分成三部分，并且三部分可以投影到三个平面上，而第一类曲面积分则很难做这样的分解。另一方面，两类曲面积分实际上都可以投影到一个平面上。

#### 具体阐述

- 重积分
  - 转化成累次积分
  - 利用对称性
  - 分区域积分
  - 换元
- 第一类曲线积分
- 第二类曲线积分
- 第一类曲面积分
- 第二类曲面积分

